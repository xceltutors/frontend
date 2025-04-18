import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between 
    gap-8 lg:gap-0 h-auto lg:h-[35rem] sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40"
    >
      <div
        className="w-full lg:w-[40%] h-auto  flex flex-col items-center space-y-4 order-2
       lg:order-1 text-center lg:text-left ml-0 md:ml-[2rem]"
      >
        <h2
          className="font-(family-name:--font-volkhov) text-[var(--custom-blue-900)] font-bold
         text-[2.5rem] text-center sm:text-4xl lg:text-[3rem] leading-tight"
        >
          XCel in your studies with Expert Tutors
        </h2>
        <p className="max-w-[80%] text-[var(--custom-gray-800)] text-base sm:text-[1.25rem] text-center break-words">
          We are an online school with everything you need, to conquer
          professions that are in demand in the job market.
        </p>
        <Link href="#" className="mb-[4rem]">
          <button className="flex gap-2 items-center cursor-pointer bg-[var(--custom-orange-500)] px-8 sm:px-12 py-3 rounded-md text-white text-base">
            Let’s find you a tutor <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

        <Image
          width={430.18}
          height={85.75}
          src="/images/arrow-hero.svg"
          alt="Arrow Hero"
          className="object-cover ml-[0] lg:ml-[20rem]"
        />
      </div>

      <div className="w-full lg:w-[58%] h-auto flex flex-col items-center justify-center order-1 lg:order-2">
        <Image
          width={444}
          height={467}
          src="/images/background-banner.svg"
          alt="Imagem de fundo do Hero"
          className="object-cover"
        />
      </div>
    </section>
  );
}
