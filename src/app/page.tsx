import { Instruments } from "@/components/instruments";

export interface Instrument {
  title: string;
  image: string;
  price: string;
  description: string;
  link: string;
  acoustic: boolean;
  id: string;
}

async function getInstruments(): Promise<Instrument[]> {
  const result = await fetch("http://localhost:4000/instruments");

  // delay response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return result.json();
}

export default async function Home() {
  const instruments = await getInstruments();

  return <Instruments instruments={instruments} />;
}
