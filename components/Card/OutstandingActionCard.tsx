import { Calendar, MessageSquare, User } from "lucide-react";
import Image from "next/image";

interface OutstandingActionCardProps {
    subject: string
    tutor: string
    level: string
    date: string
    time: string
    isFree: boolean
}

export function OutstandingActionCard({ subject, tutor, level, date, time, isFree }: OutstandingActionCardProps) {
    return (
        <div className="rounded-lg border border-red-200 bg-white p-4">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt={tutor}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-medium">{subject}</h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                            <User className="h-3 w-3" />
                            {level}
                        </span>
                        <span className="text-xs text-gray-600">{tutor}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                            <Calendar className="h-3 w-3" />
                            {date}
                        </span>
                        <span className="text-xs text-gray-600">{time}</span>
                        {isFree && (
                            <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                                <MessageSquare className="h-3 w-3" />
                                Free meeting
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="flex-1 rounded-md bg-teal-600 py-1.5 text-xs font-medium text-white hover:bg-teal-700">
                    Reschedule class
                </button>
                <button className="flex-1 rounded-md border border-gray-300 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                    Cancel class
                </button>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs font-medium text-red-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500">!</span>
                Awaiting for tutor approval !
            </div>
        </div>
    )
}
