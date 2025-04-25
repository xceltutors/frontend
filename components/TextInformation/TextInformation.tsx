import { Calendar1, Presentation, User } from "lucide-react";
import { InfoOption } from "../InfoOption/InfoOption";

export function TextInformation() {
  return (
    <div className="w-[100%] md:w-[55%] h-auto">
      <div className="mb-3">
        <p className="text-[var(--custom-blue-50)] text-[1.125rem] font-semibold">
          Easy and Fast
        </p>
      </div>

      <h2 className="font-(family-name:--font-volkhov) text-[2.35rem] md:text-[3.125rem] font-[700] text-[var(--custom-blue-900)] mb-8 leading-tight">
        Book Your Lesson
        <br />
        In 3 Easy Steps
      </h2>

      <div className="space-y-6">
        <InfoOption
          icon={<User className="w-[1.5rem] h-[1.5rem] text-white" />}
          bgColor="bg-[var(--custom-yellow-500)]"
          title="Choose a tutor"
          description="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Urna, tortor tempus."
        />
        <InfoOption
          icon={<Calendar1 className="w-[1.5rem] h-[1.5rem] text-white" />}
          bgColor="bg-[var(--custom-orange-500)]"
          title="Schedule a class"
          description="Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Urna, tortor tempus."
        />
        <InfoOption
          icon={<Presentation className="w-[1.5rem] h-[1.5rem] text-white" />}
          bgColor="bg-[var(--custom-blue-700)]"
          title="Start learning"
          description="Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Urna, tortor tempus."
        />
      </div>
    </div>
  );
}
