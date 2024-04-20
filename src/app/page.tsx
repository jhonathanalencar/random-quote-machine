import { getRandomQuote } from "@/lib/get-random-quote";

import { Quote } from "./components/quote";

export default async function Home() {
  const randomQuote = await getRandomQuote();

  return <Quote {...randomQuote} />;
}
