import React from "react";
import Particles from "../animated_components/Particles";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Particles as background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#4299e1"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content on top of the particles */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl sm:text-8xl font-bold text-white mb-4 leading-tight">
          Code That Works,{" "}
          <span className="text-blue-400">Designs That Engage</span>
        </h1>

        <p className="mt-6 text-lg sm:text-2xl text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-blue-400">Digbijaya Lenka</span>, a
          passionate MERN Stack Developer with a knack for turning complex
          challenges into clean, functional solutions.
          <span className="hidden sm:inline">
            {" "}
            I specialize in building responsive and scalable web applications —
            from registration systems and content management platforms to
            dynamic, user-driven websites.
          </span>
        </p>

        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-400 hidden sm:block">
            From developing complete registration systems with payment
            integration to creating responsive websites on tight deadlines, I
            transform complex requirements into elegant, functional solutions.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/files/Digbijaya_Lenka_Resume.pdf"
            download
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all cursor-pointer flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 font-medium transition-all cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/t3nsor98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/digbijayalenka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:digbijayalenka@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
