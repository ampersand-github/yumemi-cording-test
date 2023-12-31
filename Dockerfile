# https://github.com/vercel/next.js/tree/canary/examples/with-docker

FROM node:18-alpine AS base

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# deps
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./
RUN npm ci


# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# builder
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Arguments that can be passed at build time
ARG NEXT_ORIGIN
ARG NEXT_RESAS_API_KEY
ARG BASIC_AUTH_USER
ARG BASIC_AUTH_PASSWORD

# t3-envの関係でこっちで.envを作成する
RUN echo "NEXT_ORIGIN=${NEXT_ORIGIN}" >> .env \
RUN echo "NEXT_RESAS_API_KEY=${NEXT_RESAS_API_KEY}" >> .env \
RUN echo "BASIC_AUTH_USER=${BASIC_AUTH_USER}" >> .env \
RUN echo "BASIC_AUTH_PASSWORD=${BASIC_AUTH_PASSWORD}" >> .env

# Generate prisma client
RUN npx prisma generate

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# runner
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.env ./app/.env

COPY --chown=nextjs:nodejs start.sh ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["sh", "./start.sh"]
