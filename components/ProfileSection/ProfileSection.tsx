import { Pencil } from "lucide-react";
import Image from "next/image";

export function ProfileSection() {
    return (
        <>
            <div className="mb-6 flex items-center justify-center">
                <div>
                    <div className="flex gap-2 justify-center">
                        <h3 className="font-(family-name:--font-volkhov) text-base lg:text-xl 
                        font-bold text-[var(--custom-blue-900)] mb-2">
                            Elisa Anderson
                        </h3>
                        <button className="text-gray-500 hover:text-gray-700 mt-[-10px]">
                            <Pencil className="h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-xs text-[var(--custom-gray-800)] text-center">
                        Student
                    </p>
                </div>
            </div>

            <div className="mb-6 flex justify-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                        src="/images/elisa.svg"
                        alt="Profile"
                        width={150}
                        height={150}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}
