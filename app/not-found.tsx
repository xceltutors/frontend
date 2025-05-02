import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex-grow flex flex-col items-center justify-center px-4 text-center 
            relative pb-[4rem]">
            <div className="hidden md:flex absolute md:right-[-4%] lg:right-[23%] top-[-10%]">
                <Image
                    width={229}
                    height={230}
                    src="/images/cloud.svg"
                    alt="Cloud"
                />
            </div>

            <div className="relative">
                <h1 className="text-[180px] md:text-[300px] font-bold leading-none tracking-tight absolute"
                    style={{
                        left: "8px",
                        top: "8px",
                        zIndex: 0,
                        color: "#006380",
                        opacity: 0.9,
                    }}
                >
                    404
                </h1>
                <h1 className="text-[180px] md:text-[300px] font-bold leading-none tracking-tight relative z-1">
                    <span className="text-[var(--custom-blue-900)]">
                        404
                    </span>
                </h1>
            </div>

            <h2 className="font-(family-name:--font-volkhov) text-3xl md:text-5xl
                 font-bold text-[var(--custom-blue-900)] mt-4 mb-4">
                Page not found!
            </h2>

            <p className="text-[var(--custom-gray-50)] max-w-md mb-8 text-base">
                Something went wrong. Sorry we cant find the page youre looking for.
            </p>

            <Link
                href="/"
                className="bg-[var(--custom-orange-500)] hover:bg-orange-600 gap-2 text-white font-medium px-30 py-3 
                    rounded-md flex items-center justify-center transition-colors shadow-[0_2px_6px_rgba(0,0,0,0.4)] "
            >
                <HomeIcon className="w-5 h-5" />
                Return to home
            </Link>
        </main>
    );
}