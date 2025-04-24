import { TutorCard } from "@/components/Card/TutorCard";
import { InfoPrice } from "@/components/InfoPrice/InfoPrice";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Image from "next/image";
import Link from "next/link";

export default function Prices() {
  return (
    <DefaultLayout>
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
            Excellent tuition from £25/hr
          </h2>
          <p
            className="max-w-[80%] text-[var(--custom-gray-800)] text-base 
                    sm:text-[1.25rem] text-center break-words"
          >
            Get started for free and pay when you’re ready to learn
          </p>
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
            src="/images/bg-hero-price.svg"
            alt="Imagem de fundo do Hero"
            className="object-cover"
          />
        </div>
      </section>
      <section
        className="relative w-full bg-red-300"
      >
        <Image
          width={200}
          height={85.75}
          src="/images/arrow-left-price.svg"
          alt="Arrow Left Price"
          className="absolute left-0 object-cover top-[40%]"
        />

        <Image
          width={200}
          height={85.75}
          src="/images/arrow-hand.svg"
          alt="Arrow Hero"
          className="absolute right-0 object-cover"
        />
        <div className="w-full mx-auto  bg-[var(--custom-blue-700)] flex flex-col items-center justify-center 
            gap-8 lg:gap-0 h-auto py-5 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          <h1 className="text-2xl md:text-[40px] text-white text-center mb-2 md:mb-3 font-semibold">
            Excellent tutors with different range of budgets
          </h1>
          <p className="text-base md:text-xl text-white text-center w-[70%]">
            Once personally interviewed and ready to start teach, our tutors set
            their own prices based on their experience. On this page you can see
            what you can expect at each price point, most tutors charge between
            £25-£32/hr for their services.
          </p>

          <div className="w-[95%] md:w-[80%] grid grid-cols-1 lg:grid-cols-3 items-center justify-center mt-10 gap-5 pt-[1rem] pb-[1.5rem] mb-10">
            <InfoPrice
              price="£25 - £32"
              description="Usually new tutors with lots of 
                        availability and trying to get some great early reviews will
                        charge this price."
            />
            <InfoPrice
              price="£33 - £48"
              description="Tutors at this rage will be tutoring for over 6 months at least,
                         completed lots of tutorials and received very positive feedback."
            />
            <InfoPrice
              price="£49 - £67"
              description="This is a rage of popular tutors. 
                        Excellent reviews and a track record of proven results."
            />
          </div>
          <i className="text-base md:text-xl text-white text-center">
            The lesson cost includes the Platform Fee we take to make lessons
            happen.
          </i>
        </div>
      </section>

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
            Set up free meetings before you book
          </h2>
          <p
            className="max-w-[90%] text-[var(--custom-gray-800)] text-base 
                    sm:text-[1.25rem] text-center break-words"
          >
            When you find a tutor you like, you can{" "}
            <b>book a free 15-minute meeting to ask questions</b>, find out
            about their teaching style - and make sure they are someone you will
            get on with!
          </p>
          <Image
            width={430.18}
            height={85.75}
            src="/images/arrow-hero.svg"
            alt="Arrow Hero"
            className="object-cover ml-[0] lg:ml-[20rem]"
          />
        </div>

        <div className="w-full lg:w-[55%] flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[300px]">
            <TutorCard
              name="Maria"
              isSuper={true}
              description="Experienced tutor specializing in Mathematics and Physics for GCSE and A-Level students"
              hourlyRate={50}
              imageUrl="/images/tutor-prices.svg"
              profileUrl="#"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-auto mx-auto flex items-center flex-col justify-center text-center space-y-6 pt-[7%] pb-[10%]">
        <div className="relative inline-block glow-center">
          <p className="text-[var(--custom-blue-50)] text-sm md:text-base">
            Choose your path
          </p>
        </div>

        <h2 className="w-[80%]  md:-[w-full] font-(family-name:--font-volkhov) text-2xl md:text-5xl font-bold text-[var(--custom-blue-900)]">
          Speak to a tutor, or become part <br /> of our community as one!
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="#"
            className="w-full sm:w-48 px-6 py-3 border border-[var(--custom-blue-900)] text-[var(--custom-blue-900)] font-medium 
              rounded-md hover:bg-gray-100 transition-colors text-center"
          >
            Become a tutor
          </Link>
          <Link
            href="#"
            className="w-full sm:w-48 px-6 py-3 border border-[var(--custom-blue-900)] text-[var(--custom-blue-900)]
               font-medium rounded-md hover:bg-gray-100 transition-colors text-center"
          >
            Find a tutor
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
