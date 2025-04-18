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
    <section className="w-full py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-10">
          <div className="w-full lg:w-[40%] space-y-3 mb-8 lg:mb-0">
            <h3 className="text-[var(--custom-blue-50)] text-base sm:text-lg md:text-xl font-semibold">
              Students testimonials
            </h3>
            <h2
              className="font-(family-name:--font-volkhov) text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
            text-[var(--custom-blue-900)]"
            >
              Peoples say about
              <br className="hidden md:block" /> our tutors
            </h2>
          </div>

          <div className="w-full lg:w-[57%]">
            <div className="mt-0 lg:mt-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    currentSlide === index
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  <div className="flex flex-col items-start md:flex-row gap-6">
                    <div className="mb-6 flex justify-center md:mb-0 md:w-1/3 lg:w-1/4">
                      <Image
                        width={30}
                        height={30}
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-30 lg:w-30 object-cover
                         rotate-[-10.65deg] rounded-md shadow-[0_8px_24px_rgba(89,177,230,0.6)]"
                      />
                    </div>

                    <div className="md:w-2/3 lg:w-3/4">
                      <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg md:text-left text-gray-700">
                        {testimonial.text}
                      </p>
                      <div className="text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-navy-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-4">
                          {testimonial.role}
                        </p>

                        <div className="flex justify-start mt-2">
                          {testimonials.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToSlide(idx)}
                              className={`mx-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors ${
                                currentSlide === idx
                                  ? "bg-orange-500"
                                  : "bg-gray-300"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
