import { ITutor } from "@/@types/Tutor/ITutor";
import Image from "next/image";

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
          {type === "Super Tutor" && (
            <div className="absolute -top-2 -left-2 bg-fuchsia-600 text-white text-xs px-2 py-1 rounded-full">
              See tutor&rsquosprofile
            </div>
          )}
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

          <button className="text-blue-600 text-sm flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 
                9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            See tutor&rsquos profile
          </button>

          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 
                  0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {university}
            </div>

            <div className="flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 
                  3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 
                  14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5
                   18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              {lessons} Lessons
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 my-3">{description}</p>

      <div className="mt-auto flex items-center justify-between">
        <div className="font-bold">
          € {price}
          <span className="text-gray-500 text-sm font-normal">/hr</span>
        </div>

        <div className="flex gap-2">
          <button
            className="border border-blue-600 text-blue-600 px-3 py-1 
          rounded-md text-sm flex items-center hover:bg-blue-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 
                1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493
                 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Book a free 15 minutes call
          </button>

          <button
            className="bg-orange-500 text-white px-3 py-1
           rounded-md text-sm hover:bg-orange-600"
          >
            Book a class
          </button>
        </div>
      </div>
    </div>
  );
}
