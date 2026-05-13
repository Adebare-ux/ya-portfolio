import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NAV_ITEMS } from "./data/profile";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; min-height: 100%; width: 100%; }
      body { margin: 0; min-height: 100%; width: 100%; background: #05080c; color: #fff; font-family: 'Syne', sans-serif; }
      #root { min-height: 100vh; width: 100%; }
      section { width: 100%; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #05080c; }
      ::-webkit-scrollbar-thumb { background: #00dc82; border-radius: 2px; }
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      ::selection { background: rgba(0,220,130,0.3); }
    `;
    document.head.appendChild(style);

    const sections = NAV_ITEMS.map((item) => item.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ background: "#05080c", minHeight: "100vh" }}>
      <Nav active={activeSection} />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}
