import { Calendar, GraduationCap, OctagonAlert, Phone } from "lucide-react";
import Image from "next/image";

interface OutstandingActionCardProps {
    urlImage: string
    subject: string
    tutor: string
    level: string
    date: string
    time: string
    isFree: boolean
}

export function OutstandingActionCard({ urlImage, subject, tutor, level, date, time, isFree }: OutstandingActionCardProps) {
    return (
        <div className="rounded-lg border-2 border-[var(--custom-red-500)] p-6">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-30 w-30 overflow-hidden rounded-full border-2 border-[var(--custom-blue-700)]">
                    <Image
                        src={urlImage}
                        alt={tutor}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h4 className="font-(family-name:--font-volkhov) text-base lg:text-xl
                     text-[var(--custom-blue-900)] font-bold mb-2">{subject}</h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="inline-flex items-center gap-1 text-xs 
                        text-[var(--custom-gray-800)] font-semibold">
                            <GraduationCap className="h-3 w-3" />
                            {level}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs 
                        text-[var(--custom-gray-800)] font-semibold">
                            <Calendar className="h-3 w-3" />
                            {date}
                        </span>
                        {isFree && (
                            <span className="inline-flex items-center gap-1 text-xs
                             text-[var(--custom-gray-800)] font-semibold">
                                <Phone className="h-3 w-3" />
                                Free meeting
                            </span>
                        )}
                    </div>
                    <div className="ml-3 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="text-xs text-[var(--custom-gray-800)]">
                            {tutor}
                        </span>
                        <span className="text-xs text-[var(--custom-gray-800)]">
                            {time}
                        </span>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <button className="flex-1 rounded-md bg-[var(--custom-blue-700)] py-2 
                        text-xs cursor-pointer font-semibold text-white hover:bg-teal-700 shadow-lg">
                            Reschedule class
                        </button>
                        <button className="flex-1 rounded-md border-2 border-[var(--custom-red-500)]
                         py-2 text-xs cursor-pointer font-semibold text-[var(--custom-red-500)]
                          hover:bg-[var(--custom-red-500)] hover:text-white hadow-lg">
                            Cancel class
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 
            font-bold text-base text-[var(--custom-red-500)]">
                <OctagonAlert />
                <span className="text-[var(--custom-red-500)] underline"> Awaiting for tutor approval !</span>
            </div>
        </div>
    )
}
