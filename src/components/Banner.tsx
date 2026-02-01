const Banner = ({ className }: { className?: string }) => {
    return (
        <section className={`bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-6 md:px-20 rounded-3xl shadow-lg ${className} `}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        SkillBridge
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Connect with Expert Tutors, Learn Anything
                    </p>
                    <p className="mb-6 text-white/80">
                        SkillBridge is a full-stack platform connecting students with expert tutors. Browse profiles, book sessions instantly, and unlock your learning potential.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/register"
                            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-white/90 transition"
                        >
                            Get Started
                        </a>
                        <a
                            href="/tutors"
                            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition"
                        >
                            Browse Tutors
                        </a>
                    </div>
                </div>

                {/* Image / Illustration */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/banner-illustration.png"
                        alt="SkillBridge Learning Illustration"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
