import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GCP_PROJECT_ID: z.string().min(1),
    GCP_PRIVATE_KEY: z.string().min(1),
    GCP_CLIENT_EMAIL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ORIGIN: z.string().url().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_ORIGIN: process.env.NEXT_PUBLIC_ORIGIN,
    GCP_PROJECT_ID: process.env.GCP_PROJECT_ID,
    GCP_PRIVATE_KEY: process.env.GCP_PRIVATE_KEY,
    GCP_CLIENT_EMAIL: process.env.GCP_CLIENT_EMAIL,
  },
});
