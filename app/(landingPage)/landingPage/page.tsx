import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Hero } from "@/components/Hero/Hero";
import { TextInformation } from "@/components/TextInformation/TextInformation";
import { CardLandingPage } from "@/components/Card/CardLandingPage";
import TestimonialSlideshow from "@/components/TestimonialSlideshow/TestimonialSlideshow";
import { FAQ } from "@/components/FAQ/FAQ";
import Image from "next/image";
import Link from "next/link";
import { popularSubject } from "@/data/popularSubject";

export default function LandingPage() {
  return (
    <DefaultLayout>
      <Hero />
      <section className="w-full md:h-[33.75rem] flex flex-col md:flex-row gap-8 px-[3rem]">
        <TextInformation />
        <CardLandingPage />
      </section>
      <TestimonialSlideshow />
      <section className="w-full h-auto flex-col px-[2rem] md:px-[10rem] py-[1.2rem] md:py-[3rem]">
        <div className="flex flex-col space-y-3">
          <span className="text-base md:text-xl text-[var(--custom-blue-50)] font-semibold">
            Popular Subjects
          </span>
          <div className="flex space-x-[4rem]">
            <h2 className="font-(family-name:--font-volkhov) text-2xl md:text-5xl font-bold leading-snug">
              Pick a subject to
              <span className="block mt-1">get started</span>
            </h2>

            <Image
              width={200}
              height={199}
              src="/images/arrow-down-popular.svg"
              alt="arrow faq"
              className="object-cover mt-[-5rem]"
            />
          </div>
        </div>
        <div className="w-full px-[3rem] mt-[5%]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-[var(--font-inter)]">
            {popularSubject.slice(0, 4).map((subject, index) => (
              <Link key={index} href={subject.link}>
                <button
                  type="button"
                  title={subject.name}
                  className="w-full bg-[var(--custom-blue-200)] text-[var(--custom-blue-700)] 
          border-3 border-[var(--custom-blue-700)] rounded-lg py-3 px-4 font-bold text-lg 
          hover:bg-[var(--custom-blue-700)] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {subject.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6 font-[var(--font-inter)] px-[0] md:px-[10rem]">
            {popularSubject.slice(4, 9).map((subject, index) => (
              <Link key={index} href={subject.link}>
                <button
                  type="button"
                  title={subject.name}
                  className="w-full bg-[var(--custom-blue-200)] text-[var(--custom-blue-700)] 
          border-3 border-[var(--custom-blue-700)] rounded-lg py-3 px-2 font-bold text-lg 
          hover:bg-[var(--custom-blue-700)] hover:text-white transition-colors duration-200"
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
