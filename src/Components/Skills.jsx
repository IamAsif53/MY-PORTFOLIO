import {
  Code,
  Palette,
  Database,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: <Code size={22} />,
      items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "UI / Design",
      icon: <Palette size={22} />,
      items: ["Responsive Design", "Figma", "UI Systems", "UX Basics"],
    },
    {
      title: "Backend / Data",
      icon: <Database size={22} />,
      items: ["Firebase","Node", "REST APIs", "MongoDB (Basic)"],
    },
    {
      title: "Tools",
      icon: <Wrench size={22} />,
      items: ["Git & GitHub", "Vite", "VS Code", "Vercel","Render"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= Section Header ================= */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Technologies and tools I use to build fast, scalable, and
            user-focused web applications.
          </p>
        </div>

        {/* ================= Skills Grid ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-sky-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                  {skill.icon}
                  <h3 className="text-lg font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="space-y-2 text-sm text-gray-300">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
