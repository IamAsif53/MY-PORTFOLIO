import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= Section Header ================= */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            A quick snapshot of who I am, how I work, and what I care about when
            building digital products.
          </p>
        </div>

        {/* ================= Content ================= */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* LEFT — Story */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Jiaul Asif
              </span>
              , a Mern Stack developer who enjoys turning complex problems into
              simple, beautiful, and intuitive user interfaces.
            </p>

            <p>
              I focus on building modern web applications using{" "}
              <span className="text-white font-medium">
                React, Tailwind CSS, and modern JavaScript
              </span>
              , with a strong emphasis on performance, accessibility, and clean
              architecture.
            </p>

            <p>
              I care deeply about details — from pixel-perfect layouts to
              maintainable code — and I’m always looking to improve my craft by
              learning new tools and best practices.
            </p>
          </div>

          {/* RIGHT — Highlights */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <Briefcase className="text-emerald-400 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Experience</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Frontend-focused projects, personal builds, and continuous
                  learning through real-world applications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <GraduationCap className="text-emerald-400 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Learning & Growth</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Constantly improving through self-learning, documentation,
                  and hands-on experimentation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <MapPin className="text-emerald-400 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Open to remote opportunities and global collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
