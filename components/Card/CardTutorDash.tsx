import type { ITutor } from "@/@types/Tutor/ITutor";
import { GraduationCap, Info, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CardTutorDash({
  id,
  name,
  description,
  image,
  type,
  university,
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
    <div className="rounded-lg shadow-sm p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={50}
              height={50}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3
              className="font-(family-name:--font-volkhov) text-lg font-bold
             text-[var(--custom-blue-900)]"
            >
              {name}
            </h3>
            <span className="text-gray-500">•</span>
            <span className="font-bold text-[var(--custom-blue-900)]0">
              € {price}
              <span className="text-gray-500 text-sm font-normal">/hr</span>
            </span>
          </div>

          <Link
            href={`tutor-profile/${id}`}
            className="flex items-center gap-1 text-[var(--custom-blue-900)]"
          >
            <Info className="w-4 h-4" />
            <Link
              href={`tutor-profile/${id}`}
              className="text-xs sm:text-sm underline"
            >
              See tutor&apos;s profile
            </Link>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center  gap-2 mb-4">
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-2 rounded text-sm">
          <GraduationCap size={16} className="text-gray-600" />
          <span>{university}</span>
        </div>

        <div
          className={`px-3 py-2 rounded text-sm font-medium ${getTutorTypeClass(
            type
          )}`}
        >
          {type}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>

      <div className="mt-auto flex flex-col gap-2">
        <button
          className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)] px-3 py-2 
          rounded text-sm font-medium w-full flex items-center justify-center gap-1 cursor-pointer"
        >
          <Phone size={16} />
          Free 15 minutes call
        </button>
        <button
          className="bg-[var(--custom-orange-500)] text-white px-3 py-2 
          rounded text-sm font-medium w-full cursor-pointer"
        >
          Book a class
        </button>
      </div>
    </div>
  );
}
