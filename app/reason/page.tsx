import DefaultLayout from "@/components/Layout/DefaultLayout";
import TestimonialSlideshow from "@/components/TestimonialSlideshow/TestimonialSlideshow";
import { TextInformation } from "@/components/TextInformation/TextInformation";
import Link from "next/link";
import Image from "next/image";
import { InfoOption } from "@/components/InfoOption/InfoOption";
import { FilePen, Shield, User, UserCheck } from "lucide-react";

export default function Reason() {
  return (
    <DefaultLayout>
      <section className="w-full h-auto mx-auto flex items-center flex-col justify-center text-center space-y-6">
        <h2
          className="w-[85%] md:w-[50%] font-(family-name:--font-volkhov) text-4xl lg:text-[96px] 
                font-bold text-[var(--custom-blue-900)]"
        >
          Why online tutoring?
        </h2>
        <p className="w-[70%] md:w-[50%] text-[var(--custom-blue-50)] text-base md:text-2xl">
          Online tutoring is a great way for students and recent graduates to
          earn money. While you make money, you also will gain CV-boosting
          skills, and get that warm fuzzy feeling of helping others.
        </p>
        <Link
          href="#"
          className=":w-[20rem] md:w-[24rem] px-6 py-4 border bg-[var(--custom-orange-500)] text-white font-semibold
              rounded-md transition-colors text-center text-base lg:text-2xl"
        >
          Start now
        </Link>
      </section>

      <section
        className="w-full h-auto lg:h-[33.75rem] flex flex-col md:flex-row gap-8 py-4 sm:py-6
                   md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-60 mt-0 lg:mt-[2%]"
      >
        <TextInformation />
        <div className="w-full lg:w-[58%] h-auto flex flex-col items-center justify-center order-1 lg:order-2 mt-0 lg:mt-[5%]">
          <Image
            width={520}
            height={300}
            src="/images/reason.svg"
            alt="Imagem de fundo do Hero"
            className="object-cover"
          />
        </div>
      </section>

      <section
        className="relative w-full h-auto lg:h-[33.75rem] flex flex-col gap-8 py-4 sm:py-6
                              md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-60"
      >
        <Image
          width={200}
          height={85.75}
          src="/images/arrow-hand.svg"
          alt="Arrow Hero"
          className="absolute right-[20%] object-cover"
        />
        <div className="glow-info-option mb-3">
          <p className="text-[var(--custom-blue-50)] text-[1.125rem] font-semibold">
            Easy and Fast
          </p>
        </div>

        <h2
          className="font-(family-name:--font-volkhov) text-[2.35rem] md:text-[3.125rem]
                            font-[700] text-[var(--custom-blue-900)] mb-8 leading-tight"
        >
          What we&apos;ll need
          <br />
          from you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
          <InfoOption
            icon={<User className="w-[1.5rem] h-[1.5rem] text-white" />}
            bgColor="bg-[var(--custom-blue-700)]"
            title="Educational background"
            description="We'll ask about your qualifications to match you 
                                   with suitable students and subjects."
            sizeDescription={25}
          />
          <InfoOption
            icon={<Shield className="w-[1.5rem] h-[1.5rem] text-white" />}
            bgColor="bg-[var(--custom-blue-700)]"
            title="DBS  Certificate"
            description="This ensures the safety of our students and complies 
                                   with UK regulations for working with minors."
            sizeDescription={25}
          />
          <InfoOption
            icon={<UserCheck className="w-[1.5rem] h-[1.5rem] text-white" />}
            bgColor="bg-[var(--custom-blue-700)]"
            title="ID Verification"
            description="We'll need a government-issued ID to verify your 
                                   identity and maintain the integrity of our platform."
            sizeDescription={25}
          />
          <InfoOption
            icon={<FilePen className="w-[1.5rem] h-[1.5rem] text-white" />}
            bgColor="bg-[var(--custom-blue-700)]"
            title="CV  or Resume"
            description="Your experience helps us showcase your expertise to
                                   potential students and parents."
            sizeDescription={25}
          />
        </div>
      </section>

      <TestimonialSlideshow />
      <div className="w-full flex items-center justify-center">
        <Link
          href="#"
          className=":w-48 md:w-[34rem] px-6 py-5 border bg-[var(--custom-orange-500)] text-white font-semibold
              rounded-md transition-colors text-center text-base lg:text-2xl"
        >
          Start your journey
        </Link>
      </div>
    </DefaultLayout>
  );
}
