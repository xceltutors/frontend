import DefaultLayout from "@/components/Layout/DefaultLayout";
import TestimonialSlideshow from "@/components/TestimonialSlideshow/TestimonialSlideshow";
import { TextInformation } from "@/components/TextInformation/TextInformation";
import Link from "next/link";
import Image from "next/image";

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
              rounded-md transition-colors text-center text-base lg:text-2xl"
                >
                    Start now
                </Link>
            </section>
            <section
                className="w-full h-auto lg:h-[33.75rem] flex flex-col md:flex-row gap-8 py-4 sm:py-6
                   md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-60"
            >
                <TextInformation />
                <div className="w-full lg:w-[58%] h-auto flex flex-col items-center justify-center order-1 lg:order-2">
                    <Image
                        width={444}
                        height={567}
                        src="/images/background-banner.svg"
                        alt="Imagem de fundo do Hero"
                        className="object-cover"
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