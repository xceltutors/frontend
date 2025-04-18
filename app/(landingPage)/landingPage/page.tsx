import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Hero } from "@/components/Hero/Hero";
import { TextInformation } from "@/components/TextInformation/TextInformation";
import { CardLandingPage } from "@/components/Card/CardLandingPage";
import TestimonialSlideshow from "@/components/TestimonialSlideshow/TestimonialSlideshow";
import { FAQ } from "@/components/FAQ/FAQ";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <Hero />
      <section className="w-full md:h-[33.75rem] flex flex-col md:flex-row gap-8 px-[3rem]">
        <TextInformation />
        <CardLandingPage />
      </section>
      <TestimonialSlideshow />
      <FAQ/>
    </DefaultLayout>
  );
}
