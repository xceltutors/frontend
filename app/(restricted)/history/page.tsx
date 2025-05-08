import { SubTitle } from "@/components/SubTitle/SubTitle";
import { mockLessons } from "@/data/mockLessons";
import { ChevronRight } from "lucide-react";
import LessonList from "./_components/LessonList";

export default function History() {
  return (
    <div className="w-full flex flex-col px-4 mt-3">
      <div className="mb-8">
        <SubTitle subtitle="Teaching & Learning History" />

        <div className="max-w-7xl mx-auto">
          <LessonList lessons={mockLessons} />

          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  type="button"
                  key={page}
                  className={`w-8 h-8 flex cursor-pointer text-[var(--custom-blue-700)]
                     items-center justify-center rounded-full ${
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
                <ChevronRight className="h-4 w-4 text-[var(--custom-blue-700)]" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
