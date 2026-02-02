const partners = [
  { name: "EduTech", logo: "/partners/edutech.png" },
  { name: "Learnify", logo: "/partners/learnify.png" },
  { name: "SkillUp", logo: "/partners/skillup.png" },
  { name: "Bright Minds", logo: "/partners/brightminds.png" },
];

const OurPartners = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-2">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-auto object-contain"
            />
            <span className="text-gray-700 font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
