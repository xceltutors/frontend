import Image from "next/image";
import { navItems } from "./data";

export function Header() {
  return (
    <header className="w-[92%] h-[7.75rem] flex items-center justify-between px-[3rem] bg-[url('/assets/images/background-header.svg')] bg-cover bg-center rounded-md bg-gray-100">
      <div className="flex items-center gap-2">
        <Image width={60} height={60} src="/logo.svg" alt="Logo Xceltutors" />
        <span className="font-[var(--font-volkhov)] text-[2.25rem] text-[var(--custom-blue-900)]">
          celtutors
        </span>
      </div>

      <nav className="flex gap-8 font-[var(--font-poppins)]">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-[var(--custom-gray-800)] hover:text-orange-500"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2 border border-[#1e3a5f] text-[#1e3a5f] rounded-md font-medium hover:bg-gray-100 transition-colors">
          Login
        </button>
        <button className="px-6 py-2 bg-[#0d5e7e] text-white rounded-md font-medium hover:bg-[#0a4c66] transition-colors">
          Sign up
        </button>
      </div>
    </header>
  );
}

