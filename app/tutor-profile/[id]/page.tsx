import Image from "next/image";
import {
  Accessibility,
  CalendarPlus,
  Clock,
  GraduationCap,
  Star,
} from "lucide-react";
import { SubjectTutor } from "@/app/tutor-profile/_components/subject-tutor";
import { subjects } from "@/data/subjectsTutor";
import TestimonialsSection from "../_components/testimonials";
import { testimonials } from "@/data/testimonials";
import { Experiences } from "../_components/experiences";
import { GoBackBtn } from "../_components/button";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

export default function TutorProfile() {
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen">
        <div className="w-full px-10 sm:px-16 md:px-24 lg:px-42 xl:px-48 mx-auto">
          <div className="mb-4">
            <GoBackBtn />
          </div>
          <div className="bg-white rounded-lg shadow-md px-[4%] py-[2%]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0">
                <div className="relative w-35 h-35 border-2 border-[var(--custom-blue-700)] rounded-lg overflow-hidden">
                  <Image
                    src="/images/Alice.svg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-semibold text-[var(--custom-blue-900)]">
                      Alice Jhonson
                    </h1>
                    <span className="text-black">•</span>
                    <span className="text-lg font-bold text-[var(--custom-gray-800)]">
                      € 50
                      <span className="text-sm text-text-[var(--custom-gray-800)]">
                        /hr
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <button
                      type="button"
                      className="flex items-center justify-center bg-[var(--custom-blue-650)]
                     text-[var(--custom-blue-700)] px-3 py-1.5 rounded-sm text-sm
                     border-2 border-[var(--custom-blue-700)] gap-2 font-semibold"
                    >
                      <Star />
                      Super Tutor
                    </button>
                    <button
                      type="button"
                      className="bg-[var(--custom-gray-150)] text-[var(--custom-gray-800)]
                      px-3 py-1.5 rounded-sm text-sm font-medium"
                    >
                      + 18 Lessons
                    </button>
                    <button
                      type="button"
                      className="bg-[var(--custom-gray-150)] text-[var(--custom-gray-800)] 
                      px-3 py-1.5 rounded-sm text-sm flex items-center font-medium gap-2"
                    >
                      <Accessibility size={18} />
                      Inclusive teaching
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex items-center justify-center bg-[var(--custom-gray-150)] 
                      text-[var(--custom-gray-800)] gap-2 px-3 py-1.5 rounded-sm text-sm font-medium"
                      >
                        <Clock size={18} />5 years of Experience
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="bg-[var(--custom-gray-150)] text-[var(--custom-gray-800)] 
                      px-3 py-1.5 rounded-sm text-sm flex items-center font-medium gap-2"
                      >
                        <GraduationCap size={18} />
                        University of Cambridge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-[var(--custom-orange-500)]
                 text-white px-6 py-2.5 rounded-sm text-sm hover:bg-orange-600 font-medium 
                 cursor-pointer shadow-md w-full sm:w-auto"
                >
                  <CalendarPlus size={18} />
                  Book a class
                </button>
                <button
                  type="button"
                  className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)]
                px-6 py-2.5 rounded-sm text-sm font-medium cursor-pointer shadow-md w-full sm:w-auto"
                >
                  Book a free 15 minutes call
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-base md:text-2xl font-semibold mb-4 text-[var(--custom-gray-800)]">
                About me
              </h2>
              <p className="text-[var(--custom-blue-50)] text-base text-justify">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-base md:text-2xl font-semibold mb-4 text-[var(--custom-gray-800)]">
                Experiences
              </h2>
              <Experiences />
            </div>

            <section>
              <h2 className="text-xl font-semibold mb-4">More info</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-5">
                  <h3
                    className="font-(family-name:--font-volkhov) font-bold text-base 
                md:text-xl mb-3 text-[var(--custom-blue-900)]"
                  >
                    Why study with me?
                  </h3>
                  <p className="text-[var(--custom-blue-50)] text-sm md:text-base">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-5">
                  <h3
                    className="font-(family-name:--font-volkhov) font-bold text-base 
                md:text-xl mb-3 text-[var(--custom-blue-900)"
                  >
                    How do I teach my classes?
                  </h3>
                  <p className="text-[var(--custom-blue-50)] text-sm md:text-base">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing.
                  </p>
                </div>
              </div>
            </section>

            <SubjectTutor subjects={subjects} />
            <TestimonialsSection testimonials={testimonials} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
