import { Lesson } from "@/@types/Lesson/ILesson";
import {
  Banknote,
  Calendar,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Download,
  LineChart,
  Repeat,
} from "lucide-react";
import Link from "next/link";

interface LessonCardProps {
  lesson: Lesson;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function LessonCard({
  lesson,
  isExpanded,
  onToggle,
}: LessonCardProps) {
  return (
    <div className="rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        <div>
          <h2 className="font-(family-name:--font-volkhov) text-xl font-bold text-center text-[var(--custom-blue-900)]">
            {lesson.title}
          </h2>
          <p className="text-center text-[var(--custom-blue-50)] text-sm">
            with <span className="font-medium">{lesson.teacher}</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-[var(--custom-blue-900)]">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-medium">{lesson.date}</span>
        </div>
        <p className="text-center text-[var(--custom-blue-50)] text-sm">
          {lesson.time}
        </p>

        {isExpanded && (
          <>
            <div className="flex items-center gap-2 justify-center">
              <LineChart className="h-4 w-4 text-[var(--custom-gray-800)]" />
              <span className="text-sm font-semibold text-[var(--custom-gray-800)]">
                LEVEL:
              </span>
              <span className="text-sm text-[var(--custom-gray-800)]">
                {lesson.level}
              </span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <Banknote className="h-4 w-4 text-[var(--custom-gray-800)]" />
              <span className="text-sm font-semibold text-[var(--custom-gray-800)]">
                AMOUNT:
              </span>
              <span className="text-sm text-[var(--custom-gray-800)]">
                € {lesson.amount}
              </span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <Download className="h-4 w-4 text-[var(--custom-gray-800)]" />
              <span className="text-sm font-semibold text-[var(--custom-gray-800)]">
                INVOICE:
              </span>
              <Link
                href={lesson.invoiceUrl}
                className="text-[16px] font-semibold text-[var(--custom-blue-700)] underline flex items-center"
              >
                Download
              </Link>
            </div>
          </>
        )}

        <div className="flex flex-col justify-center items-center space-y-2 mb-4">
          <button
            className="w-[60%] bg-[var(--custom-orange-500)] font-bold
           hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center
            justify-center gap-2 transition-colors cursor-pointer"
          >
            <Repeat className="h-4 w-4" />
            <span className="text-xs">Set up recurring sessions</span>
          </button>
          <button
            className="w-[60%] bg-[var(--custom-orange-500)] font-bold
           hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center
            justify-center gap-2 transition-colors cursor-pointer"
          >
            <CalendarDays className="h-4 w-4" />
            <span className="text-xs">Book again</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center underline text-sm cursor-pointer
          font-semibold text-[var(--custom-blue-900)]"
        >
          {isExpanded ? (
            <>
              View less <ChevronUp className="h-4 w-4 ml-1" />
            </>
          ) : (
            <>
              View more <ChevronDown className="h-4 w-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
