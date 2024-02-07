import { Instruments } from "@/components/instruments";
import instruments from "../../data/instruments"

export interface Instrument {
  title: string;
  image: string;
  price: string;
  description: string;
  link: string;
  acoustic: boolean;
  id: string;
}

export default function Home() {
  return <Instruments instruments={instruments} />;
}