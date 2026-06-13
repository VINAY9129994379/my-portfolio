import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchProject();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProject = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/projects/${id}`
      );
      setProject(data.project);
    } catch (error) {
      console.log(error);
      setProject(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-24 text-center text-gray-400">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 text-center text-red-400">
        Project not found
      </div>
    );
  }

  return (
  <div className="pt-24 px-4 bg-[#0b0c10] min-h-screen text-white">
    <div className="max-w-4xl mx-auto">

      {/* Back */}
      <Link
        to="/projects"
        className="text-[#7c6dfa] text-sm hover:underline"
      >
        ← Back to Projects
      </Link>

      {/* CARD */}
      <div className="mt-6 bg-[#161724] border border-white/10 rounded-2xl overflow-hidden shadow-xl">

        {/* IMAGE */}
        <div className="w-full h-52 md:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold">
            {project.title}
          </h1>

          {/* Type */}
          <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-[#7c6dfa]/20 text-[#b7a7ff]">
            {project.type}
          </span>

          {/* Description */}
          <p className="text-gray-400 mt-5 leading-7 text-sm md:text-base">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech?.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                px-5 py-2.5
                bg-gradient-to- from-[#7c6dfa] to-[#5b4ae6]
                rounded-xl
                text-sm font-medium
                hover:scale-[1.02]
                transition
              "
            >
              🚀 Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                px-5 py-2.5
                border border-white/10
                rounded-xl
                text-sm
                hover:border-white/30
                transition
              "
            >
              GitHub
            </a>

          </div>

        </div>
      </div>
    </div>
  </div>
);
  
}