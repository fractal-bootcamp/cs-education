import type { LucideIcon } from "lucide-react";

// Navigation
export interface NavigationItem {
  label: string;
  icon: LucideIcon;
  href: string;
}

// Lesson
export interface Lesson {
  id: string;
  title: string;
  lessonBody: LessonBlock[];
}

export interface LessonBlock {
  id: string;
  type: "text" | "executable";
  content: string;
  answer?: string;
}
