import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, description, tech, github, live } = project;

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-xl hover:shadow-black/30">
      
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-sky-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-white/10" />

        {/* Links */}
        <div className="mt-auto flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
            >
              <Github size={18} />
              Code
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
