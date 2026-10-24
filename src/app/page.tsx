import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Stats } from "@/components/home/Stats";
import { Pillars } from "@/components/home/Pillars";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { WishlistBuilder } from "@/components/home/WishlistBuilder";
import { PathSection } from "@/components/home/PathSection";
import { WhyUs } from "@/components/home/WhyUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AILearning } from "@/components/home/AILearning";
import { FounderSection } from "@/components/home/FounderSection";
import { FreeResources } from "@/components/home/FreeResources";
import { Community } from "@/components/home/Community";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Pillars />
      <FeaturedCourses />
      <WishlistBuilder />
      <PathSection />
      <WhyUs />
      <HowItWorks />
      <AILearning />
      <FounderSection />
      <FreeResources />
      <Community />
      <FaqSection />
      <FinalCta />
    </>
  );
}
