import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

export default function DeleteProject() {
  const { getToken } = useAuth();
  const [projects, setProjects] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProjects = async () => {
  try {
    const token = await getToken();

    const res = await axios.get(
      `${backendUrl}/api/projects`,              
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProjects(res.data.projects || res.data);
  } catch (error) {
    console.log(error);
    toast.error("Failed to load projects");
  }
};

  const deleteProject = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      const token = await getToken();
      await axios.delete(`${backendUrl}/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Project deleted successfully 🚀");

      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-[#161724] border border-white/10 rounded-2xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Delete Projects
          </h1>
          <p className="text-gray-400 mt-2">
            Manage and remove projects from your portfolio.
          </p>
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
            <p className="text-gray-400">
              No projects found.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="
                  flex flex-col md:flex-row
                  md:items-center
                  justify-between
                  gap-4
                  p-4
                  rounded-xl
                  border border-white/10
                  bg-[#0f1117]
                  hover:border-[#7c6dfa]/40
                  transition-all
                  duration-300
                "
              >
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 rounded-lg object-cover border border-white/10"
                  />

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {project.title}
                    </h2>

                    <span className="inline-block mt-1 px-2 py-1 text-xs rounded-md bg-[#7c6dfa]/20 text-[#a99cff]">
                      {project.type}
                    </span>

                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteProject(project.id)}
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-red-600
                    text-white
                    font-medium
                    hover:bg-red-700
                    transition-all
                    duration-300
                    md:min-w-120px
                  "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}