import { ClassCard } from "@/components/Card/ClassCard";
import { OutstandingActionCard } from "@/components/Card/OutstandingActionCard";
import { SubTitle } from "@/components/SubTitle/SubTitle";

export default function Dashboard() {
    return (
        <div className="w-full flex flex-col px-4 mt-3">
            <div className="mb-8">
                <SubTitle subtitle="Your next classes" />

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
                <SubTitle subtitle="Outstanding actions" />

                <div className="space-y-4">
                    <OutstandingActionCard
                        urlImage="/images/classCard.png"
                        subject="Physics lesson"
                        tutor="Alice Johnson"
                        level="University level"
                        date="February 12th, 2023"
                        time="03:00 PM - 03:15 PM"
                        isFree={true}
                    />
                    <OutstandingActionCard
                        urlImage="/images/Ellipse 21.svg"
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