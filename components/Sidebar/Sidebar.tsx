"use client";

import { Bell, Menu, X } from "lucide-react";
import Image from "next/image";
import { NavItem } from "./_components/NavItem";
import { navItems } from "./data";

interface SidebarProps {
    sidebarOpen: boolean
    toggleSidebar: () => void
}

export function Sidebar({ sidebarOpen, toggleSidebar }: SidebarProps) {
    return (
        <>
            <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between 
            bg-white p-4 shadow-md md:hidden">
                <button
                    onClick={toggleSidebar}
                    className="rounded-md bg-[var(--custom-blue-700)] p-2 text-white ml-4"
                    aria-label="Toggle menu"
                >
                    {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                <button
                    className="flex h-10 w-10 items-center justify-center rounded-full 
                        bg-[var(--custom-blue-700)] text-white hover:bg-teal-700"
                    aria-label="Notifications"
                >
                    <Bell className="h-6 w-6" />
                </button>
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-80 transform bg-white px-4
                transition-transform duration-300 ease-in-out md:static md:translate-x-0 
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="w-full flex items-center justify-center mb-6 md:mt-0">
                    <div className="flex h-40 w-40 justify-center rounded-md 
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
