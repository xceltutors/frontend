import DefaultLayout from "@/components/Layout/DefaultLayout";
import Link from "next/link";

export default function Reason() {
    return (
        <DefaultLayout>
            <section className="w-full h-auto mx-auto flex items-center flex-col justify-center text-center space-y-6">
                <h2 className="w-[85%] md:w-[50%] font-(family-name:--font-volkhov) text-4xl lg:text-[96px] 
                font-bold text-[var(--custom-blue-900)]">
                    Why online tutoring?
                </h2>
                <p className="w-[70%] md:w-[50%] text-[var(--custom-blue-50)] text-base md:text-2xl">
                    Online tutoring is a great way for students and recent graduates to earn money.
                    While you make money, you also will gain CV-boosting skills, and get that warm fuzzy  feeling of helping others.
                </p>
                <Link
                    href="#"
                    className=":w-48 md:w-[24rem] px-6 py-4 border bg-[var(--custom-orange-500)] text-white font-semibold
              rounded-md hover:bg-gray-100 transition-colors text-center text-base lg:text-2xl"
                >
                    Start now
                </Link>
            </section>
        </DefaultLayout>
    );
}