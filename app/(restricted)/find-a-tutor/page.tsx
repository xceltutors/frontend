import { SubTitle } from "@/components/SubTitle/SubTitle";
import FilterSection from "./_components/filter-section";
import { CardTutorDash } from "@/components/Card/CardTutorDash";
import { tutors } from "@/app/find-tutor/data";

export default function FindTutor() {
  return (
    <div className="w-full flex flex-col px-4 mt-3">
      <div className="mb-8">
        <SubTitle subtitle="Find a tutor" />
        <FilterSection />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {tutors.map((tutor) => (
            <CardTutorDash key={tutor.id} {...tutor} />
          ))}
        </div>
      </div>
    </div>
  );
}
