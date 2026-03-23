"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState(true); // NEW - Track visibility
  const menuRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    setMounted(true); // ADD THIS (line 10)
  }, []);

  // NEW - Hide navbar when scrolled past hero
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroTop = document.getElementById("home")?.offsetTop || 0;
      const heroHeight = document.getElementById("home")?.offsetHeight || 0;

      // Hide navbar when scrolled past hero section
      if (scrollY > heroHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) return <div style={{ display: "none" }} />;

  return (
    <>
      {/* MOBILE HAMBURGER - VISIBLE ONLY IN HERO */}
      <motion.button
        className="fixed top-4 right-4 z-[9999] w-14 h-14 p-3.5 rounded-2xl flex items-center justify-center 
            bg-gradient-to-br from-[#A50044]/90 via-[#004D98]/80 to-[#A50044]/90 
            border border-[#FFB81C]/50 shadow-xl shadow-black/40 md:hidden hover:scale-110 transition-all"
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <X className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Menu className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* DESKTOP NAVBAR - VISIBLE ONLY IN HERO */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0, opacity: isVisible ? 1 : 0 }} // HIDE ON SCROLL
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 px-8 py-4 rounded-3xl z-50 
            backdrop-blur-xl bg-gradient-to-br from-[#A50044]/95 via-[#004D98]/85 to-[#A50044]/95 
            border border-white/20 shadow-2xl shadow-[#A50044]/40"
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <div className="flex gap-2">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollTo(section)}
              className={`px-5 py-3 rounded-2xl font-medium text-sm transition-all ${
                active === section
                  ? "bg-gradient-to-r from-[#A50044] to-[#004D98] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* MOBILE MENU - Smaller */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed top-0 right-0 h-dvh w-64 glass backdrop-blur-xl bg-white/15 border-l-4 border-white/30 z-[9998] md:hidden"
          >
            <div className="p-6 flex flex-col gap-4 mt-16 sm:mt-20">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`py-3 px-5 rounded-xl font-semibold text-left text-base ${
                    active === section
                      ? "bg-gradient-to-r from-[#A50044] to-[#004D98] text-white shadow-lg"
                      : "text-white/90 hover:text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
