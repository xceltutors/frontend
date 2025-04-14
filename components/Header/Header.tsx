import Image from "next/image";
import { navItems } from "./data";

export function Header() {
  return (
    <header className="w-[92%] h-[7.75rem] flex bg-[url('/assets/images/background-header.svg')] bg-cover bg-center">
      <div className="flex items-center gap-1">
        <Image width={60} height={60} src="/logo.svg" alt="Logo Xceltutors" />
        <span className="font-volkhov text-[2.25rem] text-[var(--custom-blue-900)]">
          celtutors
        </span>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="font-poppins flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-[var(--custom-gray-800)] hover:text-orange-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-[#1e3a5f] text-[#1e3a5f] rounded-md font-medium hover:bg-gray-100 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 bg-[#0d5e7e] text-white rounded-md font-medium hover:bg-[#0a4c66] transition-colors">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}
