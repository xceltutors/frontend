import { ITutor } from "@/@types/Tutor/ITutor";
import { Info, University } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardTutor({
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
        return "bg-teal-500 text-white";
      case "Teacher":
        return "bg-amber-500 text-white";
      case "Tutor":
        return "bg-orange-300 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold">{name}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${getTutorTypeClass(
                type
              )}`}
            >
              {type}
            </span>
          </div>

          <div className="mt-4 mb-3 sm:mt-6 md:mt-auto pt-2">
            <Link
              href={"#"}
              className="flex items-center gap-1 xs:gap-2 text-[var(--custom-blue-900)]"
            >
              <Info className="w-3 h-3 xs:w-4 xs:h-4" />
              <span className="text-xs sm:text-sm underline">
                See tutor&apos;s profile
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-2">
            <button
              className="bg-[var(--custom-gray-150)] 
              text-[var(--custom-gray-800)] px-3 py-1.5 
              rounded-sm text-sm flex items-center font-medium gap-2"
            >
              <University size={18} />
              {university}
            </button>

            <button
              className="bg-[var(--custom-gray-150)] 
              text-[var(--custom-gray-800)] px-3 py-1.5 
              rounded-sm text-sm flex items-center font-medium"
            >
              {lessons} Lessons
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--custom-gray-100)] my-3">
        {description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <div className="font-bold">
          € {price}
          <span className="text-gray-500 text-sm font-normal">/hr</span>
        </div>

        <div className="flex gap-2">
          <button
            className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)] px-3 py-1.5 
          rounded-sm text-sm flex items-center font-medium cursor-pointer"
          >
            Book a free 15 minutes call
          </button>

          <button
            className="bg-[var(--custom-orange-500)] text-white px-3 py-1.5
           rounded-sm text-sm hover:bg-orange-600 font-medium cursor-pointer"
          >
            Book a class
          </button>
        </div>
      </div>
    </div>
  );
}
