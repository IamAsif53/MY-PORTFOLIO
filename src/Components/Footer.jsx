export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ================= Top ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-extrabold text-white">
              Jiaul{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                Asif
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Mern Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>

        {/* ================= Bottom ================= */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            © {year} Jiaul Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
