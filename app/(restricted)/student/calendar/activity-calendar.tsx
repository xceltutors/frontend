"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import {
    format,
    addDays,
    addMonths,
    subMonths,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameDay,
    isSameMonth,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils"
import { useMemo } from "react";

type Activity = {
    id: string
    title: string
    duration: string
    instructor: string
    type: "physics" | "bio" | "timeslot"
    date: Date
}

const useSampleActivities = () => {
    return useMemo(() => {
        const today = new Date()
        const currentYear = today.getFullYear()
        const currentMonth = today.getMonth()
        const currentDay = today.getDate()

        const createDate = (dayOffset: number, hour: number) => {
            const date = new Date(currentYear, currentMonth, currentDay + dayOffset, hour)
            return date
        }

        return [
            {
                id: "1",
                title: "Physics Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 10)
            },
            {
                id: "2",
                title: "Bio Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(2, 14)
            },
            {
                id: "3",
                title: "Timeslots available",
                duration: "",
                instructor: "to download",
                type: "timeslot",
                date: createDate(2, 9)
            },
            {
                id: "4",
                title: "UX Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(3, 11)
            },
            {
                id: "5",
                title: "Physics Lesson",
                duration: "15h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 8)
            },
            {
                id: "6",
                title: "Physics Lesson",
                duration: "12h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 13)
            },
            {
                id: "7",
                title: "Physics Lesson",
                duration: "14h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 16)
            },
            {
                id: "8",
                title: "Physics Lesson",
                duration: "18h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 18)
            },
            {
                id: "9",
                title: "Physics Lesson",
                duration: "15h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 20)
            },
            {
                id: "10",
                title: "Physics Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(0, 22)
            },
            {
                id: "11",
                title: "Physics Lesson",
                duration: "25h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(-30, 10)
            },
            {
                id: "12",
                title: "Bio Lesson",
                duration: "21h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(-30, 14)
            },
            {
                id: "13",
                title: "Physics Lesson",
                duration: "22h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(-24, 10)
            },
            {
                id: "14",
                title: "Bio Lesson",
                duration: "21h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(-24, 14)
            },
            {
                id: "15",
                title: "Physics Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(-18, 10)
            },
            {
                id: "16",
                title: "Bio Lesson",
                duration: "21h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(-18, 14)
            },
            {
                id: "17",
                title: "Timeslots available",
                duration: "",
                instructor: "to download",
                type: "timeslot",
                date: createDate(-28, 9)
            },
            {
                id: "18",
                title: "Bio Lesson",
                duration: "21h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(-28, 14)
            },
            {
                id: "19",
                title: "Timeslots available",
                duration: "",
                instructor: "to download",
                type: "timeslot",
                date: createDate(-15, 9)
            },
            {
                id: "20",
                title: "Bio Lesson",
                duration: "21h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(-15, 14)
            },
            {
                id: "21",
                title: "Physics Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "physics",
                date: createDate(5, 10)
            },
            {
                id: "22",
                title: "Bio Lesson",
                duration: "21h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(5, 14)
            },
            {
                id: "23",
                title: "Timeslots available",
                duration: "",
                instructor: "to download",
                type: "timeslot",
                date: createDate(7, 9)
            },
            {
                id: "24",
                title: "UX Lesson",
                duration: "20h",
                instructor: "Alice Johnson",
                type: "bio",
                date: createDate(7, 14)
            },
        ]
    }, [])
}

type ViewType = "day" | "week" | "month"

