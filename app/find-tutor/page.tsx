import { ChevronRight } from "lucide-react";
import { CardTutor } from "@/components/Card/CardTutor";
import { tutors } from "./data";
import FilterSection from "./_components/filter-section";
import Link from "next/link";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

export default async function FindTutorPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams;
    const page = Number.parseInt(params.page as string) || 1;
    const currentPage = page > 0 ? page : 1;

    return (
        <DefaultLayout>
            <section
                className="w-full h-auto mx-auto flex items-center flex-col justify-center text-center
                py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40"
            >
                <h2
                    className="w-[85%] md:w-[50%] lg:w-[48%] xl:w-[40%] font-(family-name:--font-volkhov) text-4xl lg:text-5xl 
                font-bold text-[var(--custom-blue-900)]"
                >
                    Lets find a perfect tutor for your needs
                </h2>
            </section>
            <section className="w-full min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 px-10 sm:px-30 md:px-36 lg:px-43 xl:px-52">
                <FilterSection />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-8">
                    {tutors.map((tutor) => (
                        <CardTutor key={tutor.id} {...tutor} />
                    ))}
                </div>

                <div className="w-full flex justify-center mt-8">
                    <nav className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${page === currentPage
                                    ? "bg-[var(--custom-blue-700)] text-white"
                                    : "transparant text-[var(--custom-blue-700)]"
                                    }`}
                            >
                                <Link href={`/findTutor?page=${page}`}>
                                    {page}
                                </Link>
                            </button>
                        ))}
                        <button
                            className="w-8 h-8 flex items-center cursor-pointer 
                            justify-center transparent text-[var(--custom-blue-700)]"
                        >
                            <Link href={`/findTutor?page=${page}`}>
                                {page}
                            </Link>

                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </nav>
                </div>
            </section>
        </DefaultLayout>
    );
}
