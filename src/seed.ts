import { conn, db } from "./db/connection";
import { author, category, quote } from "./db/schema";

const authors = [
  {
    author: "Neil deGrasse Tyson",
  },
  {
    author: "Mark Twain",
  },
  {
    author: "Albert Einstein",
  },
  {
    author: "Arthur C. Clarke",
  },
  {
    author: "The Dude",
  },
];

const categories = [
  {
    category: "Knowledge-Learning",
  },
  {
    category: "Self-Improvement",
  },
];

const quotes = [
  {
    quote:
      "No one is dumb who is curious. The people who don't ask questions remain clueless throughout their lives.",
    authorId: 1,
    categoryId: 1,
  },
  {
    quote: "Continuos improvement is better than delayed perfection.",
    authorId: 2,
    categoryId: 2,
  },
  {
    quote: "Never memories what you can look up in books.",
    authorId: 3,
    categoryId: 1,
  },
  {
    quote:
      "I don't pretend we have all the answers. But the questions are certainly worth thinking about.",
    authorId: 4,
    categoryId: 1,
  },
  {
    quote: "That's just, like, your opinion, man.",
    authorId: 5,
    categoryId: 1,
  },
];

async function run() {
  await db.insert(author).values(authors);
  await db.insert(category).values(categories);
  await db.insert(quote).values(quotes);

  await conn.end();
}

run();
