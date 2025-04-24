import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Tutors() {
  return (
    <section className="bg-[var(--custom-blue-700)] text-white py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="max-w-xl space-y-3 sm:space-y-4 mx-auto lg:mx-0  lg:text-left">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              Checkout our talents
            </h3>
            <h2 className="font-(family-name:--font-volkhov) text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Meet the tutors
              <span className="relative inline-block mx-1 sm:mx-2">
                who teach
                <span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-0.5 sm:h-1 bg-orange-500"></span>
              </span>
              <span className="block sm:inline">you online</span>
            </h2>

            <div className="pt-2 sm:pt-4">
              <Link
                href="/find-tutor"
                className="inline-block w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="bg-[var(--custom-orange-500)] hover:bg-orange-600 text-white 
                  font-medium py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-md 
                  transition-colors duration-300 flex items-center justify-center 
                  w-full sm:w-auto group"
                >
                  <span>Lets find you a tutor</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-xs xs:max-w-sm sm:max-w-md mx-auto">
              <div className="flex justify-center">
                <div
                  className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 
                  rounded-full overflow-hidden border-2 sm:border-4
                  border-white shadow-lg transform transition-transform duration-500 hover:scale-105"
                >
                  <Image
                    src="/images/tutor1.jpg"
                    alt="Female tutor smiling"
                    width={191.3842010498047}
                    height={191.3842010498047}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 
                  rounded-tl-[70px] rounded-br-[70px] overflow-hidden border-2 sm:border-4
                  border-white shadow-lg transform transition-transform duration-500 hover:scale-105"
                >
                  <Image
                    src="/images/tutor2.jpg"
                    alt="Male tutor in classroom"
                    width={181.43}
                    height={181.43}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 
                  rounded-tl-[70px] rounded-br-[70px] overflow-hidden border-2 sm:border-4
                  border-white shadow-lg transform transition-transform duration-500 hover:scale-105"
                >
                  <Image
                    src="/images/tutor3.jpg"
                    alt="Male tutor pointing at screen"
                    width={181.43}
                    height={181.43}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 
                  rounded-full overflow-hidden border-2 sm:border-4
                  border-white shadow-lg transform transition-transform duration-500 hover:scale-105"
                >
                  <Image
                    src="/images/tutor4.jpg"
                    alt="Female tutor with curly hair"
                    width={191.3842010498047}
                    height={191.3842010498047}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
