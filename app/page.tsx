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
  { label: "Languages", items: ["JavaScript","TypeScript","PHP"] },
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
    <main
      className="min-h-screen gradient-mesh pt-16 sm:pt-20 md:pt-24 lg:pt-28 overflow-x-hidden 
                 bg-gradient-to-br from-[#004D98]/95 via-[#A50044]/80 to-[#004D98]/95 !important"
    >
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
          className="w-60 h-60 sm:w-72 sm:h-78 md:w-78 md:h-96 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-4 ring-white/20 hover:ring-[#FFB81C]/50 transition-all duration-500 mx-auto lg:mx-0 flex-shrink-0 -mt-0 sm:-mt-12 lg:-mt-16"
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
          className="text-center lg:text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-3 lg:px-0 w-full mt-4 sm:mt-2 md:mt-0 lg:-mt-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black bg-gradient-to-r from-[#FFB81C] via-white to-[#FFB81C] bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Shubham Waikar
          </h1>

          {/* SOCIAL LINKS - YOUR EXACT URLS */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 pt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shubham-waikar-591189258"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-[#FFB81C]/60 hover:scale-110 transition-all group shadow-lg"
              title="LinkedIn"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-[#0A66C2] group-hover:fill-[#FFB81C]"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shubhamwaikar-10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-[#FFB81C]/60 hover:scale-110 transition-all group shadow-lg"
              title="GitHub"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#333] group-hover:text-[#FFB81C]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.185 1.08 1.83 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/shubhamwaikar_10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-[#FFB81C]/60 hover:scale-110 transition-all group shadow-lg"
              title="Instagram"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-[#E4405F] group-hover:fill-[#FFB81C]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4.016-1.763-4.016-4.016s1.763-4.016 4.016-4.016 4.016 1.763 4.016 4.016-1.763 4.016-4.016 4.016zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441c.796 0-1.441-.645-1.441-1.441s.645-1.441 1.406-1.441z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:shubhamwaikar60@gmail.com"
              className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-[#FFB81C]/60 hover:scale-110 transition-all group shadow-lg"
              title="Email"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-[#EA4335] group-hover:fill-[#FFB81C]"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

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
                <li>CI/CD pipelines, Play Store deployments</li>
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
