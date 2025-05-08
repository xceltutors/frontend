"use client"

import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { parseISO, format, isToday } from "date-fns"

interface ClassCardProps {
    urlImage: string
    subject: string
    tutor: string
    level: string
    date: string
    time: string
}

export function ClassCard({ urlImage, subject, tutor, level, date, time }: ClassCardProps) {
    const parsedDate = parseISO(date);
    const isClassToday = isToday(parsedDate);
    const formattedDate = format(parsedDate, "dd/MM");

    return (
        <div className="rounded-lg  p-4 border border-[var(--custom-gray-800)]">
            <div className="mb-3 flex items-center gap-3">
                <div className="h-15 w-15 overflow-hidden rounded-full border-3 border-[var(--custom-blue-700)]">
                    <Image
                        src={urlImage}
                        alt={tutor}
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-base lg:text-xl font-bold text-[var(--custom-blue-900)]">
                        {subject}
                    </h4>
                    <p className="text-xs text-[var(--custom-blue-50)]">{tutor}</p>
                    <p className="text-xs text-[var(--custom-blue-900)] font-medium">{level}</p>
                </div>
            </div>

            <div className="mb-3 flex gap-2 justify-center">
                <span className={`inline-flex items-center rounded-md gap-2 px-5 py-1.5 text-xs font-bold
            ${isClassToday
                        ? "bg-green-600 border-[var(--custom-blue-900)] text-white"
                        : "border-2 bg-gray-100 text-[var(--custom-blue-900)] border-[var(--custom-blue-900)]"
                    }`}>
                    <Calendar size={15} />
                    {isClassToday ? "Today" : formattedDate}
                </span>

                <span className="inline-flex items-center rounded-md bg-gray-100 gap-2
         px-5 py-1.5 text-xs font-bold text-[var(--custom-blue-900)] 
         border-2 border-[var(--custom-blue-900)]">
                    <Clock size={15} />
                    {time}
                </span>
            </div>

            <button
                type="button"
                disabled={!isClassToday}
                className={`w-full rounded-md py-2 text-xs font-medium text-white transition-colors cursor-pointer
          ${isClassToday
                        ? "bg-[var(--custom-blue-700)] hover:bg-teal-700"
                        : "bg-[var(--custom-blue-700)] opacity-50 cursor-not-allowed"
                    }`}
            >
                Go to class
            </button>
        </div>
    )
}
