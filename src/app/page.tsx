import CTA from "@/components/cta/cta";
import Feedback from "@/components/feedback/feedback";
import Hero from "@/components/hero/hero";
import Merits from "@/components/merits/merits";
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero />
      <Merits />
      <Step1 />
      <Step2 />
      <Step3 />
      <Feedback />
      <CTA />
    </main>
  );
}
