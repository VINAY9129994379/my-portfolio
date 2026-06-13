import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

export default function AddProjects() {
  const { getToken } = useAuth();
  const [form, setForm] = useState({
    title: "",
    type: "",
    description: "",
    image: "",
    live: "",
    github: "",
    tech: "",
  });
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        tech: form.tech
          ? form.tech.split(",").map((t) => t.trim())
          : [],
      };

      const token = await getToken();
      await axios.post(`${backendUrl}/api/projects/add`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Project added successfully 🚀");

      setForm({
        title: "",
        type: "",
        description: "",
        image: "",
        live: "",
        github: "",
        tech: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add project");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 bg-[#0f1117] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c6dfa] focus:border-transparent transition-all duration-300";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-[#161724] border border-white/10 rounded-2xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Add New Project
          </h1>
          <p className="text-gray-400 mt-2">
            Create and publish a new portfolio project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Project Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className={inputStyle}
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Type
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Type</option>
              <option value="SaaS">SaaS</option>
              <option value="Web App">Web App</option>
              <option value="Portfolio">Portfolio</option>
              <option value="E-Commerce">E-Commerce</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              rows="5"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write a short project description..."
              className={`${inputStyle} resize-none`}
            />
          </div>

          {/* URLs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image URL
              </label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Live Demo URL
              </label>
              <input
                name="live"
                value={form.live}
                onChange={handleChange}
                placeholder="https://..."
                className={inputStyle}
              />
            </div>
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              GitHub Repository
            </label>
            <input
              name="github"
              value={form.github}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className={inputStyle}
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tech Stack
            </label>
            <input
              name="tech"
              value={form.tech}
              onChange={handleChange}
              placeholder="React, Node.js, PostgreSQL, Tailwind CSS"
              className={inputStyle}
            />
            <p className="text-xs text-gray-500 mt-2">
              Separate technologies with commas (,)
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-
              from-[#7c6dfa]
              to-[#5b4ae6]
              text-white
              font-semibold
              shadow-lg
              shadow-[#7c6dfa]/20
              hover:scale-[1.01]
              hover:shadow-[#7c6dfa]/40
              transition-all
              duration-300
            "
          >
            🚀 Add Project
          </button>

        </form>
      </div>
    </div>
  );
}