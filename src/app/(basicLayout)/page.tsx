import Banner from "@/components/Banner";
import FeaturedTutors from "@/components/FeaturedTutors";

export default function HomePage() {
  return (
    <div className="mt-5 max-w-7xl mx-auto px-2 md:px-5">
      <Banner className={""} />
      <FeaturedTutors />

    </div>
  );
}
