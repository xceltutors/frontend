'use client';

import Image from "next/image";
import { useState } from "react";
import { navItems } from "./data";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-[92%] mx-auto h-[5rem] md:h-[7.75rem] flex items-center justify-between px-[3rem] bg-[url('/assets/images/background-header.svg')] 
      bg-cover bg-center rounded-md bg-gray-100 relative">

      <div className="flex items-center">
        <Image width={60} height={60} src="/logo.svg" alt="Logo Xceltutors" className="w-[40] md:w-[60] h-[40] md:h-[60]" />
        <span className="font-(family-name:--font-volkhov) text-[1.5rem] md:text-[2.25rem] text-[var(--custom-blue-900)] font-bold">
          celtutors
        </span>
      </div>

      <nav className="hidden lg:flex gap-8 font-[var(--font-poppins)]">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="relative text-[var(--custom-gray-800)] font-semibold text-base hover:text-orange-500 after:content-[''] after:absolute after:h-[2px] after:w-10 after:bg-[var(--custom-blue-700)] after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:rounded-md after:opacity-0 hover:after:opacity-100 transition-all duration-300"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4">
        <button className="px-6 py-1.5 border-2 border-[var(--custom-blue-700)] text-[var(--custom-blue-700)] rounded-md font-medium">
          Login
        </button>
        <button className="px-6 py-2 bg-[var(--custom-blue-700)] text-white rounded-md font-medium hover:bg-[var(--custom-blue-700)]">
          Sign up
        </button>
      </div>

      <button
        className="lg:hidden z-30 text-[var(--custom-blue-900)]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-white rounded-b-md shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
            <button className="w-[80%] px-6 py-2 border-2 border-[var(--custom-blue-700)] text-[var(--custom-blue-700)] rounded-md font-medium">
              Login
            </button>
            <button className="w-[80%] px-6 py-2 bg-[var(--custom-blue-700)] text-white rounded-md font-medium">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
