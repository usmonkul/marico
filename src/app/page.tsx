import Feedback from "@/components/feedback/feedback";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Merits from "@/components/merits/merits";
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
      </div>
      <Merits />
      <Step1 />
      <Step2 />
      <Step3 />
      <Feedback />
    </main>
  );
}
