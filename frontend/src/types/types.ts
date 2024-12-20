import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Navigation
export interface NavigationItem {
  label: string;
  icon: IconDefinition;
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
  state: "past" | "current" | "future";
  answer?: any;
}

// Terminal outputs
export interface TerminalOutput {
  id: string;
  content: string;
  createdDate: Date;
  terminalPath: string;
}
