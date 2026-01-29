import { Route } from "@/types/routes.type";

export const adminRoutes: Route[] = [
  {
    title: "Admin Management",
    items: [
      {
        title: "Dashboard",
        url: "/admin",
      },
      {
        title: "Users",
        url: "/admin/users",
      },
      {
        title: "Bookings",
        url: "/admin/bookings",
      },
      {
        title: "Categories",
        url: "/admin/categories",
      },
    ],
  },
];
