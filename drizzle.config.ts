import { defineConfig } from "drizzle-kit";

import { env } from "@/helpers/env";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  schemaFilter: [env.DATABASE_SCHEMA],
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
