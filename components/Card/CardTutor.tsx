import { ITutor } from "@/@types/Tutor/ITutor";
import { Dot, GraduationCap, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CardTutor({
  id,
  name,
  description,
  image,
  type,
  university,
  lessons,
  price,
}: ITutor) {
  const getTutorTypeClass = (type: string) => {
    switch (type) {
      case "Super Tutor":
        return "bg-[var(--custom-blue-600)] text-[var(--custom-blue-700)]";
      case "Teacher":
        return "bg-[var(--custom-yellow-300)] text-[var(--custom-gray-800)]";
      case "Tutor":
        return "bg-[var(--custom-pink-300)]  text-[var(--custom-gray-800)]";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="rounded-lg shadow-sm p-4 flex flex-col border border-[#9F9F9F80]">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative self-center sm:self-start">
          <div
            className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] 
          rounded-full overflow-hidden border-3 border-[var(--custom-blue-700)]"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={130}
              height={130}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
            <Dot size={24} className="hidden xs:inline" />
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${getTutorTypeClass(
                type
              )}`}
            >
              {type}
            </span>
          </div>

          <div className="mt-3 mb-2">
            <Link
              href={"#"}
              className="flex items-center gap-1 text-[var(--custom-blue-900)]"
            >
              <Info className="w-4 h-4" />
              <Link href={`tutor-profile/${id}`} className="text-xs sm:text-sm underline">
                See tutor&apos;s profile
              </Link>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <button
              className="bg-[var(--custom-gray-150)] text-[var(--custom-gray-800)] 
            px-3 py-1.5 rounded-sm text-sm flex items-center font-medium gap-2"
            >
              <GraduationCap size={18} />
              {university}
            </button>
            <button
              className="bg-[var(--custom-gray-150)] text-[var(--custom-gray-800)]
             px-3 py-1.5 rounded-sm text-sm font-medium"
            >
              {lessons} Lessons
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--custom-gray-100)] my-3">
        {description}
      </p>

      <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-bold text-base">
          € {price}
          <span className="text-gray-500 text-sm font-normal">/hr</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)]
           px-3 py-1.5 rounded-sm text-sm font-medium cursor-pointer shadow-md w-full sm:w-auto"
          >
            Book a free 15 minutes call
          </button>
          <button
            className="bg-[var(--custom-orange-500)] text-white px-3 py-1.5 
          rounded-sm text-sm hover:bg-orange-600 font-medium cursor-pointer shadow-md w-full sm:w-auto"
          >
            Book a class
          </button>
        </div>
      </div>
    </div>
  );
}
