"use client";

import { useState } from "react";
import { Lesson } from "@/@types/Lesson/ILesson";
import LessonCard from "@/components/Card/LessonCard";

interface Props {
  lessons: Lesson[];
}

export default function LessonList({ lessons }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          isExpanded={lesson.id === expandedId}
          onToggle={() => handleToggle(lesson.id)}
        />
      ))}
    </div>
  );
}
