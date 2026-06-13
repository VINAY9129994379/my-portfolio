import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative">

      <div className="max-w-3xl">

        <p className="text-[#7c6dfa] tracking-[3px] uppercase text-xs mb-4">
          Open to Opportunities
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Full Stack Developer <br />
          <span className="text-[#7c6dfa]">Ready to Build</span>
        </h1>

        <p className="text-gray-400 mt-6 leading-relaxed">
          I build modern web applications using React, Node.js, PostgreSQL and AI APIs.
          Focused on creating real-world production level projects.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Link
            to="/projects"
            className="px-5 py-2 bg-[#7c6dfa] rounded-full"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-5 py-2 border border-white/20 rounded-full"
          >
            Contact Me
          </Link>
        </div>

      </div>

    </section>
  );
}