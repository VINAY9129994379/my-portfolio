
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Clerk"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    title: "AI & APIs",
    skills: ["OpenAI", "Gemini", "Stripe", "TMDB", "Cloudinary"]
  }
];


export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[#161724] border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#7c6dfa]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}