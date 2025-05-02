"use client";

import { ChevronDown, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useEffect, useState } from "react";

export default function FilterSection() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [subject, setSubject] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState<string>("");
    const [showMoreFilters, setShowMoreFilters] = useState(false);


    useEffect(() => {
        const subject = searchParams.get("subject") || "";
        const level = searchParams.get("level") || "";
        const price = searchParams.get("price") || "";

        setSubject(subject);
        setLevel(level);
        setPrice(price);
    }, [searchParams]);

    const removeFilter = (type: string) => {
        if (type === "subject") setSubject("");
        if (type === "level") setLevel("");
        if (type === "price") setPrice("");
    };

    const clearAllFilters = () => {
        setSubject("");
        setLevel("");
        setPrice("");
    };

    const applyFilters = () => {
        const query = qs.stringify(
            {
                subject,
                level,
                price,
                page: 1,
            },
            { skipNulls: true }
        );

        router.push(`?${query}`);
    };
    return (
        <div className="mb-10">
            <h2 className="text-lg font-medium mb-2">Filters</h2>

            <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <div className="w-full lg:w-[80%] flex flex-col gap-4 lg:flex-row">
                    <div className="relative w-full md:w-[45%]">
                        <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none 
pr-10 bg-[var(--custom-gray-250)] text-[#949494]"
                        >
                            <option value="">Subject</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
                    </div>

                    <div className="relative w-full md:w-[45%]">
                        <select
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none 
pr-10 bg-[var(--custom-gray-250)] text-[#949494]"
                        >
                            <option value="">Level</option>
                            <option value="gcse">GCSE</option>
                            <option value="a-level">A-Level</option>
                            <option value="university">University</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-2">
                        <button
                            onClick={() => setShowMoreFilters(!showMoreFilters)}
                            className="flex items-center text-[var(--custom-blue-900)] font-medium underline cursor-pointer"
                        >
                            More filters
                            <ChevronDown
                                className={`ml-1 w-4 h-4 transition-transform ${showMoreFilters ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <button
                            onClick={applyFilters}
                            className="bg-[var(--custom-orange-500)] text-white px-4 py-1 rounded-md 
hover:bg-orange-600 transition-colors cursor-pointer"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {showMoreFilters && (
                <div className="mt-4 relative w-full md:w-[35%]">
                    <select
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border border-[#9F9F9F80] rounded-md appearance-none 
pr-10 bg-[var(--custom-gray-250)] text-[#949494]"
                    >
                        <option value="40">40$</option>
                        <option value="50">50$</option>
                        <option value="60">60$</option>
                        <option value="70">70$</option>
                    </select>

                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
                </div>
            )}

            {(subject.length || level.length || price.length) > 0 && (
                <div className="mt-4 w-full flex justify-between gap-2 items-center">
                    <div className="flex flex-wrap gap-3">
                        {subject.length > 0 && (
                            <div
                                className="flex items-center gap-2 border border-[var(--custom-blue-700)]
         text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                            >
                                {subject}
                                <button
                                    onClick={() => removeFilter("subject")}
                                    className="cursor-pointer"
                                >
                                    <X className="w-3 h-3 cursor-pointer" color="#000" />
                                </button>
                            </div>
                        )}

                        {level.length > 0 && (
                            <div
                                className="flex items-center gap-2 border border-[var(--custom-blue-700)]
         text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                            >
                                {level}
                                <button onClick={() => removeFilter("level")}>
                                    <X className="w-3 h-3 cursor-pointer" color="#000" />
                                </button>
                            </div>
                        )}

                        {price.length > 0 && (
                            <div
                                className="flex items-center gap-2 border border-[var(--custom-blue-700)]
         text-[var(--custom-blue-700)] px-3 py-1 rounded-md text-sm"
                            >
                                {price}$
                                <button onClick={() => removeFilter("price")}>
                                    <X className="w-3 h-3 cursor-pointer" color="#000" />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={clearAllFilters}
                        className="border border-[var(--custom-blue-700)] text-[var(--custom-blue-700)]
     text-sm ml-2 px-1.5 py-1.5 rounded-sm cursor-pointer"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    )
}