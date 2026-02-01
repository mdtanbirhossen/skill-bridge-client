import { Route } from "@/types/routes.type";
import { AlignEndVerticalIcon, LayoutDashboard,  User2 } from "lucide-react";

export const tutorRoutes: Route[] = [
  {
    title: "Tutor Management",
    items: [
      {
        title: "Dashboard",
        url: "/tutor/dashboard",
        icon: LayoutDashboard
      },
      {
        title: "Teaching Sessions",
        url: "/tutor/teaching-sessions",
        icon: LayoutDashboard
      },
      {
        title: "Availability",
        url: "/tutor/availability",
        icon: AlignEndVerticalIcon
      },
      {
        title: "Profile",
        url: "/tutor/profile",
        icon: User2
      },
    ],
  },
];
