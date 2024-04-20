import { migrate } from "drizzle-orm/postgres-js/migrator";

import { conn, db } from "./db/connection";

async function bootstrap() {
  await migrate(db, { migrationsFolder: "./drizzle" });

  await conn.end();
}

bootstrap();
