'use client';

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Experiences() {
    const [showAll, setShowAll] = useState(false);

    const toggleShow = () => setShowAll(!showAll);
    return (
        <>
            {showAll && (
                <>
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <h3 className="font-(family-name:--font-volkhov) text-base md:text-xl font-bold">
                                Physics tutor
                            </h3>
                            <span className="mx-3 text-gray-400">—</span>
                            <span className="text-[var(--custom-gray-800)]">University of Cambridge (2022 - 2023)</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-[var(--custom-gray-800)]">
                            <li>Experience teaching physics for college students</li>
                            <li>Lorem ipsum is simply dummy text</li>
                            <li>Lorem ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Experience teaching physics for college students</li>
                            <li>Lorem ipsum is simply dummy text</li>
                            <li>Lorem ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <h3 className="font-(family-name:--font-volkhov) text-base md:text-xl font-bold">
                                Biology tutor
                            </h3>
                            <span className="mx-3 text-gray-400">—</span>
                            <span className="text-[var(--custom-gray-800)]">Primary Schools (2016 - 2018)</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-[var(--custom-gray-800)]">
                            <li>Experience teaching physics for college students</li>
                            <li>Lorem ipsum is simply dummy text</li>
                            <li>Lorem ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Experience teaching physics for college students</li>
                            <li>Lorem ipsum is simply dummy text</li>
                            <li>Lorem ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        </ul>
                    </div>
                </>
            )}

            <div className="flex justify-center border-t border-gray-200 pt-4">
                <button
                    onClick={toggleShow}
                    className="flex items-center text-[--custom-gray-800] hover:text-gray-900"
                >
                    <span className="mr-1">{showAll ? 'View less' : 'View more'}</span>
                    {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
            </div>
        </>

    )
}