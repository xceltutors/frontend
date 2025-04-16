import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-[92%] max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-[3rem] py-[1rem] gap-8 lg:gap-0 h-auto lg:h-[35rem]">
      <div className="w-full lg:w-[42%] flex flex-col items-center justify-center space-y-4 order-2 lg:order-1 text-center lg:text-left">
        <h2 className="font-(family-name:--font-volkhov) text-[var(--custom-blue-900)] font-bold text-[2.5rem] text-center sm:text-4xl lg:text-[3rem] leading-tight">
          XCel in your studies with Expert Tutors
        </h2>
        <p className="text-[var(--custom-gray-800)] text-base sm:text-[1.25rem] text-center">
          We are an online school with everything you need, to conquer
          professions that are in demand in the job market.
        </p>
        <Link href="#">
          <button className="flex gap-2 items-center cursor-pointer bg-[var(--custom-orange-500)] px-8 sm:px-12 py-3 rounded-md text-white text-base">
            Let’s find you a tutor <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>

      <div className="w-full lg:w-[20rem] flex items-center justify-center order-1 lg:order-2">
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
