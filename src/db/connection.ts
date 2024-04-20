import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@/helpers/env";
import * as schema from "./schema";

export const conn = postgres(env.DATABASE_URL);
export const db = drizzle(conn, { schema });
