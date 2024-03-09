import Header from "@/components/header/header";
import Headings from "@/components/headings/headings";
import Hero from "@/components/hero/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
