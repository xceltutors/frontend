import DefaultLayout from "@/components/Layout/DefaultLayout";
import Link from "next/link";
export default function FindTutor() {
    return (
        <DefaultLayout>
            <section className="w-full h-auto mx-auto flex items-center flex-col justify-center text-center space-y-6">
                <h2 className="w-[85%] md:w-[50%] lg:w-[35%] font-(family-name:--font-volkhov) text-4xl lg:text-5xl 
                font-bold text-[var(--custom-blue-900)]">
                    Lets find a perfect tutor
                    for your needs
                </h2>
            </section>
            <section className="flex flex-col">
                <h3>Filters</h3>
                <div className="w-full flex items-center">
                    <select className="p-[1rem]">
                        <option>Subject</option>
                        <option>Subject</option>
                    </select>
                    <select className="p-[1rem]">
                        <option>Level</option>
                        <option>Subject</option>
                    </select>
                    <Link href={"#"}>More Filters</Link>
                    <Link href={"#"} className="bg-[var(--custom-orange-500)]">
                        <button>Apply</button>
                    </Link>
                </div>

            </section>
        </DefaultLayout>
    );
}
