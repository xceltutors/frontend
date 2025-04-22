"use client";

import { ReactNode } from "react";
import { Header } from "@/components/Header/Header";
import Footer from "../Footer/Footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center space-y-[4rem] bg-[#f8f8f8] shadow-glow overflow-hidden">
      <Header />
      <main className="w-full flex flex-col space-y-[4rem] relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
