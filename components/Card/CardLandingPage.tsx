import Link from "next/link";
import Image from "next/image";
import { Info } from "lucide-react";

export function CardLandingPage() {
  return (
    <div
      className="w-full xs:w-[90%] sm:w-[85%] md:w-[23rem] mx-auto md:mx-0 flex flex-col p-3 xs:p-4 sm:p-5 rounded-xl sm:rounded-2xl md:rounded-[1.625rem] space-y-2 xs:space-y-3
     bg-white relative shadow-[var(--custom-blue-700)] h-auto min-h-[22rem] xs:min-h-[24rem] sm:min-h-[26rem] md:min-h-[25rem] mt-4 sm:mt-6 md:mt-[6.2%]"
    >
      <div className="w-full flex">
        <Image
          width={320}
          height={161}
          src={"/images/card-image.svg"}
          alt="Computer Science course image"
          className="w-full max-w-[320px] h-auto object-cover rounded-lg"
        />
      </div>

      <h3 className="font-(family-name:--font-volkhov) text-base xs:text-lg sm:text-xl md:text-[1.25rem] font-bold text-[var(--custom-blue-900)] mt-1">
        Computer Science
      </h3>

      <span className="text-[10px] xs:text-xs text-[var(--custom-gray-100)] font-medium">
        University Level | <span></span> by Michael Scott
      </span>

      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <button
            type="button"
            title="Book a free 15-min call"
            className="w-[12rem] h-[2.5rem] flex justify-center items-center rounded-[4px] bg-[var(--custom-blue-700)] text-[var(--custom-gray-40)] text-xs font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_15px_rgba(10,123,131,0.4)] transition-shadow cursor-pointer"
          >
            {" "}
            Book a free 15-min call{" "}
          </button>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-auto pt-2">
          <Link
            href={"#"}
            className="flex items-center gap-1 xs:gap-2 text-[var(--custom-blue-900)]"
          >
            <Info className="w-3 h-3 xs:w-4 xs:h-4" />
            <span className="text-xs sm:text-sm underline">
              See tutor&apos;s profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
