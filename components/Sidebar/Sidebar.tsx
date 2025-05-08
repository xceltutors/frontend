"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import { NavItem } from "./_components/NavItem"
import { navItems } from "./data"

interface SidebarProps {
    sidebarOpen: boolean
    toggleSidebar: () => void
}

export function Sidebar({ sidebarOpen, toggleSidebar }: SidebarProps) {
    return (
        <>
            <button
                onClick={toggleSidebar}
                className="fixed left-4 top-4 z-50 rounded-md bg-sky-600 p-2 text-white shadow-md md:hidden"
            >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={toggleSidebar} />}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white p-4 shadow-lg 
                    transition-transform duration-300 ease-in-out md:static md:translate-x-0 
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="w-full flex items-center justify-center  mb-6">
                    <div className="flex h-40 w-40 items-center justify-center rounded-md
                 text-white border-b-2 border-gray-100">
                        <Image
                            src="/images/logo-dashboard.svg"
                            alt="XCELTUTORS Logo"
                            width={135}
                            height={135}
                            className="h-[135px] w-[135px]"
                        />
                    </div>

                </div>

                <nav className="space-y-1">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            href={item.href}
                            onClick={toggleSidebar}
                        />
                    ))}
                </nav>
            </aside>
        </>
    )
}
