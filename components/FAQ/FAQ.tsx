"use client";

import Image from "next/image";
import { useState } from "react";
import { faqs } from "./data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="w-full h-auto flex-col py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
      <div className="flex flex-col space-y-3">
        <span className="text-base md:text-xl text-[var(--custom-blue-50)] font-semibold">
          Frequently Asked Questions
        </span>
        <div className="flex space-x-[4rem]">
          <h2 className="font-(family-name:--font-volkhov) text-2xl md:text-5xl font-bold">
            Read our FAQs
          </h2>
          <Image
            width={85.46337210202533}
            height={108.93606672563263}
            src="/images/arrow-faq.svg"
            alt="arrow faq"
            className="object-cover mt-[-1rem]"
          />
        </div>
      </div>
      <div className="space-y-4 mt-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white py-6  border-b-2 border-b-gray-200 px-4"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="font-(family-name:--font-volkhov) text-base md:text-xl font-bold text-[var(--custom-gray-800)]">
                {faq.question}
              </h3>
              <svg
                className={`w-6 h-6 transition-transform ${openIndex === index ? "transform rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 text-sm md:text-base transition-opacity duration-300 opacity-100">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
