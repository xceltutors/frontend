"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"

interface NavItemProps {
    icon: React.ReactNode
    label: string
    href: string
    onClick?: () => void
}

export function NavItem({ icon, label, href, onClick }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-md px-3 py-3.5 text-sm font-medium transition-colors
                ${isActive
                    ? "border-l-7 border-[var(--custom-blue-900)] bg-[var(--custom-blue-700)] text-white font-medium"
                    : "text-[var(--custom-blue-50)] hover:bg-gray-100"
                }`}
            onClick={onClick}
        >
            {icon}
            {label}
        </Link>
    )
}
