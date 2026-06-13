import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#161724] border border-white/10 rounded-xl overflow-hidden hover:border-[#7c6dfa]/50 hover:-translate-y-1 transition-all duration-300">

  <Link to={`/project/${project.id}`}>
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 object-cover"
    />
  </Link>

  <div className="p-4">

    <span className="text-[11px] text-[#7c6dfa] uppercase">
      {project.type}
    </span>

    <Link to={`/project/${project.id}`}>
      <h3 className="text-lg font-bold mt-1 hover:text-[#7c6dfa] transition">
        {project.title}
      </h3>
    </Link>

    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.slice(0, 4).map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 text-[11px] rounded-md bg-white/5 border border-white/10"
        >
          {tech}
        </span>
      ))}

      {project.tech.length > 4 && (
        <span className="px-2 py-1 text-[11px] rounded-md bg-[#7c6dfa]/20 text-[#7c6dfa]">
          +{project.tech.length - 4}
        </span>
      )}
    </div>

    <div className="flex gap-2 mt-4">
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 bg-[#7c6dfa] rounded-lg text-xs font-medium"
      >
        Live Demo
      </a>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 border border-white/10 rounded-lg text-xs"
      >
        GitHub
      </a>
    </div>

  </div>
</div>
  )
}