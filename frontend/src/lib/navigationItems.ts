import { NavigationItem } from "@/types/types";
import { faAtom, faHouse } from "@fortawesome/free-solid-svg-icons";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    icon: faHouse,
    href: "/",
  },
  {
    label: "Lessons",
    icon: faAtom,
    href: "/lessons",
  },
];