export default function ActivityCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [viewType, setViewType] = useState<ViewType>("day");
    const sampleActivities = useSampleActivities();

    const navigateNext = () => {
        if (viewType === "day") {
            setCurrentDate(addDays(currentDate, 1));
        } else if (viewType === "week") {
            setCurrentDate(addDays(currentDate, 7));
        } else {
            setCurrentDate(addMonths(currentDate, 1));
        }
    }

    const navigatePrevious = () => {
        if (viewType === "day") {
            setCurrentDate(addDays(currentDate, -1));
        } else if (viewType === "week") {
            setCurrentDate(addDays(currentDate, -7));
        } else {
            setCurrentDate(subMonths(currentDate, 1));
        }
    }

    const getDateRangeTitle = () => {
        if (viewType === "day") {
            return format(currentDate, "dd MMMM yyyy", { locale: ptBR });
        } else if (viewType === "week") {
            const start = startOfWeek(currentDate, { weekStartsOn: 0 });
            const end = endOfWeek(currentDate, { weekStartsOn: 0 })
            return `${format(start, "dd MMMM", { locale: ptBR })} - ${format(end, "dd MMMM",
                { locale: ptBR })} ${format(currentDate, "yyyy")}`;
        } else {
            return format(currentDate, "MMMM yyyy", { locale: ptBR });
        }
    }

    const getDaysForView = () => {
        if (viewType === "day") {
            return [currentDate]
        } else if (viewType === "week") {
            return eachDayOfInterval({
                start: startOfWeek(currentDate, { weekStartsOn: 0 }),
                end: endOfWeek(currentDate, { weekStartsOn: 0 }),
            })
        } else {
            const monthStart = startOfMonth(currentDate)
            const monthEnd = endOfMonth(currentDate)
            const startDate = startOfWeek(monthStart, { weekStartsOn: 0 })
            const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 })

            return eachDayOfInterval({ start: startDate, end: endDate })
        }
    }

    const getActivitiesForDay = (day: Date) => {
        return sampleActivities.filter((activity) => isSameDay(activity.date, day))
    }

    const renderActivities = (day: Date, maxToShow = 3) => {
        const activities = getActivitiesForDay(day)
        const hasMore = activities.length > maxToShow
        const visibleActivities = hasMore ? activities.slice(0, maxToShow) : activities

        return (
            <div className="space-y-1 mt-1">
                {visibleActivities.map((activity) => (
                    <div
                        key={activity.id}
                        className={cn(
                            "flex items-center p-1 text-xs rounded-md border-l-2",
                            activity.type === "physics"
                                ? "border-l-pink-500"
                                : activity.type === "bio"
                                    ? "border-l-blue-500"
                                    : "border-l-green-500",
                        )}
                    >
                        <div className="flex-1">
                            <div className="font-medium">
                                {activity.title} {activity.duration && `- ${activity.duration}`}
                            </div>
                            <div className="text-gray-500 text-[10px]">with {activity.instructor}</div>
                        </div>
                    </div>
                ))}
                {hasMore && (
                    <button className="text-xs text-center w-full text-pink-500 font-medium flex items-center justify-center gap-1 mt-1">
                        <span>View more</span>
                        <Plus size={14} className="bg-pink-500 text-white rounded-full" />
                    </button>
                )}
            </div>
        )
    }

    const renderDayView = () => {
        return (
            <div className="rounded-lg p-4 h-[500px] overflow-y-auto">
                <div className="space-y-2">
                    <div className="text-lg font-medium">{format(currentDate, "EEEE", { locale: ptBR })}</div>
                    {renderActivities(currentDate, 10)}
                </div>
            </div>
        )
    }

    const renderWeekView = () => {
        const days = getDaysForView()

        return (
            <div className="rounded-lg p-4 h-[500px] overflow-auto">
                <div className="grid grid-cols-7 gap-4">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={cn(
                                "min-h-[400px]",
                                format(day, "EEEE", { locale: ptBR }) === "terça-feira" ? "text-orange-500" : "",
                            )}
                        >
                            <div className="text-center font-medium mb-2">{format(day, "EEEE", { locale: ptBR })}</div>
                            <div className="text-center text-sm text-gray-500 mb-4">{format(day, "dd", { locale: ptBR })}</div>
                            {renderActivities(day)}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const renderMonthView = () => {
        const days = getDaysForView()
        const weeks: Date[][] = []

        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7))
        }

        return (
            <div className="rounded-lg p-4 h-[500px] overflow-auto">
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"].map((day, index) => (
                        <div key={index} className="text-center text-sm font-medium">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-1">
                    {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="grid grid-cols-7 gap-1">
                            {week.map((day, dayIndex) => {
                                const isCurrentMonth = isSameMonth(day, currentDate)
                                const isToday = isSameDay(day, new Date())
                                const activities = getActivitiesForDay(day)
                                const isSelected = isSameDay(day, currentDate)

                                return (
                                    <div
                                        key={dayIndex}
                                        className={cn(
                                            "min-h-[100px] p-1 border",
                                            isCurrentMonth ? "bg-white" : "bg-gray-50",
                                            isToday ? "border-blue-500" : "border-gray-200",
                                            isSelected ? "border-orange-500 bg-orange-50" : "",
                                            format(day, "EEEE", { locale: ptBR }) === "terça-feira" ? "text-orange-500" : "",
                                        )}
                                    >
                                        <div className="text-right text-sm">{format(day, "d", { locale: ptBR })}</div>
                                        <div className="mt-1">
                                            {activities.slice(0, 2).map((activity, index) => (
                                                <div
                                                    key={index}
                                                    className={cn(
                                                        "text-xs mb-1 flex items-center",
                                                        activity.type === "physics"
                                                            ? "text-pink-500"
                                                            : activity.type === "bio"
                                                                ? "text-blue-500"
                                                                : "text-green-500",
                                                    )}
                                                >
                                                    <span className="mr-1">•</span>
                                                    <span className="truncate">{activity.title}</span>
                                                    <span className="ml-1">{activity.duration}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="mt-10 max-w-7xl mx-auto border border-[var(--custom-gray-800)] 
        rounded-md shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b 
            border-[var(--custom-gray-800)] py-4 px-4">
                <div className="flex items-center space-x-2">
                    <div className="text-base md:text-xl text-[var(--custom-blue-700)] font-bold">2025</div>
                    <div className="flex items-center space-x-1">
                        <span className="text-base md:text-xl text-[var(--custom-gray-800)] font-bold">
                            {getDateRangeTitle()}
                        </span>
                        <button onClick={navigatePrevious} className="p-1 cursor-pointer">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={navigateNext} className="p-1 cursor-pointer">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {viewType === "day" && renderDayView()}
            {viewType === "week" && renderWeekView()}
            {viewType === "month" && renderMonthView()}
        </div>
    )
}
