import { Route } from "@/types/routes.type";

export const studentRoutes: Route[] = [
  {
    title: "Student Management",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "My Bookings",
        url: "/dashboard/bookings",
      },
      {
        title: "Profile",
        url: "/dashboard/profile",
      },
    ],
  },
];
