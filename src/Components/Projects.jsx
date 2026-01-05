import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind CSS, focused on performance and clean UI.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/IamAsif53/MY-PORTFOLIO",
      live: "https://my-portfolio-beta-five-27.vercel.app/",
    },
    {
      title: "Library Management System",
      description:
        "Library Management System is a full-stack web application that manages book borrowing, library card approval, fines, and admin operations with secure authentication and an AI-powered assistant.",
      tech: ["React", "Node", "Tailwind", "MongoDB"],
      github: "https://github.com/IamAsif53/Library-Management-System",
      live: "https://library-management-system-1yvd.vercel.app/",
    },
    {
      title: "A Dice Game",
      description:
        "A Game built with React, Tailwind, and JavaScript where players roll dice to compete for the highest score.",
      tech: ["HTML", "Tailwind", "JavaScript"],
      github: "https://github.com/IamAsif53/A-dice-Game",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= Section Header ================= */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            A selection of projects that showcase my skills in frontend
            development, UI design, and problem-solving.
          </p>
        </div>

        {/* ================= Projects Grid ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
