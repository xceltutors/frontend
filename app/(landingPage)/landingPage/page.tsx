import DefaultLayout from "@/components/Layout/DefaultLayout";
import Image from "next/image";
import { Hero } from "@/components/Hero/Hero";
import { TextInformation } from "@/components/TextInformation/TextInformation";
import { CardLandingPage } from "@/components/Card/CardLandingPage";
import TestimonialSlideshow from "@/components/TestimonialSlideshow/TestimonialSlideshow";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <Hero />
      {/* <section className="w-full flex justify-end">
        <Image
          width={200}
          height={10}
          src="/images/arrow-bottom.svg"
          alt="Arrow bottom"
          className="object-cover"
        />
      </section> */}
      <section className="w-full md:h-[33.75rem] flex flex-col md:flex-row gap-8 px-[3rem]">
        <TextInformation />
        <CardLandingPage />
      </section>
      <TestimonialSlideshow />
    </DefaultLayout>
  );
}
