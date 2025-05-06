"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type SubjectLevel = {
  name: string;
  price: number;
};

type Subject = {
  name: string;
  levels: SubjectLevel[];
};

type SubjectsProps = {
  subjects: Subject[];
};

export function SubjectTutor({ subjects }: SubjectsProps) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const handleToggle = (subjectName: string) => {
    setExpandedSubject((prev) => (prev === subjectName ? null : subjectName));
  };

  return (
    <section className="mt-8 mb-8">
      <h2 className="text-xl font-semibold mb-4">Subjects Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subjects.map((subject) => {
          const isExpanded = expandedSubject === subject.name;
          const displayLevels = isExpanded
            ? subject.levels
            : subject.levels.slice(0, 3);

          return (
            <div key={subject.name} className="bg-gray-100 rounded-xl p-4">
              <h3
                className="font-(family-name:--font-volkhov) font-bold
                  text-base md:text-2xl mb-3 text-[var(--custom-gray-800)]"
              >
                {subject.name}
              </h3>
              <div className="space-y-2">
                {displayLevels.map((level) => (
                  <div
                    key={level.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm md:text-base text-[var(--custom-gray-800)]">
                      {level.name}
                    </span>
                    <span
                      className="bg-[var(--custom-blue-650)] border-2 border-[var(--custom-blue-700)]
                        text-white text-xs md:text-base px-2 py-2 rounded font-semibold"
                    >
                      € {level.price}/hr
                    </span>
                  </div>
                ))}
              </div>
              {subject.levels.length > 3 && (
                <div className="w-full flex justify-center">
                  <button
                    className="flex items-center text-[var(--custom-blue-900)]
                      underline mt-3 text-sm md:text-base gap-2 font-semibold cursor-pointer"
                    onClick={() => handleToggle(subject.name)}
                  >
                    <span>{isExpanded ? "View less" : "View more"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
