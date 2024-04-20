import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: ".env.local" });

const envSchema = z.object({
  DATABASE_SCHEMA: z.string().trim().min(1),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
