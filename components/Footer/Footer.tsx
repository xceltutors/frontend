import { Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--custom-blue-700)] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center font-(family-name:--font-inter)">
          <div>
            <h2 className="text-base md:text-xl font-bold mb-4">
              Company information
            </h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#" className="hover:underline">
                  Find a tutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Become a tutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F.A.Q.
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base md:text-xl font-bold mb-4">
              Popular requests
            </h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#" className="hover:underline">
                  Maths tutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chemistry tutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Physics tutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  T. I. tutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Biology tutor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base md:text-xl font-bold mb-4 lg:mt-2">Contact us</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <Mail />
                <a href="mailto:info@celtutors.com" className="hover:underline">
                  Send an email
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle />
                <a
                  href="https://wa.me/442037736020"
                  className="hover:underline"
                >
                  Message us on Whatsapp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone />
                <a href="tel:+442037736020" className="hover:underline">
                  +44 (0) 203 773 6020
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <Image
                  width={50}
                  height={50}
                  src="/images/logo-footer.svg"
                  alt="Logo Xceltutors"
                  className="object-cover mb-[-12px]"
                />
                <span className="text-4xl font-bold font-(family-name:--font-volkhov)">
                  celtutors
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-3 border-white">
          <div className="text-center text-sm">
            <p className="mb-2 font-[var(--font-poppins)]">
              © XCelTutors Ltd 2025
            </p>
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 font-[var(--font-inter)] text-gray-50">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:underline">
                Tutor code of conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
