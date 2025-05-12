import { SubTitle } from "@/components/SubTitle/SubTitle";
import FilterSection from "./_components/filter-section";
import { CardTutorDash } from "@/components/Card/CardTutorDash";
import { tutors } from "@/app/find-tutor/data";
import { MoveRight } from "lucide-react";

export default function FindTutor() {
  return (
    <section className="w-full flex flex-col px-4 mt-3">
      <div className="mb-8">
        <SubTitle subtitle="Find a tutor" />
        <FilterSection />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {tutors.map((tutor) => (
            <CardTutorDash key={tutor.id} {...tutor} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                type="button"
                key={page}
                className={`w-8 h-8 flex cursor-pointer text-[var(--custom-blue-700)] items-center
                  justify-center rounded-full ${
                    page === 1
                      ? "bg-[var(--custom-blue-700)] text-white"
                      : "hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
            >
              <MoveRight className="h-4 w-4 text-[var(--custom-blue-700)]" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
