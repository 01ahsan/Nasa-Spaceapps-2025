import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { motion } from "framer-motion";

export default function Beginners() {
  const [showPrediction, setShowPrediction] = useState(false);

  const planets = [
    {
      name: "Kepler-452b",
      distance: "1400 ly",
      star: "Kepler-452",
      detectability: "High",
      habitability: "Medium",
    },
    {
      name: "Proxima Centauri b",
      distance: "4.2 ly",
      star: "Proxima Centauri",
      detectability: "Medium",
      habitability: "Low",
    },
    {
      name: "TRAPPIST-1e",
      distance: "39 ly",
      star: "TRAPPIST-1",
      detectability: "High",
      habitability: "High",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-6 left-6 z-50"
      >
        <a
          href="/"
          className="px-5 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-pink-500 hover:to-purple-500 transition transform duration-300"
        >
          Home
        </a>
      </motion.div>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/download2.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center h-full text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Explore Exoplanets: Your Beginner’s Journey
          </h1>
        </motion.div>
      </div>

      {/* Section 1: Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          What are Exoplanets?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
          <div className="md:w-1/2 text-gray-700">
            <p className="mb-4">
              Exoplanets are planets located outside our solar system. Some of them are similar to Earth and could even be habitable. Scientists use telescopes and advanced AI algorithms to detect these distant worlds.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Planets outside our solar system</li>
              <li>Some are similar in size and conditions to Earth</li>
              <li>Discovered using telescopes, light curves, and AI analysis</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/image6.jpg"
              alt="Exoplanets Illustration"
              className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 2: Interactive Planet Explorer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Interactive Planet Explorer
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Explore our collection of exoplanets. Use the search and filter options to find planets by name, distance, host star, detectability, or habitability.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white">
              <tr>
                <th className="p-3">Planet Name</th>
                <th className="p-3">Distance from Earth</th>
                <th className="p-3">Star</th>
                <th className="p-3">Detectability Score</th>
                <th className="p-3">Habitability Score</th>
              </tr>
            </thead>
            <tbody>
              {planets.map((planet, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-purple-50/60" : "bg-pink-50/60"
                  } hover:scale-[1.01] hover:bg-purple-100/70 transition transform duration-200`}
                >
                  <td className="p-3 font-semibold text-purple-800">{planet.name}</td>
                  <td className="p-3 text-gray-700">{planet.distance}</td>
                  <td className="p-3 text-gray-700">{planet.star}</td>
                  <td className="p-3 text-gray-700">{planet.detectability}</td>
                  <td className="p-3 text-gray-700">{planet.habitability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
  <img
    src="/image4.jpg"
    alt="Planet Map"
    className="w-full md:w-2/3 max-h-[32rem] object-contain rounded-xl shadow-lg"
  />
</div>

      </motion.div>

      {/* Section 3: Feature Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Feature Highlights / “Why this planet?”
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Want to know why our AI thinks a planet is habitable? Here's a simple explanation using the planet’s key features like size, distance from its star, and orbital period.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <ul className="space-y-3 text-gray-700">
              <li>Radius similarity <progress className="w-full" value="80" max="100"></progress></li>
              <li>Orbital position <progress className="w-full" value="70" max="100"></progress></li>
              <li>Stellar flux / temperature <progress className="w-full" value="90" max="100"></progress></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
  src="/image11.jpg"
  alt="Feature Highlights"
  className="w-full h-80 md:h-96 object-cover object-top rounded-xl shadow-lg"
/>
          </div>
        </div>
      </motion.div>

      {/* Section 4: Planet Mapping */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Planet Mapping Section
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          See where these exoplanets are located in the galaxy! Our 3D map shows Earth at the center, nearby stars, and detected exoplanets in their positions.
        </p>
        <div className="flex justify-center">
        <img
    src="/image7.jpg"
    alt="3D Planet Map"
    className="w-full md:w-2/3 h-80 object-contain rounded-xl"
  />
        </div>
      </motion.div>

      {/* Section 5: One-Click Preprocessing / AI Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          One-Click Preprocessing / AI Simulation
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Experience the power of NASA-style AI! Click the button below to "predict" your planet’s habitability and detectability. Our demo shows how AI can help scientists prioritize targets for observation.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setShowPrediction(!showPrediction)}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-pink-500 transition-colors duration-300"
          >
            Predict Your Planet’s Habitability!
          </button>
          {showPrediction && (
            <div className="mt-4 p-6 bg-purple-50 rounded-xl shadow-lg text-center">
              <p className="font-semibold">Planet: KOI-1234</p>
              <p>Habitability: High</p>
              <p>Detectability: Easy</p>
              <p className="text-3xl">😊</p>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <img
            src="/image8.jpg"
            alt="AI Simulation"
            className="w-full md:w-2/3 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </motion.div>

      {/* Section 6: Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Fun Facts / Educational Corner
        </h2>
        <p className="text-gray-700 mb-6 text-center">
        A day on Venus is longer than a year on Venus!
        Venus takes 243 Earth days to rotate once on its axis (a “day”), but only 225 Earth days to orbit the Sun (a “year”).
        </p>
        <div className="flex justify-center">
        <img
  src="/image10.jpg"
  alt="Feature Highlights"
  className="w-full h-80 md:h-96 object-cover object-top rounded-xl shadow-lg"
/>
        </div>
      </motion.div>
      {/* Section: Explainability (XAI) */}
    
      {/* Section 7: Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 mb-16 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16 text-center"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6">
          Explore More
        </h2>
        <p className="text-gray-700 mb-6">
          Ready to explore advanced exoplanet research? Click below to switch to Researcher Mode and access full datasets, ML predictions, and interactive maps.
        </p>
        <a
          href="/researchers"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-pink-500 transition-colors duration-300"
        >
          Try Advanced Research Mode
        </a>
        
      </motion.div>
      

      {/* Dashboard at the bottom */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative p-10 mt-16 mb-16 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
>
  <Dashboard />
</motion.div>
    </div>
  );
}
