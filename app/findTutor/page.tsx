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

  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState<string>("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const subject = searchParams.get("subject") || "";
    const level = searchParams.get("level") || "";
    const price = searchParams.get("price") || "";
    const page = Number.parseInt(searchParams.get("page") || "1");

    setSubject(subject);
    setLevel(level);
    setPrice(price);
    setCurrentPage(page);
  }, [searchParams]);

  const removeFilter = (type: string) => {
    if (type === "subject") setSubject("");
    if (type === "level") setLevel("");
    if (type === "price") setPrice("");
  };

  const clearAllFilters = () => {
    setSubject("");
    setLevel("");
    setPrice("");
  };

  const applyFilters = () => {
    const query = qs.stringify(
      {
        subject,
        level,
        price,
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
        price,
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none 
          pr-10 bg-[var(--custom-gray-250)] text-[#949494]"
              >
                <option value="40">40$</option>
                <option value="50">50$</option>
                <option value="60">60$</option>
                <option value="70">70$</option>
              </select>

              <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
            </div>
          )}

          {(subject.length || level.length || price.length) > 0 && (
            <div className="mt-4 w-full flex justify-between gap-2 items-center">
              <div className="flex flex-wrap gap-3">
                {subject.length > 0 && (
                  <div
                    className="flex items-center gap-2 border border-[var(--custom-blue-700)]
                     text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                  >
                    {subject}
                    <button
                      onClick={() => removeFilter("subject")}
                      className="cursor-pointer"
                    >
                      <X className="w-3 h-3" color="#000" />
                    </button>
                  </div>
                )}

                {level.length > 0 && (
                  <div
                    className="flex items-center gap-2 border border-[var(--custom-blue-700)]
                     text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                  >
                    {level}
                    <button onClick={() => removeFilter("level")}>
                      <X className="w-3 h-3" color="#000" />
                    </button>
                  </div>
                )}

                {price.length > 0 && (
                  <div
                    className="flex items-center gap-2 border border-[var(--custom-blue-700)]
                     text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                  >
                    {price}$
                    <button onClick={() => removeFilter("price")}>
                      <X className="w-3 h-3" color="#000" />
                    </button>
                  </div>
                )}
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
