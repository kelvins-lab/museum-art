import { AnimatedBox, Wrapper } from "@/layout";
import HeroSection from "@/section/Visit/Hero";
import Head from "next/head";
import WelcomeSection from "@/section/Visit/Welcome";
import FeaturesSection from "@/section/Visit/Features";
import DonationSection from "@/section/shared/Donation";
import FaqsSection from "@/section/shared/Faqs";
import SupportSection from "@/section/shared/Support";
import AccessibilitySection from "@/section/Visit/Accessibility";
import FacilitiesSection from "@/section/Visit/Facilities";
import CarouselEventsSection from "@/section/shared/CarouselEvents";

export default function Visit() {
  return (
    <>
      <Head>
        <title>Museum Art - Visit</title>
      </Head>
      <Wrapper>
        <HeroSection />
        <AnimatedBox>
          <WelcomeSection />
        </AnimatedBox>
        <AnimatedBox>
          <FeaturesSection />
        </AnimatedBox>
        <DonationSection />
        <AnimatedBox>
          <CarouselEventsSection />
        </AnimatedBox>
        <AnimatedBox>
          <SupportSection />
        </AnimatedBox>
        <AnimatedBox>
          <AccessibilitySection />
        </AnimatedBox>
        <AnimatedBox>
          <FacilitiesSection />
        </AnimatedBox>
        <AnimatedBox>
          <FaqsSection />
        </AnimatedBox>
      </Wrapper>
    </>
  );
}
