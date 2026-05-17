"use client";

import { motion } from "motion/react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { useEffect, useState } from "react";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Portfolio() {

  const [activeMenu, setActiveMenu] = useState("Home");
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }

        });

      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);
  return (
    <div className="bg-[#0d0c10] text-white min-h-screen scroll-smooth">
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} scrollToSection={scrollToSection} />
      <Hero activeMenu={activeMenu} setActiveMenu={setActiveMenu} scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}