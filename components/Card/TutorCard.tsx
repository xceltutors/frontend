import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export function TutorCard({
  name,
  isSuper = false,
  description,
  hourlyRate,
  currency = "€",
  imageUrl,
  profileUrl = "#",
}: {
  name: string;
  isSuper?: boolean;
  description: string;
  hourlyRate: number;
  currency?: string;
  imageUrl: string;
  profileUrl: string;
}) {
  return (
    <div className="relative w-full max-w-sm group shadow-glow-right z-10">
      <div className="hidden md:inline absolute top-12.5 left-19 w-full h-full
       bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 opacity-80">
          <div className="relative h-72 w-full rounded-xl overflow-hidden mb-4">
            <div className="absolute right-0 top-0 w-[10%] h-full">
              <div className="relative w-[1000%] h-full right-[900%]">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover blur-sm brightness-90"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden h-12">
            <p className="text-[var(--custom-gray-100)] text-sm absolute -top-1">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2 opacity-70">
            <div className="font-bold text-gray-900">
              {currency} {hourlyRate}
              <span className="text-sm font-normal text-gray-600">/hr</span>
            </div>
            <div className="flex items-center text-sm text-[var(--custom-blue-900)] underline">
              <Clock className="h-4 w-4 mr-1" />
              See tutor&apos;s...
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-4">
          <div className="relative h-72 w-full rounded-xl overflow-hidden mb-4">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={`${name} profile`}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-0 left-0 p-4 w-full">
              <div className="flex items-center gap-2">
                <h2 className="text-white text-2xl font-bold">{name}</h2>
                {isSuper && (
                  <div className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                    Super Tutor
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="text-[var(--custom-gray-100)] text-sm mb-4">{description}</p>

          <div className="flex items-center justify-between">
            <div className="font-bold text-gray-900">
              {currency} {hourlyRate}
              <span className="text-sm font-normal text-gray-600">/hr</span>
            </div>
            <Link
              href={profileUrl}
              className="flex items-center text-sm text-[var(--custom-blue-900)] underline"
            >
              <Clock className="h-4 w-4 mr-1" />
              See tutor&apos;s profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
