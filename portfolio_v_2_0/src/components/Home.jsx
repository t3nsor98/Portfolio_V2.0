import React from "react";
import Particles from "../animated_components/Particles";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
      {/* Particles as background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl sm:text-8xl font-bold text-white mb-4 leading-tight">
          Code That Works,{" "}
          <span className="text-blue-400">Designs That Engage</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          Hi, I'm Digbijaya Lenka, a MERN Stack Developer transforming complex
          problems into elegant, functional solutions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all">
            View Projects
          </button>
          <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 font-medium transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
