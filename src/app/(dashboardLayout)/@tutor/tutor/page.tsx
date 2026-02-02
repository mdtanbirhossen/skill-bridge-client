import DashboardStats, { StatItem } from "@/components/DashboardStats";
import { statisticsService } from "@/services/statistics.service";

const TutorDashboardPage = async () => {
  const tutorStats = await statisticsService.getTutorStats();
  console.log(tutorStats)
  const stats: StatItem[] = [
    { title: "Total Bookings", value: tutorStats.data?.data?.totalBookings || 0 },
    { title: "Upcoming Sessions", value: tutorStats.data?.data?.upcomingBookings || 0 },
    { title: "Completed Sessions", value: tutorStats.data?.data?.completedBookings || 0 },
    { title: "Cancelled Sessions", value: tutorStats.data?.data?.cancelledBookings || 0 },
    { title: "Average Rating", value: tutorStats.data?.data?.averageRating?.rating || 0 },
    { title: "Total Reviews", value: tutorStats.data?.data?.totalReviews || 0 },
    { title: "Total Availability Slots", value: tutorStats.data?.data?.totalAvailability || 0 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tutor Dashboard</h1>
      <DashboardStats stats={stats} />
    </div>
  );
};

export default TutorDashboardPage;