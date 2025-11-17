import type { NavigationMenuItem } from "@nuxt/ui";

export const navLinks: NavigationMenuItem[] = [
  {
    label: "home",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "about me",
    icon: "i-lucide-user",
    to: "/about-me",
  },
  {
    label: "home lab",
    icon: "i-lucide-flask-conical",
    to: "/home-lab",
  },
];
