import { experiences } from "@/data/experiences";

export function ExperiencesContent() {
  return (
    <>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-6">
          <div className="flex items-center mb-2">
            <h3 className="font-(family-name:--font-volkhov) text-base md:text-xl
             font-bold text-[var(--custom-blue-900)]">
              {exp.title}
            </h3>
            <span className="mx-3 text-gray-400">—</span>
            <span className="text-[var(--custom-gray-800)]">
              {exp.organization} ({exp.years})
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-[var(--custom-gray-800)]">
            {exp.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
