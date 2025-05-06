"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function GoBackBtn() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center text-[var(--custom-blue-900)] cursor-pointer
       underline font-semibold"
    >
      <ArrowLeft className="w-4 h-4 mr-1" />
      Back to tutors
    </button>
  );
}
