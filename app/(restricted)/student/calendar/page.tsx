import { SubTitle } from "@/components/SubTitle/SubTitle";
import { Calendar1Icon, ChevronRight, GraduationCap } from "lucide-react";
import Image from "next/image";
import ActivityCalendar from "./activity-calendar";

export default function Calendar() {
    return (
        <section className="w-full flex flex-col px-4 mt-3">
            <div className="flex justify-between">
                <h1 className="font-(family-name:--font-volkhov) text-base 
                        lg:text-3xl font-bold text-[var(--custom-blue-900)]">
                    Keep track of your activities
                </h1>

                <select className="border border-[var(--custom-blue-50)] rounded-md px-4">
                    <option value="day" className="flex items-center text-[var(--custom-blue-50)]">
                        Day View
                    </option>
                    <option value="week">Week View</option>
                    <option value="month">Month View</option>
                </select>
            </div>
            <div className="w-full mb-8">
                <ActivityCalendar />
            </div>
        </section>
    );
}
