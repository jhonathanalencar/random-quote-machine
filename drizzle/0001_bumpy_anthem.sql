CREATE SCHEMA "lak";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lak"."author" (
	"author_id" serial PRIMARY KEY NOT NULL,
	"author" varchar(255) NOT NULL,
	CONSTRAINT "author_author_key" UNIQUE("author")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lak"."category" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"category" varchar(255) NOT NULL,
	CONSTRAINT "category_category_key" UNIQUE("category")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lak"."quote" (
	"quote_id" serial PRIMARY KEY NOT NULL,
	"quote" varchar(255) NOT NULL,
	"author_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	CONSTRAINT "quote_quote_key" UNIQUE("quote")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lak"."quote" ADD CONSTRAINT "quote_author_id_author_author_id_fk" FOREIGN KEY ("author_id") REFERENCES "lak"."author"("author_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lak"."quote" ADD CONSTRAINT "quote_category_id_category_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "lak"."category"("category_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
