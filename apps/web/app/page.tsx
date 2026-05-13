"use client";

import { motion } from "motion/react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

export default function Portfolio() {
  return (
    <div id="home" className="bg-[#0d0c10] text-white min-h-screen scroll-smooth">
      
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />     
      {/* About Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-gray-400 leading-8">
            I am a Full Stack Developer with experience building
            scalable web applications using modern technologies
            like React, Next.js, Node.js, Express.js and MongoDB.
          </p>

        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-cyan-400"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >
            
            <h3 className="text-2xl font-semibold mb-4">
              E-Commerce App
            </h3>

            <p className="text-gray-400 mb-6">
              Full stack e-commerce application with authentication,
              payment integration and admin dashboard.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-zinc-800 px-3 py-1 rounded-lg text-sm">
                React
              </span>

              <span className="bg-zinc-800 px-3 py-1 rounded-lg text-sm">
                Node.js
              </span>

              <span className="bg-zinc-800 px-3 py-1 rounded-lg text-sm">
                MongoDB
              </span>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-8">
            Let's build something amazing together.
          </p>

          <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Send Message
          </button>

        </motion.div>
      </section>
    </div>
  );
}