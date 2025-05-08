"use client";

import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export function HeaderDashboard() {
    const pathname = usePathname()
    const showSearch = pathname !== "/dashboard";

    return (
        <header className="mb-8 lg:mt-0 flex flex-col gap-4 rounded-lg px-4 lg:flex-row md:items-center md:justify-between">
            <div>
                <h2 className="font-(family-name:--font-volkhov) text-base font-bold text-[var(--custom-blue-900)] md:text-2xl">
                    Hello Elisa <span className="text-yellow-400">👋</span>
                </h2>
                <p className="text-sm text-[var(--custom-gray-800)] md:text-base">
                    Let&apos;s learn something new today
                </p>
            </div>

            <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:items-center md:gap-6">
                {showSearch && (
                    <div className="relative w-full md:w-[447px]">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--custom-gray-600)]" />
                        <input
                            className="w-full rounded-sm border-2 border-[var(--custom-blue-700)] bg-[var(--custom-gray-150)] 
              py-2.5 pl-10 pr-3 text-[var(--custom-gray-800)] placeholder:text-[var(--custom-gray-600)]"
                            placeholder="Search by teacher or subject"
                            type="text"
                        />
                    </div>
                )}

                <button
                    className="hidden md:flex h-13 w-13 items-center justify-center self-start rounded-full 
            bg-[var(--custom-blue-700)] text-white hover:bg-teal-700 md:self-auto"
                    aria-label="Notifications"
                >
                    <Bell className="h-6 w-6" />
                </button>
            </div>
        </header>
    )
}
