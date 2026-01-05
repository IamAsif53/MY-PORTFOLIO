import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ================= Logo ================= */}
        <a
          href="#home"
          className="text-lg md:text-xl font-extrabold tracking-tight text-white"
        >
             MY 
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
            PORTFOLIO
          </span>{" "}
          
        </a>

        {/* ================= Desktop Nav ================= */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition group"
            >
              {link.name}
              {/* underline indicator */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA */}
          <a
            href="https://github.com/IamAsif53/CV/blob/main/Jiaul_Asif_CV.pdf"
            target="_blank"
            className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/20"
          >
            CV
          </a>
        </div>

        {/* ================= Mobile Menu Button ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-4 mb-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-6">
          <div className="flex flex-col space-y-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://github.com/IamAsif53/CV/blob/main/Jiaul_Asif_CV.pdf"
              target="_blank"
              className="inline-block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
