import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function About() {
  return (
    <DefaultLayout>
      <section
        className="w-full h-auto mx-auto flex items-center flex-col 
      justify-center text-center space-y-6 pb-[2%]"
      >
        <h2
          className="w-[85%] font-(family-name:--font-volkhov) text-2xl lg:text-5xl 
                font-bold text-[var(--custom-blue-900)]"
        >
          Founded in 2024. <br />
          Reimagining who teaches you.
        </h2>
        <p className="w-[70%] md:w-[50%] text-[var(--custom-blue-50)] text-base md:text-xl">
          Driven by Educational psychology and technology we love
        </p>
      </section>
      <section className="relative w-full">
        <Image
          width={200}
          height={85.75}
          src="/images/arrow-left-price.svg"
          alt="Arrow Left about"
          className="absolute left-0 object-cover top-[60%]"
        />

        <Image
          width={200}
          height={85.75}
          src="/images/arrow-hand.svg"
          alt="Arrow Hero"
          className="absolute right-0 object-cover"
        />
        <div
          className="w-full mx-auto  bg-[var(--custom-blue-700)] flex flex-col items-center justify-center 
                gap-8 lg:gap-0 h-auto py-5 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40"
        >
          <h2 className="text-base md:text-xl text-white text-center mb-2 md:mb-3 font-semibold">
            Feeling lost in a sea of tutors?
          </h2>
          <p className="text-base md:text-xl text-white text-center w-[85%] lg:w-[70%]">
            We understand. Finding the perfect tutor who matches your learning
            style and understands your needs can be overwhelming.
          </p>

          <b className="text-base md:text-xl text-white text-justify w-[85%] lg:w-[68%] mt-[2%]">
            At XcelTutors, we make it easy. Our platform uses cutting-edge
            technology and educational psychology to create a personalized
            learning experience that adapts to you. Choose from our carefully
            selected team of expert educators or let us match you with the
            perfect tutor for your needs. Either way, youll receive the support
            and guidance you need to achieve your goals.
          </b>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <h1
            className="text-center font-(family-name:--font-volkhov) text-2xl lg:text-5xl 
                font-bold text-[var(--custom-blue-900)] mb-12 sm:mb-16"
          >
            Meet the{" "}
            <span className="relative">
              visionaries
              <span className="absolute bottom-1 left-0 w-full h-2 bg-red-200 -z-10 rounded-full"></span>
            </span>{" "}
            behind XcelTutors
          </h1>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 px-[2rem] lg:px-[0]">
            <div
              className="border border-[var(--custom-blue-50)] rounded-3xl p-6 sm:p-[4rem]
             flex flex-col sm:flex-row gap-6 sm:gap-8"
            >
              <div className="relative glow-image w-[55%] flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-40 h-40 sm:w-[260px] sm:h-[260px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/Joao.svg"
                    alt="Joao Florido"
                    width={259.71624755859375}
                    height={259.71624755859375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--custom-blue-900)]">
                    Joao Florido
                  </h2>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[35px] h-[35px] flex items-center justify-center text-[var(--custom-blue-700)] border-3
                     border-[var(--custom-blue-700)] p-1 rounded-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[var(--custom-blue-50)] font-medium mb-2">
                  CEO & Co-Founder
                </p>
                <p className="text-gray-500 text-sm mb-3">🎓 The Educator</p>
                <p className="text-[var(--custom-blue-900)] text-sm sm:text-base">
                  João is experience in Scottish classrooms shaped his vision
                  for personalized learning. Hes driven to create a platform
                  where students can explore complex ideas at their own pace
                  with the right support at the right time.
                </p>
              </div>
            </div>

            <div
              className="border border-[var(--custom-blue-50)] rounded-3xl p-6
             sm:p-[4rem] flex flex-col justify-between sm:flex-row-reverse gap-6 sm:gap-8"
            >
              <div className="flex justify-center md:justify-end w-full sm:w-[45%]">
                <div className="relative glow-image">
                  <div className="w-40 h-40 sm:w-[260px] sm:h-[260px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/Eduardo.svg"
                      alt="Eduardo Carvalho"
                      width={259.71624755859375}
                      height={259.71624755859375}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--custom-blue-900)]">
                    Eduardo Carvalho
                  </h2>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[35px] h-[35px] flex items-center justify-center text-[var(--custom-blue-700)] border-3 
                    border-[var(--custom-blue-700)] p-1 rounded-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[var(--custom-blue-50)] font-medium mb-2">
                  CTO & Co-Founder
                </p>
                <p className="text-gray-500 text-sm mb-3">💻 The Architect</p>
                <p className="text-[var(--custom-blue-900)] text-sm sm:text-base">
                  Eduardo is work at Farfetch taught him the power of technology
                  to solve complex problems. He is focused on applying those
                  lessons to create an intuitive platform that can adapt to the
                  needs of students and tutors alike.
                </p>
              </div>
            </div>

            <div
              className="border border-[var(--custom-blue-50)] rounded-3xl p-6
             sm:p-[4rem] flex flex-col sm:flex-row gap-6 sm:gap-8"
            >
              <div className="relative glow-image w-[55%] flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-40 h-40 sm:w-[260px] sm:h-[260px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/Noah.svg"
                    alt="Noah Rijshouwer"
                    width={259.71624755859375}
                    height={259.71624755859375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--custom-blue-900)]">
                    Noah Rijshouwer
                  </h2>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[35px] h-[35px] flex items-center justify-center text-[var(--custom-blue-700)] border-3 border-[var(--custom-blue-700)] p-1 rounded-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[var(--custom-blue-50)] font-medium mb-2">
                  Business Manager & Marketing Lead
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  🚀 The Growth Strategist
                </p>
                <p className="text-[var(--custom-blue-900)] text-sm sm:text-base">
                  Noah is background in marketing has been instrumental in
                  XcelTutors expansion strategy. He is focused on building
                  partnerships and refining our marketing approach to reach
                  students who can benefit most from our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="relative glow-center">
              <p className="text-gray-500 mb-2 text-base md:text-xl font-semibold">
                We are glad to help you
              </p>
              <h2
                className="font-(family-name:--font-volkhov) text-2xl sm:text-5xl 
              font-bold text-navy-900 mb-6"
              >
                Get in touch
              </h2>
            </div>

            <p className="text-[var(--custom-blue-50)] mb-2 font-medium text-base md:text-2xl">
              Feel free to reach out on{" "}
              <a
                href="https://linkedin.com"
                className="text-[var(--custom-blue-700)] font-medium hover:underline"
              >
                LinkedIn!
              </a>
            </p>
            <p className="text-[var(--custom-blue-50)] mb-6 font-medium text-base md:text-2xl">
              Its a pleasure for us to talk with you individually.
            </p>

            <p className="text-[var(--custom-gray-800)] font-medium text-base md:text-2xl mb-3">
              Or email us at:
            </p>
            <div
              className="inline-flex items-center bg-white border-2
             border-[var(--custom-gray-800)] rounded-sm px-4 py-1.5"
            >
              <Mail className="w-4 h-4 text-[var(--custom-gray-800)] mr-2" />
              <span className="text-[var(--custom-gray-800)]">
                hello@xceltutors.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
