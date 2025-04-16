"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "./data";

export default function TestimonialSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full flex  justify-between overflow-hidden px-[3rem] py-[2rem]">
      <div className="w-[40%] space-y-3">
        <h3 className="text-[var(--custom-blue-50)] text-[1rem] md:text-[1.25rem] font-semibold">
          Students testimonials
        </h3>
        <h2 className="font-(family-name:--font-volkhov) text-[2.3rem] font-bold text-[var(--custom-blue-900)] md:text-[3rem]">
          Peoples say about
          <br className="hidden md:block" /> our tutors
        </h2>
      </div>
      <div className="w-[57%]">
        <div className="mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                currentSlide === index
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <div className="flex flex-col items-center md:flex-row md:items-start md:gap-12">
                <div className="mb-6 flex justify-center md:mb-0 md:w-1/3 lg:w-1/4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-32 md:w-32">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 lg:w-3/4">
                  <p className="mb-6 text-base text-center text-gray-700 md:text-justify md:text-lg">
                    {testimonial.text}
                  </p>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-navy-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 h-3 w-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-orange-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
