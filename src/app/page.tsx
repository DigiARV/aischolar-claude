import { Hero } from "@/components/home/Hero";
import { Roadmap } from "@/components/home/Roadmap";
import { Pillars } from "@/components/home/Pillars";
import { HomeCourses } from "@/components/home/HomeCourses";
import { PathSection } from "@/components/home/PathSection";
import { Principles } from "@/components/home/Principles";
import { Journey } from "@/components/home/Journey";
import { AIPrompt } from "@/components/home/AIPrompt";
import { FounderSection } from "@/components/home/FounderSection";
import { FreeResources } from "@/components/home/FreeResources";
import { Community } from "@/components/home/Community";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <HomeCourses />
      <PathSection />
      <Principles />
      <Journey />
      <AIPrompt />
      <FounderSection />
      <Roadmap />
      <FreeResources />
      <Community />
      <FaqSection />
      <FinalCta />
    </>
  );
}
