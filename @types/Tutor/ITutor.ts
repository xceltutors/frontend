export interface ITutor {
    id: number;
    name: string;
    type: "Super Tutor" | "Tutor" | "Teacher";
    university: string;
    lessons: number;
    description: string;
    price: number;
    image: string;
  }