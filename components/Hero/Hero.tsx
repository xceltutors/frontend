import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-[92%] h-[30rem] flex bg-red-500 px-[3rem] mx-auto justify-evenly">
      <div className="w-[40%] h-full flex flex-col items-center justify-center space-y-3">
        <h2 className="font-(family-name:--font-volkhov) font-bold text-[3rem] text-center">
          XCel in your studies with Expert Tutors
        </h2>
        <p className="text-center text-[var(--custom-gray-800)]">
          We are an online school with everything you need, to conquer
          professions that are in demand in the job market.
        </p>
        <Link href="#">
          <button className="flex gap-2 items-center cursor-pointer bg-[var(--custom-orange-500)] px-[7rem] py-[0.8rem] rounded-md text-white">
            Let’s find you a tutor <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
