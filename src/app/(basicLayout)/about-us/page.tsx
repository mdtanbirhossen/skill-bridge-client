const AboutUsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">
        About <span className="text-purple-600">SkillBridge </span>
      </h1>
      <p className="text-lg text-gray-700">
        <strong>"Connect with Expert Tutors, Learn Anything"</strong>
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p>
          SkillBridge is a full-stack web application that connects learners with expert tutors.
          Students can browse tutor profiles, view availability, and book sessions instantly.
          Tutors can manage their profiles, set availability, and track their teaching sessions.
          Admins oversee the platform and manage users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Roles & Permissions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Student:</strong> Browse tutors, book sessions, leave reviews, manage profile
          </li>
          <li>
            <strong>Tutor:</strong> Create profile, set availability, view bookings, manage subjects
          </li>
          <li>
            <strong>Admin:</strong> Manage all users, view analytics, moderate content
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Browse and search tutors by subject, rating, and price</li>
          <li>Filter tutors by category</li>
          <li>View detailed tutor profiles with reviews</li>
          <li>Landing page with featured tutors</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUsPage;
