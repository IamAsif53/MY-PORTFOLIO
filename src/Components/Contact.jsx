import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4pnjiys",      // ✅ YOUR SERVICE ID
        "template_49u3vyi",     // ✅ YOUR TEMPLATE ID
        e.target,
        "FfyHPhCHbnJtIhAxT"       // ❗ REPLACE with EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= Section Header ================= */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Have a project in mind, a question, or just want to connect?
            I’m always open to discussing new opportunities.
          </p>
        </div>

        {/* ================= Content ================= */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* ================= LEFT — Contact Info + Socials ================= */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <Mail className="text-emerald-400 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400 text-sm mt-1">
                  jiaulasif4877@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <MapPin className="text-emerald-400 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Open to remote & global opportunities
                </p>
              </div>
            </div>

            {/* ================= Social Links ================= */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Connect with me
              </h4>

              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/IamAsif53"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition hover:shadow-lg hover:shadow-black/30"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.facebook.com/jiaul.asif.1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition hover:shadow-lg hover:shadow-black/30"
                >
                  <FaFacebook size={22} />
                </a>

                <a
                  href="https://instagram.com/jiaulasif"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-pink-500 hover:border-pink-500/50 transition hover:shadow-lg hover:shadow-black/30"
                >
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              I usually respond within 24 hours. Whether it’s a freelance
              project, collaboration, or full-time role — feel free to reach out.
            </p>
          </div>

          {/* ================= RIGHT — Contact Form ================= */}
          <form
            onSubmit={sendEmail}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"     // ✅ REQUIRED
                required
                placeholder="Enter your name"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"    // ✅ REQUIRED
                required
                placeholder="Enter your email"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"       // ✅ REQUIRED
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/20 disabled:opacity-60"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-emerald-400 text-sm">
                Message sent successfully! I’ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
