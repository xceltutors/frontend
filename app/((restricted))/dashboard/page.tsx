import { ClassCard } from "@/components/Card/ClassCard";
import { OutstandingActionCard } from "@/components/Card/OutstandingActionCard";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="w-full flex flex-col px-4 mt-3">
            <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-(family-name:--font-volkhov) text-base lg:text-3xl font-bold text-[var(--custom-blue-900)]">
                        Your next classes
                    </h3>
                    <Link href="#" className="text-sm text-gray-500 hover:underline">
                        See all &gt;
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <ClassCard
                        urlImage="/images/classCard.png"
                        subject="Physics lesson"
                        tutor="Alice Johnson"
                        level="University level"
                        date="2025-05-08"
                        time="18:30"
                    />
                    <ClassCard
                        urlImage="/images/classCard.png"
                        subject="Physics lesson"
                        tutor="Alice Johnson"
                        level="University level"
                        date="2025-05-09"
                        time="18:30"
                    />
                </div>
            </div>

            <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-800">Outstanding actions</h3>
                    <Link href="#" className="text-sm text-gray-500 hover:underline">
                        See all &gt;
                    </Link>
                </div>

                <div className="space-y-4">
                    <OutstandingActionCard
                        subject="Physics lesson"
                        tutor="Alice Johnson"
                        level="University level"
                        date="February 12th, 2023"
                        time="03:00 PM - 03:15 PM"
                        isFree={true}
                    />
                    <OutstandingActionCard
                        subject="Biology lesson"
                        tutor="Alice Johnson"
                        level="University level"
                        date="February 12th, 2023"
                        time="03:00 PM - 03:15 PM"
                        isFree={false}
                    />
                </div>
            </div>

        </div>
    )
}