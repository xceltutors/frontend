"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "qs";
import { CardTutor } from "@/components/Card/CardTutor";
import { tutors } from "./data";

export default function FindTutor() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [subjects, setSubjects] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [prices, setPrices] = useState<string[]>([]);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMultiSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setState(selectedOptions);
  };

  useEffect(() => {
    const subjectsFromQuery = searchParams.getAll("subject");
    const levelsFromQuery = searchParams.getAll("level");
    const pricesFromQuery = searchParams.getAll("price");
    const page = Number.parseInt(searchParams.get("page") || "1");

    setSubjects(subjectsFromQuery);
    setLevels(levelsFromQuery);
    setPrices(pricesFromQuery);
    setCurrentPage(page);
  }, [searchParams]);

  const removeFilter = (type: string, value: string) => {
    if (type === "subject")
      setSubjects((prev) => prev.filter((s) => s !== value));
    if (type === "level") setLevels((prev) => prev.filter((l) => l !== value));
    if (type === "price") setPrices((prev) => prev.filter((p) => p !== value));
  };

  const clearAllFilters = () => {
    setSubjects([]);
    setLevels([]);
    setPrices([]);
  };

  const applyFilters = () => {
    const query = qs.stringify(
      {
        subjects,
        levels,
        prices,
        page: 1,
      },
      { skipNulls: true }
    );

    router.push(`?${query}`);
  };

  const goToPage = (page: number) => {
    const query = qs.stringify(
      {
        subjects,
        levels,
        prices,
        page,
      },
      { skipNulls: true }
    );

    router.push(`?${query}`);
    setCurrentPage(page);
  };
  return (
    <DefaultLayout>
      <section
        className="w-full h-auto mx-auto flex items-center flex-col justify-center text-center
       py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40"
      >
        <h2
          className="w-[85%] md:w-[50%] lg:w-[48%] xl:w-[40%] font-(family-name:--font-volkhov) text-4xl lg:text-5xl 
                font-bold text-[var(--custom-blue-900)]"
        >
          Lets find a perfect tutor for your needs
        </h2>
      </section>
      <section className="w-full min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-30 md:px-36 lg:px-43 xl:px-52">
        <div className="mb-10">
          <h2 className="text-lg font-medium mb-2">Filters</h2>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="w-full lg:w-[80%] flex flex-col gap-4 lg:flex-row">
              <div className="relative w-full md:w-[45%]">
                <select
                  value={subjects}
                  onChange={() => setSubjects([])}
                  className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none 
          pr-10 bg-[var(--custom-gray-250)] text-[#949494]"
                >
                  <option value="">Subject</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
              </div>

              <div className="relative w-full md:w-[45%]">
                <select
                  value={levels}
                  onChange={() => setLevels([])}
                  className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none 
          pr-10 bg-[var(--custom-gray-250)] text-[#949494]"
                >
                  <option value="">Level</option>
                  <option value="gcse">GCSE</option>
                  <option value="a-level">A-Level</option>
                  <option value="university">University</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between w-full md:w-auto gap-2">
                <button
                  onClick={() => setShowMoreFilters(!showMoreFilters)}
                  className="flex items-center text-[var(--custom-blue-900)] font-medium underline cursor-pointer"
                >
                  More filters
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${
                      showMoreFilters ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <button
                  onClick={applyFilters}
                  className="bg-[var(--custom-orange-500)] text-white px-4 py-1 rounded-md 
          hover:bg-orange-600 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {showMoreFilters && (
            <div className="mt-4 relative w-full md:w-[35%]">
              <select
                value={prices}
                onChange={(e) => handleMultiSelect(e, setPrices)}
                className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none
          pr-10 bg-[var(--custom-gray-250)] text-[#949494] h-[120px]"
              >
                <option
                  value="40"
                  className={`${
                    prices.includes("40")
                      ? "bg-[var(--custom-blue-700)] text-white border-b border-[var(--custom-blue-700)]"
                      : ""
                  }`}
                >
                  40$
                </option>
                <option
                  value="50"
                  className={`${
                    prices.includes("50")
                      ? "bg-[var(--custom-blue-700)] text-white border-b border-[var(--custom-blue-700)]"
                      : ""
                  }`}
                >
                  50$
                </option>
                <option
                  value="60"
                  className={`${
                    prices.includes("60")
                      ? "bg-[var(--custom-blue-700)] text-white border-b border-[var(--custom-blue-700)]"
                      : ""
                  }`}
                >
                  60$
                </option>
              </select>
              <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
            </div>
          )}

          {(subjects.length || levels.length || prices.length) > 0 && (
            <div className="mt-4 w-full flex justify-between gap-2 items-center">
              <div className="flex flex-wrap gap-3">
                {subjects.map((subj) => (
                  <div
                    key={subj}
                    className="flex items-center gap-2 bg-[var(--custom-blue-700)] text-white px-3 py-1.5 rounded-md text-sm"
                  >
                    {subj}
                    <button
                      onClick={() => removeFilter("subject", subj)}
                      className="cursor-pointer"
                    >
                      <X className="w-3 h-3" color="#000" />
                    </button>
                  </div>
                ))}

                {levels.map((lvl) => (
                  <div
                    key={lvl}
                    className="flex items-center gap-2 bg-[var(--custom-blue-700)]
                   text-white px-3 py-1 rounded-md text-sm"
                  >
                    {lvl}
                    <button onClick={() => removeFilter("level", lvl)}>
                      <X className="w-3 h-3" color="#000" />
                    </button>
                  </div>
                ))}

                {prices.map((prc) => (
                  <div
                    key={prc}
                    className="flex items-center gap-2 border border-[var(--custom-blue-700)]
                     text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                  >
                    {prc}$
                    <button onClick={() => removeFilter("price", prc)}>
                      <X className="w-3 h-3" color="#000" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={clearAllFilters}
                className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)]
                 text-sm ml-2 px-1.5 py-1.5 rounded-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-8">
          {tutors.map((tutor) => (
            <CardTutor key={tutor.id} {...tutor} />
          ))}
        </div>

        <div className="w-full flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === page
                    ? "bg-[var(--custom-blue-700)] text-white"
                    : "transparant text-[var(--custom-blue-700)]"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              className="w-8 h-8 flex items-center justify-center transparent text-[var(--custom-blue-700)]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </section>
    </DefaultLayout>
  );
}
