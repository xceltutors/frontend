import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Hero } from "@/components/Hero/Hero";
import { TextInformation } from "@/components/TextInformation/TextInformation";
import { CardLandingPage } from "@/components/Card/CardLandingPage";
import TestimonialSlideshow from "@/components/TestimonialSlideshow/TestimonialSlideshow";
import { FAQ } from "@/components/FAQ/FAQ";
import Image from "next/image";
import Link from "next/link";
import { popularSubject } from "@/data/popularSubject";
import Tutors from "@/components/Tutors/Tutors";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <Hero />
      <section
        className="w-full h-auto lg:h-[33.75rem] flex flex-col md:flex-row gap-8 py-4 sm:py-6
       md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40"
      >
        <TextInformation />
        <CardLandingPage />
      </section>
      <TestimonialSlideshow />
      <Tutors />
      <section className="w-full h-auto py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
        <div className="flex flex-col space-y-3 max-w-7xl mx-auto">
          <span className="text-base md:text-xl text-[var(--custom-blue-50)] font-semibold">
            Popular Subjects
          </span>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between relative">
            <h2
              className="font-(family-name:--font-volkhov) text-2xl sm:text-3xl md:text-4xl 
            lg:text-5xl font-bold leading-snug max-w-md"
            >
              Pick a subject to
              <span className="block mt-1">get started</span>
            </h2>

            <div className="hidden sm:block absolute right-0 top-0 sm:relative sm:mt-0 lg:mt-[-2rem]">
              <Image
                width={120}
                height={120}
                src="/images/arrow-down-popular.svg"
                alt="arrow faq"
                className="object-contain sm:w-24 md:w-32 lg:w-40"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-[var(--font-inter)]">
            {popularSubject.slice(0, 4).map((subject, index) => (
              <Link key={index} href={subject.link} className="w-full">
                <button
                  type="button"
                  title={subject.name}
                  className="w-full bg-[var(--custom-blue-200)] text-[var(--custom-blue-700)] 
                border-2 border-[var(--custom-blue-700)] rounded-lg py-2.5 sm:py-3 px-2 sm:px-4 
                font-bold text-base sm:text-lg truncate
                hover:bg-[var(--custom-blue-700)] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {subject.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4 font-[var(--font-inter)]">
            {popularSubject.slice(4, 7).map((subject, index) => (
              <Link key={index} href={subject.link} className="w-full">
                <button
                  type="button"
                  title={subject.name}
                  className="w-full bg-[var(--custom-blue-200)] text-[var(--custom-blue-700)] 
                border-2 border-[var(--custom-blue-700)] rounded-lg py-2.5 sm:py-3 px-2 sm:px-4 
                font-bold text-base sm:text-lg truncate
                hover:bg-[var(--custom-blue-700)] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {subject.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </DefaultLayout>
  );
}
