"use client";

import { useState } from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({
  testimonials,
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (testimonials.length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">
          Students testimonials
        </h2>
        <div className="text-center">
          <h3 className="w-[85%] text-xl md:text-4xl font-semibold mb-10 text-center text-[var(--custom-blue-900)]">
            This tutor does not have any testimonial yet.Be the first!
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              className="bg-[var(--custom-orange-500)] text-white px-20 py-2.5 rounded-sm
                text-sm hover:bg-orange-600 font-medium cursor-pointer shadow-md w-full sm:w-auto"
            >
              Book a lesson
            </button>
            <button
              className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)]
                 px-6 py-2.5 rounded-sm text-sm font-medium cursor-pointer shadow-md w-full sm:w-auto"
            >
              Book a free 15 minutes call
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Students testimonials</h2>
      <div className="rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[120px] shadow-[0_10px_24px_rgba(89,177,230,0.6)] rounded-md overflow-hidden">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={`${currentTestimonial.name} profile`}
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="ml-[3%] flex-1">
            <p className="text-[var(--custom-gray-800)] mb-4">
              {currentTestimonial.text}
            </p>
            <div>
              <h4 className="font-semibold text-[var(--custom-blue-900)] text-base md:text-xl">
                {currentTestimonial.name}
              </h4>
              <p className="text-sm text-[var(--custom-gray-800)]">
                {currentTestimonial.role}
              </p>
            </div>
            <div className="flex mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full mx-1 ${
                    index === activeIndex
                      ? "bg-[var(--custom-orange-500)]"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
