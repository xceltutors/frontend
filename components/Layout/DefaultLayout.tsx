"use client";

import { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
