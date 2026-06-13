import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/projects`
      );

      // SAFE FIX (most important line)
      setProjects(data?.projects || data || []);
    } catch (error) {
      console.log(error);
      setProjects([]); // fallback so UI never crashes
    }
  };

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-12">
        <p className="text-[#7c6dfa] font-medium mb-2">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold mb-4">
          My Projects
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Real-world applications built using React, Node.js,
          PostgreSQL, AI APIs, Stripe, Clerk, and cloud deployment.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-3xl font-bold text-[#7c6dfa]">
            {projects?.length || 0}
          </h3>
          <p className="text-gray-400">Projects Built</p>
        </div>

        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-3xl font-bold text-[#7c6dfa]">
            20+
          </h3>
          <p className="text-gray-400">Technologies Used</p>
        </div>

        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-3xl font-bold text-[#7c6dfa]">
            100%
          </h3>
          <p className="text-gray-400">Deployed Projects</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["all", "SaaS", "Web App"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg border transition ${
              filter === item
                ? "bg-[#7c6dfa] border-[#7c6dfa] text-white"
                : "border-white/10 text-gray-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
}