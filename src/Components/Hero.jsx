import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      {/* ================= Background ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

        {/* Accent glows */}
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/30 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-500/30 blur-[120px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
      </div>

      {/* ================= Content ================= */}
      <div
        className={`mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-10 transition-all duration-700
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* ================= LEFT : TEXT ================= */}
        <div className="text-center md:text-left">
         
          

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            Building{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(34,211,238,0.35)]">
              modern web
            </span>{" "}
            experiences
          </h1>

          {/* Subheading */}
          <h2 className="mt-6 text-xl md:text-2xl text-gray-300 font-medium">
            I’m{" "}
            <span className="inline-block px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white font-bold backdrop-blur mr-1">
              Jiaul Asif
            </span>
             a Mern Stack developer crafting fast, scalable, and beautiful
            interfaces.
          </h2>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
            I specialize in React, Node,Tailwind CSS, and modern JavaScript —
            focusing on clean architecture, performance, and delightful user
            experiences.
          </p>
        </div>

        {/* ================= RIGHT : IMAGE ================= */}
        <div className="flex justify-center md:justify-start md:-ml-6">
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-sky-500 blur-md opacity-80" />

            {/* Image container */}
            <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full bg-black p-1">
              <img
                src={profileImg}
                alt="Your Name"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
