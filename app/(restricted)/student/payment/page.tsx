import { SubTitle } from "@/components/SubTitle/SubTitle";
import { ChevronRight, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Payment() {
  return (
    <section className="w-full flex flex-col px-4 mt-3">
      <div className="max-w-4xl space-y-6 mb-12">
        <h1
          className="font-(family-name:--font-volkhov) text-base 
            lg:text-3xl font-bold text-[var(--custom-blue-900)]"
        >
          Payment
        </h1>
        <div className="rounded-lg p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-10 h-6">
                <Image
                  src="/images/Mastercard.svg"
                  alt="MasterCard"
                  width={40}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">
                  MasterCard ending in{" "}
                  <span className="font-normal text-[var(--custom-blue-50)]">
                    2847
                  </span>
                </p>
                <p className="text-sm font-medium mt-1">
                  Expiration:{" "}
                  <span className="font-normal text-[var(--custom-blue-50)]">
                    7/2031
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <button className="bg-[var(--custom-blue-700)] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
                Update payment method
              </button>
              <p className="text-sm text-[var(--custom-blue-50)] underline text-center">
                Or choose one of your saved methods
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <SubTitle subtitle="Payment History" />
        <div className="space-y-4">
          {[
            { date: "2024-09-03", amount: "€50", tutor: "Alice Johnson" },
            { date: "2024-09-03", amount: "€50", tutor: "Alice Johnson" },
            { date: "2024-09-03", amount: "€50", tutor: "Bob Smith" },
            { date: "2024-09-03", amount: "€50", tutor: "Bob Smith" },
          ].map((payment, index) => (
            <div
              key={index}
              className="rounded-lg p-6 shadow-sm border border-[var(--custom-gray-800)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6">
                <div>
                  <p className="text-[var(--custom-gray-800)] font-semibold text-base mb-1">
                    DATE
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <p>{payment.date}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[var(--custom-gray-800)] font-semibold text-base mb-1">
                    AMOUNT
                  </p>
                  <p>{payment.amount}</p>
                </div>
                <div>
                  <p className="text-[var(--custom-gray-800)] font-semibold text-base mb-1">
                    TUTOR
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-block p-1 bg-gray-100 rounded-full">
                      <GraduationCap />
                    </span>
                    <p>{payment.tutor}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[var(--custom-gray-800)] font-semibold text-base mb-1">
                    INVOICE
                  </p>
                  <a
                    href="#"
                    className="text-[var(--custom-blue-700)] font-medium hover:underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  type="button"
                  key={page}
                  className={`w-8 h-8 flex cursor-pointer text-[var(--custom-blue-700)]
                     items-center justify-center rounded-full ${
                       page === 1
                         ? "bg-[var(--custom-blue-700)] text-white"
                         : "hover:bg-gray-100"
                     }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-[var(--custom-blue-700)]" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
