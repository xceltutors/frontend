import { InfoOption } from "@/components/InfoOption/InfoOption";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { ArrowRight, FilePen, Shield, User, UserCheck } from "lucide-react";
import Image from "next/image";

export default function BecameTutor() {
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
            Become a Tutor
          </h2>
          <p
            className="max-w-[90%] text-[var(--custom-gray-800)] text-base 
                    sm:text-[1.25rem] text-center break-words"
          >
            Join our community of expert educators and start making a difference
            today
          </p>
          <button
            className="bg-[var(--custom-orange-500)] text-white px-14 py-3 rounded-md 
          hover:bg-orange-600 transition-colors cursor-pointer font-semibold"
          >
            Start now
          </button>
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
            src="/images/becameTutor-banner.svg"
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
        <div className="glow-info-option mb-3"></div>

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

      <section
        className="w-full mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between 
            gap-8 lg:gap-0 h-auto lg:h-[35rem] sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40"
      >
        <div className="relactive w-full lg:w-[50%] h-auto flex flex-col items-center justify-center order-1 lg:order-2">
          <Image
            width={131.00000034357745}
            height={132}
            src="/images/arrow-left.svg"
            alt="Arrow Hero"
            className="absolute bottom-[21%] left-[16%] object-cover"
          />

          <Image
            width={311}
            height={327}
            src="/images/becameTutor-banner.svg"
            alt="Imagem de fundo do Hero"
            className="object-cover mt-[0] lg:mt-[10%]"
          />
        </div>
        <div
          className="w-full lg:w-[45%] h-auto flex flex-col items-center space-y-4 order-2
            lg:order-1 text-center lg:text-left ml-0 md:ml-[2rem]"
        >
          <h2
            className="font-(family-name:--font-volkhov) text-[var(--custom-blue-900)] font-bold
                text-[2.5rem] text-center lg:text-justify sm:text-4xl lg:text-[3rem] leading-tight"
          >
            Why online tutoring?
          </h2>
          <p
            className="max-w-[90%] text-[var(--custom-blue-50)] text-base 
                sm:text-xl text-center md:text-justify break-words pb-2"
          >
            Online tutoring is the perfect job for students and recent
            graduates. You’ll make money, gain CV-boosting skills, and get that
            warm fuzzy feeling of helping others.
          </p>
          <button
            className="bg-[var(--custom-orange-500)] text-white text-sm md:text-base w-[80%] px-2 lg:px-25 py-2.5 md:py-3 rounded-md 
          hover:bg-orange-600 transition-colors cursor-pointer font-semibold flex items-center justify-center gap-2"
          >
            Start your registration <ArrowRight />
          </button>
        </div>
      </section>
    </DefaultLayout>
  );
}
