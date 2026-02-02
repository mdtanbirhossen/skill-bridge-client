import { apiFetchServer } from "@/lib/api.server";

export const statisticsService = {
  // Admin statistics
  getAdminStats: () =>
    apiFetchServer("/statistic/admin"),

  // Tutor statistics (for the currently logged-in tutor)
  getTutorStats: () =>
    apiFetchServer("/statistic/tutor"),

  // Student statistics (for the currently logged-in student)
  getStudentStats: () =>
    apiFetchServer("/statistic/student"),
};
