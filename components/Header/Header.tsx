import Image from "next/image";
import { navItems } from "./data";

export function Header() {
  return (
    <header className="w-[92%] h-[7.75rem] flex items-center justify-between px-[3rem] bg-[url('/assets/images/background-header.svg')] 
    bg-cover bg-center rounded-md bg-gray-100">
      <div className="flex items-center">
        <Image width={60} height={60} src="/logo.svg" alt="Logo Xceltutors" />
        <span className="font-(family-name:--font-volkhov) text-[2.25rem] text-[var(--custom-blue-900)] font-bold">
          celtutors
        </span>
      </div>

      <nav className="flex gap-8 font-[var(--font-poppins)]">
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


      <div className="flex items-center gap-4">
        <button className="px-6 py-2 cursor-pointer border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)] rounded-md font-medium">
          Login
        </button>
        <button className="px-6 py-2 cursor-pointer bg-[var(--custom-blue-700)] text-white rounded-md font-medium hover:bg-[var(--custom-blue-700)]">
          Sign up
        </button>

      </div>
    </header>
  );
}

