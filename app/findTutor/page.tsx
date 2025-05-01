"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "qs";
import { CardTutor } from "@/components/Card/CardTutor";
import { tutors } from "./data";

export default function FindTutor() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const subject = searchParams.get("subject") || "";
    const level = searchParams.get("level") || "";
    const page = Number.parseInt(searchParams.get("page") || "1");

    setSubject(subject);
    setLevel(level);
    setCurrentPage(page);
  }, [searchParams]);

  const applyFilters = () => {
    const query = qs.stringify(
      {
        subject,
        level,
        page: 1,
      },
      { skipNulls: true }
    );

    router.push(`?${query}`);
  };

  const goToPage = (page: number) => {
    const query = qs.stringify(
      {
        subject,
        level,
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
          className="w-[85%] md:w-[50%] lg:w-[48%] font-(family-name:--font-volkhov) text-4xl lg:text-5xl 
                font-bold text-[var(--custom-blue-900)]"
        >
          Lets find a perfect tutor for your needs
        </h2>
      </section>
      <section className="min-h-screen p-4 md:p-6 py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-46">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-lg font-medium mb-2">Filters</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full md:w-[35%]">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none pr-10 bg-white"
                >
                  <option value="">Subject</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
              </div>

              <div className="relative w-full md:w-[35%]">
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none pr-10 bg-white"
                >
                  <option value="">Level</option>
                  <option value="gcse">GCSE</option>
                  <option value="a-level">A-Level</option>
                  <option value="university">University</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
              </div>

              <button
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="flex items-center text-[var(--custom-blue-900)] 
                font-medium ml-[4%] cursor-pointer"
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
                className="bg-[var(--custom-orange-500)] text-white px-4 py-2 rounded-md
                 hover:bg-orange-600 transition-colors ml-auto cursor-pointer"
              >
                Apply
              </button>
            </div>

            {showMoreFilters && (
              <div className="mt-3 p-4 bg-white rounded-md shadow-sm">
                <p className="text-gray-500">
                  Additional filters coming soon...
                </p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
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
        </div>
      </section>
    </DefaultLayout>
  );
}
