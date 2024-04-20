import { pgTable, pgSchema, unique, serial, varchar, foreignKey, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"


export const lak = pgSchema("lak");

export const author = lak.table("author", {
	authorId: serial("author_id").primaryKey().notNull(),
	author: varchar("author", { length: 255 }).notNull(),
},
(table) => {
	return {
		authorAuthorKey: unique("author_author_key").on(table.author),
	}
});

export const quote = lak.table("quote", {
	quoteId: serial("quote_id").primaryKey().notNull(),
	quote: varchar("quote", { length: 255 }).notNull(),
	authorId: integer("author_id").notNull().references(() => author.authorId, { onDelete: "cascade" } ),
	categoryId: integer("category_id").notNull().references(() => category.categoryId, { onDelete: "cascade" } ),
},
(table) => {
	return {
		quoteQuoteKey: unique("quote_quote_key").on(table.quote),
	}
});

export const category = lak.table("category", {
	categoryId: serial("category_id").primaryKey().notNull(),
	category: varchar("category", { length: 255 }).notNull(),
},
(table) => {
	return {
		categoryCategoryKey: unique("category_category_key").on(table.category),
	}
});