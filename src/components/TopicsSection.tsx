const topics = [
  { title: "Mathematics", description: "Algebra, Calculus, Geometry, and more.", color: "bg-purple-100" },
  { title: "Science", description: "Physics, Chemistry, Biology.", color: "bg-green-100" },
  { title: "Languages", description: "English, Bengali, Spanish, etc.", color: "bg-pink-100" },
  { title: "Programming", description: "Web, Mobile, Python, JavaScript, and more.", color: "bg-orange-100" },
  { title: "Arts & Music", description: "Drawing, Painting, Instruments, Singing.", color: "bg-indigo-100" },
  { title: "Business & Finance", description: "Economics, Accounting, Management.", color: "bg-yellow-100" },
];

const TopicsSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Topics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className={`${topic.color} p-6 rounded-lg shadow hover:shadow-lg transition-shadow`}
          >
            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicsSection;
