import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-[#7c6dfa] text-sm font-semibold mb-2">
        My Work
      </p>

      <h2 className="text-4xl font-bold mb-4">
        Featured Projects
      </h2>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Some of my best projects built using MERN Stack, PostgreSQL,
        AI APIs, Stripe, and modern web technologies.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            className="bg-[#161724] border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5">
              Developed using {project.tech.length}+ technologies including{" "}
              <span className="text-white">
                {project.tech.slice(0, 4).join(", ")}
              </span>
              , along with modern development tools and deployment platforms.
            </p>

            <Link
              to="/projects"
              className="text-[#7c6dfa] font-medium hover:underline"
            >
              View Project →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/projects"
          className="text-[#7c6dfa] font-semibold"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}