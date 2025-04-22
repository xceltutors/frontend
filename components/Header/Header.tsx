"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems } from "./data";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
      <div
        className="w-full mx-auto h-[5rem] md:h-[7.75rem] flex items-center justify-between px-[3rem]
      bg-cover bg-center rounded-md bg-gray-100 relative"
      >
        <Link href="/" className="flex items-center">
          <Image
            width={60}
            height={60}
            src="/logo.svg"
            alt="Logo Xceltutors"
            className="w-[40] md:w-[60] h-[40] md:h-[60]"
          />
          <span className="font-(family-name:--font-volkhov) text-2xl md:text-4xl text-[var(--custom-blue-900)] font-bold">
            celtutors
          </span>
        </Link>

        <nav className="hidden min-[1550px]:flex gap-8 font-[var(--font-poppins)]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative text-[var(--custom-gray-800)] font-semibold text-base hover:text-orange-500 after:content-[''] 
            after:absolute after:h-[2px] after:w-10 after:bg-[var(--custom-blue-700)] after:bottom-[-4px]
             after:left-1/2 after:-translate-x-1/2 
            after:rounded-md after:opacity-0 hover:after:opacity-100 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden min-[1550px]:flex items-center gap-4">
          <button className="px-6 py-1.5 border-2 border-[var(--custom-blue-700)] text-[var(--custom-blue-700)] rounded-md font-medium">
            Login
          </button>
          <button className="px-6 py-2 bg-[var(--custom-blue-700)] text-white rounded-md font-medium hover:bg-[var(--custom-blue-700)]">
            Sign up
          </button>
        </div>

        <button
          className="max-[1550px]:flex hidden z-30 text-[var(--custom-blue-900)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white rounded-b-md 
            shadow-md transition-all duration-300 ease-in-out 
        ${menuOpen
              ? "max-h-96 py-6 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <nav className="flex flex-col items-center gap-4 font-[var(--font-poppins)]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-[var(--custom-gray-800)] font-semibold text-lg hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 w-full items-center mt-4">
              <button
                className="w-[80%] px-6 py-2 border-2 border-[var(--custom-blue-700)] text-[var(--custom-blue-700)]
               rounded-md font-medium"
              >
                Login
              </button>
              <button className="w-[80%] px-6 py-2 bg-[var(--custom-blue-700)] text-white rounded-md font-medium">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
