"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <nav className="w-full bg-sky-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="relative h-10 w-10 mr-2">
                                <svg viewBox="0 0 100 100" className="h-10 w-10 text-orange-500" fill="currentColor">
                                    <path d="M50,20 C60,20 70,30 70,40 C70,50 60,60 50,60 C40,60 30,50 30,40 C30,30 40,20 50,20 Z" />
                                    <path d="M20,50 C20,60 30,70 40,70 C50,70 60,60 60,50 C60,40 50,30 40,30 C30,30 20,40 20,50 Z" />
                                    <path d="M50,80 C40,80 30,70 30,60 C30,50 40,40 50,40 C60,40 70,50 70,60 C70,70 60,80 50,80 Z" />
                                    <path d="M80,50 C80,40 70,30 60,30 C50,30 40,40 40,50 C40,60 50,70 60,70 C70,70 80,60 80,50 Z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-semibold text-slate-800">celtutors</span>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link
                                href="/find-tutor"
                                className="text-slate-700 hover:text-slate-900 border-b-2 border-orange-500 pb-1"
                            >
                                Find a tutor
                            </Link>
                            <Link
                                href="/why-online-tutoring"
                                className="text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-orange-500 pb-1"
                            >
                                Why online tutoring
                            </Link>
                            <Link
                                href="/become-tutor"
                                className="text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-orange-500 pb-1"
                            >
                                Become a tutor
                            </Link>
                            <Link
                                href="/prices"
                                className="text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-orange-500 pb-1"
                            >
                                Prices
                            </Link>
                            <Link
                                href="/about"
                                className="text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-orange-500 pb-1"
                            >
                                About us
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-3">
                            <button className="px-4 py-2 border border-slate-400 rounded-md text-slate-700 hover:bg-slate-100 transition-colors">
                                Login
                            </button>
                            <button className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-colors">
                                Sign up
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {mobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-4 py-4 pb-6 bg-white border-t border-slate-200">
                        <Link
                            href="/find-tutor"
                            className="block py-2 text-slate-700 hover:text-slate-900 text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Find a tutor
                        </Link>
                        <Link
                            href="/why-online-tutoring"
                            className="block py-2 text-slate-700 hover:text-slate-900 text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Why online tutoring
                        </Link>
                        <Link
                            href="/become-tutor"
                            className="block py-2 text-slate-700 hover:text-slate-900 text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Become a tutor
                        </Link>
                        <Link
                            href="/prices"
                            className="block py-2 text-slate-700 hover:text-slate-900 text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Prices
                        </Link>
                        <Link
                            href="/about"
                            className="block py-2 text-slate-700 hover:text-slate-900 text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About us
                        </Link>
                        <div className="pt-4 space-y-3">
                            <button
                                className="w-full px-4 py-2 border border-slate-400 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </button>
                            <button
                                className="w-full px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
