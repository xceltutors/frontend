"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ExperiencesContent } from "./experiences-content";

export function Experiences() {
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      {showAll && <ExperiencesContent />}

      <div className="w-full flex justify-center pt-4">
        <div className="w-[85%] lg:w-[30%] flex items-center justify-center border-t-3 border-gray-200 p-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-[--custom-blue-900] underline font-semibold"
          >
            <span className="mr-1">{showAll ? "View less" : "View more"}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
