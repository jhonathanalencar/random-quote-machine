import postgres from "postgres";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";

import { quote, author, category } from "@/db/schema";
import { env } from "@/helpers/env";

export async function getAllQuotes(): Promise<Quote[]> {
  const conn = postgres(env.DATABASE_URL);
  const db = drizzle(conn);

  const results: Quote[] = await db
    .select({
      quote: quote.quote,
      author: author.author,
      category: category.category,
    })
    .from(quote)
    .innerJoin(author, eq(author.authorId, quote.authorId))
    .innerJoin(category, eq(category.categoryId, quote.categoryId));

  return results;
}
