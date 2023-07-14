import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
   NEXT_RESAS_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_ORIGIN: z.string().url().min(1),
  },
  runtimeEnv: {
    NEXT_RESAS_API_KEY: process.env.NEXT_RESAS_API_KEY,
    NEXT_ORIGIN: process.env.NEXT_ORIGIN,
  },
});
