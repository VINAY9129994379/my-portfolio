import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddSkills() {
  const [skill, setSkill] = useState({
    name: "",
    level: "",
    category: "",
  });
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const handleChange = (e) => {
    setSkill((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${backendUrl}/api/skills`, skill);

      toast.success("Skill added successfully 🚀");

      setSkill({
        name: "",
        level: "",
        category: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add skill");
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-white">

      <h1 className="text-2xl font-bold mb-6">
        Add New Skill
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Skill Name */}
        <input
          name="name"
          value={skill.name}
          onChange={handleChange}
          placeholder="Skill Name (e.g. React, Node.js)"
          className="w-full p-3 bg-[#161724] border border-white/10 rounded"
        />

        {/* Level */}
        <select
          name="level"
          value={skill.level}
          onChange={handleChange}
          className="w-full p-3 bg-[#161724] border border-white/10 rounded"
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        {/* Category */}
        <input
          name="category"
          value={skill.category}
          onChange={handleChange}
          placeholder="Category (Frontend / Backend / Tools)"
          className="w-full p-3 bg-[#161724] border border-white/10 rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-3 bg-[#7c6dfa] rounded-lg hover:bg-[#6a5ae0]"
        >
          Add Skill
        </button>

      </form>

    </div>
  );
}