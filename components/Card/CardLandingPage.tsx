import Link from "next/link";
import Image from "next/image";
import { Info } from "lucide-react";

export function CardLandingPage() {
  return (
    <div className="w-[45%] h-[27rem] sm:h-[30rem] md:w-[23.1rem] md:h-[25rem] flex flex-col p-5 rounded-[1.625rem] space-y-3 bg-white relative mt-[6.2%] shadow-custom">
      <Image
        width={320.13}
        height={161}
        src={"/images/card-image.svg"}
        alt="img-card"
        objectFit="cover"
        className="w-[98%] md:w-[320.13px]"
      />
      <h3 className="font-(family-name:--font-volkhov) text-[1.25rem] font-[700] text-[var(--custom-blue-900)]">
        Computer Science
      </h3>
      <span className="text-xs text-[var(--custom-gray-100)] font-medium">
        University Level | <span></span> by Michael Scott
      </span>
      <button
        type="button"
        title="Book a free 15-min call"
        className="w-[12rem] h-[2.5rem] flex justify-center 
          items-center rounded-[4px] bg-[var(--custom-blue-700)] text-[var(--custom-gray-40)]
           text-xs font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.4)] 
           hover:shadow-[0_6px_15px_rgba(10,123,131,0.4)] transition-shadow cursor-pointer"
      >
        Book a free 15-min call
      </button>
      <Link
        href={"#"}
        className={`flex items-center gap-2 text-[var(--custom-blue-900)] absolute bottom-6 left-4`}
      >
        <Info className="w-4 h-4" />
        <span className="text-sm underline">See tutor&apos;s profile</span>
      </Link>
    </div>
  );
}
