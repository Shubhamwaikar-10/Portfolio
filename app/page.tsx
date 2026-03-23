"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Smartphone, Globe, Briefcase, GraduationCap } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ParticlesBg } from "../components/ParticlesBg";

const projects = [
  {
    name: "Vartman Nirnay",
    desc: "Govt exam preparation app. Daily newspapers, weekly tests. implemented payment gateway, user auth, and dynamic content updates.",
    play: "https://play.google.com/store/apps/details?id=com.vartmannew",
    web: "https://vartmannirnay.com",
  },
  {
    name: "Academy Management",
    desc: "Real-time academy management app for teachers. Attendance, scheduling, and student performance tracking.",
    play: "https://play.google.com/store/apps/details?id=com.academyteacher",
  },
];

const skills = [
  { label: "Languages", items: ["JavaScript"] },
  {
    label: "Frameworks/Libraries",
    items: ["React Native", "React.js", "Next.js", "Node.js", "Express.js"],
  },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  {
    label: "Tools/DevOps",
    items: ["CI/CD", "Git", "JWT", "Redux Toolkit"],
  },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio: ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nEmail: ${formData.email}`,
    );
    window.location.href = `mailto:shubhamwaikar60@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  if (!mounted) return <div />;

  return (
    <main className="min-h-screen gradient-mesh pt-16 sm:pt-20 md:pt-24 lg:pt-28 overflow-x-hidden">
      <Navbar />
      <ParticlesBg />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 sm:px-8 lg:px-12 pt-20 pb-12 relative z-0 gap-6 lg:gap-10 bg-transparent"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className="w-54 h-54 sm:w-66 sm:h-66 md:w-74 md:h-74 lg:w-82 lg:h-82 xl:w-98 xl:h-98 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-4 ring-white/20 hover:ring-[#FFB81C]/50 transition-all duration-500 mx-auto lg:mx-0 flex-shrink-0 -mt-14 sm:-mt-16 lg:-mt-18"
        >
          <img
            src="/pic.png"
            alt="Shubham"
            className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700"
            loading="lazy"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-2 lg:px-0 w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black bg-gradient-to-r from-[#FFB81C] via-white to-[#FFB81C] bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Shubham Waikar
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-tight">
            MCA Graduate & Frontend Developer (1.9y React Native/React.js).
            Building MERN expertise. Pune-based (Satara native).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-max mx-auto lg:mx-0">
            {/* View My Work - UNCHANGED */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#A50044] to-[#004D98] text-white font-semibold rounded-2xl shadow-2xl hover:shadow-[#FFB81C]/50 border border-[#FFB81C]/30 hover:border-[#FFB81C]/50 transition-all duration-300 text-base sm:text-lg group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="group-hover:translate-x-1 transition-transform">
                View My Work
              </span>
            </motion.button>

            {/* Resume - SAME design, different gradient */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#A50044] to-[#004D98] text-white font-semibold rounded-2xl shadow-2xl hover:shadow-[#FFB81C]/50 border border-[#FFB81C]/30 hover:border-[#FFB81C]/50 transition-all duration-300 text-base sm:text-lg group"
              onClick={() => {
                const modal = document.createElement("div");
                modal.onclick = (e) => e.target === modal && modal.remove();
                modal.style.cssText =
                  "position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px";
                modal.innerHTML = `
    <div style="background:linear-gradient(135deg,#A50044,#004D98);color:white;padding:40px 30px;border-radius:24px;text-align:center;max-width:90vw;min-height:200px;box-shadow:0 25px 50px rgba(0,0,0,0.5);position:relative" onclick="event.stopPropagation()">
      <h2 style="font-size:1.8rem;margin:0 0 20px 0">Resume Download</h2>
      <a href="/Resume.pdf" download style="display:inline-block;padding:16px 32px;background:rgba(255,255,255,0.2);color:white;text-decoration:none;border-radius:16px;font-weight:600;font-size:1.1rem;border:1px solid rgba(255,255,255,0.3)">⬇️ Download PDF</a>
    </div>
  `;
                document.body.appendChild(modal);
              }}
            >
              📄 Resume
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-20 sm:mb-24 lg:mb-28 
              bg-gradient-to-r from-[#F1C94D] via-[#FFE066] to-[#D4A017] bg-clip-text text-transparent 
              drop-shadow-2xl -webkit-background-clip-text" // FIXED
        >
          Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 sm:p-12 rounded-4xl flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
          >
            <div className="glass p-6 sm:p-8 rounded-3xl neon-glow bg-gradient-to-br from-[#A50044] flex-shrink-0">
              <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Frontend Developer
              </h3>
              <p className="text-lg sm:text-xl opacity-90 mb-0">MCA Graduate</p>
              <p className="text-lg sm:text-xl opacity-90 mb-0">
                1.9 Years Experience
              </p>
              <p className="text-lg sm:text-xl opacity-90 mb-4">Pune</p>
              <ul className="mt-4 sm:mt-6 space-y-2 text-base sm:text-lg">
                <li>
                  React Native apps with Redux Toolkit & JWT authentication
                </li>
                <li>React.js/Next.js web applications</li>
                <li>Developing MERN stack (MongoDB, Express.js, Node.js)</li>
                <li>CI/CD pipelines, Docker deployments</li>
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 sm:p-12 rounded-4xl flex flex-col sm:flex-row gap-6 sm:gap-8 items-start max-w-4xl"
          >
            <div className="glass p-6 sm:p-8 rounded-3xl neon-glow bg-gradient-to-br from-[#FFB81C]/20 border border-[#FFB81C]/30 mt-2 flex-shrink-0">
              <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-[#FFB81C]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-[#FFB81C] via-white to-[#FFB81C] bg-clip-text text-transparent">
                Education
              </h3>
              <div className="space-y-8">
                <div className="group mb-8 sm:mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-[#FFB81C] rounded-full group-hover:scale-125 transition-transform"></div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      MCA - 8.02 CGPA
                    </h4>
                  </div>
                  <p className="text-base sm:text-lg opacity-90 mb-2 break-words leading-relaxed">
                    {" "}
                    Thakur Institute of Management Studies Career Development &
                    Research
                  </p>
                  <p className="text-sm opacity-70 font-mono bg-black/20 px-3 py-1 rounded-full inline-block">
                    Mumbai • 2022-2025
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-white/60 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    BCA - 8.2 CGPA
                  </h4>
                </div>
                <p className="text-base sm:text-lg opacity-90 mb-2 break-words leading-relaxed">
                  {" "}
                  Karmaveer Bhaurao Patil Institute of Management Studies
                  Research
                </p>
                <p className="text-sm opacity-70 font-mono bg-black/20 px-3 py-1 rounded-full inline-block">
                  Satara • 2019-2022
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-center mb-16 sm:mb-20 lg:mb-24 
              bg-gradient-to-r from-[#F1C94D] via-[#FFE066] to-[#D4A017] bg-clip-text text-transparent 
              drop-shadow-2xl -webkit-background-clip-text"
        >
          Skills
        </motion.h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FFB81C] mb-3 group-label">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-white/85 bg-white/8 border border-white/15 rounded-md hover:bg-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <hr className="mt-12 sm:mt-16 border-white/10" />
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-0"
      >
        <motion.h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 lg:mb-24 bg-gradient-to-r from-[#F1C94D] via-[#FFE066] to-[#D4A017] bg-clip-text text-transparent drop-shadow-lg">
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name + index}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 sm:p-12 rounded-4xl hover:neon-glow transition-all cursor-pointer group"
            >
              <h3 className="text-2xl sm:text-3xl sm:text-4xl font-black mb-4 sm:mb-6 group-hover:text-[#FFB81C] transition-colors">
                {project.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-90">
                {project.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.play && (
                  <a
                    href={project.play}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#004D98]/80 to-[#A50044]/80 text-white rounded-2xl flex items-center gap-2 group-hover:scale-105 border border-[#FFB81C]/20 hover:border-[#FFB81C]/50 transition-all text-sm sm:text-base"
                  >
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Play Store
                  </a>
                )}
                {project.web && (
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#004D98]/80 to-[#A50044]/80 text-white rounded-2xl flex items-center gap-2 group-hover:scale-105 border border-[#FFB81C]/20 hover:border-[#FFB81C]/50 transition-all text-sm sm:text-base"
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    Website
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-16 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-0"
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-center mb-8 sm:mb-14 bg-gradient-to-r from-[#F1C94D] via-[#FFE066] to-[#D4A017] bg-clip-text text-transparent drop-shadow-lg">
            Let's Build Together
          </h2>
          <div className="glass p-8 sm:p-12 rounded-4xl space-y-6 max-w-md mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl shadow-black/50 text-center mb-6 font-black tracking-tight">
              Let's Build Something Amazing! 🚀
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB81C] transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB81C] transition-all"
                required
              />
              <textarea
                rows={4}
                placeholder="Message *"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB81C] resize-none transition-all"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#A50044] to-[#004D98] text-white font-bold shadow-xl hover:shadow-2xl transition-all text-lg disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
