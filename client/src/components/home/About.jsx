export default function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left Side */}
        <div className="bg-[#161724] border border-white/10 rounded-xl p-6">
          <p className="text-[#7c6dfa] uppercase tracking-widest text-sm mb-3">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm Vinay Kumar, a BCA graduate and full-stack developer passionate
            about building modern web applications using React, Node.js,
            PostgreSQL, MongoDB, and AI technologies.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy turning ideas into real-world products and have experience
            building and deploying complete applications from frontend to backend.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-[#161724] border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-5">
            Quick Highlights
          </h3>

          <div className="space-y-3">
            <div>✅ BCA Graduate (2024)</div>
            <div>✅ MERN & PERN Stack Developer</div>
            <div>✅ AI SaaS Application Built & Deployed</div>
            <div>✅ Movie Ticket Booking App Built & Deployed</div>
            <div>✅ PostgreSQL + MongoDB Experience</div>
            <div>✅ OpenAI / Gemini Integration</div>
            <div>✅ Railway + Vercel Deployment Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
}