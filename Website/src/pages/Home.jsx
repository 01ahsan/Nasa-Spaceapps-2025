import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/download.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative z-10 h-full flex flex-col">
        <header className="flex flex-col items-center px-6 pt-24 md:pt-32">
  {/* Logo + Site Name */}
  <div className="flex items-center space-x-3">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">ExoExplorer</h1>
  </div>

  {/* Subheading */}
  <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-center">
    Exploring Worlds Beyond Earth
  </h2>
</header>


          {/* Main overlay content */}
          <main className="flex-1 flex items-start md:items-center justify-center px-6 pt-12 md:pt-16">
            <div className="w-full max-w-7xl">
             <div className="relative flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-4">
  
  {/* Researchers box */}
  <section className="flex-1 md:flex-none md:w-1/2">
    <Link
      to="/researchers"
      className="block bg-black/60 border border-white/20 p-8 rounded-2xl shadow-lg hover:bg-black/70 transition flex flex-col justify-center items-center text-center h-full"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold">Researchers</h2>
      <p className="mt-2 text-lg sm:text-xl opacity-90">
        AI predicts detectability + habitability.
      </p>
    </Link>
  </section>

  {/* Spacer */}
  <div className="flex-1 flex items-center justify-center"></div>

  {/* Beginners box */}
  <aside className="flex-1 md:flex-none md:w-1/2">
    <Link
      to="/beginners"
      className="block bg-black/60 border border-white/20 p-8 rounded-2xl shadow-lg hover:bg-black/70 transition flex flex-col justify-center items-center text-center h-full"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold">Beginners</h2>
      <p className="mt-2 text-lg sm:text-xl opacity-90">
        Start your journey into space exploration.
      </p>
    </Link>
  </aside>

</div>


            </div>
          </main>
        </div>
      </section>

      {/* About & Contact Section */}
<section className="w-full bg-white text-black py-16 px-6 -mt-1">
  <div className="max-w-5xl mx-auto">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold mb-4">About A World Away</h2>
    <p className="text-base mb-6 leading-relaxed">
      "A World Away" is an innovative project exploring exoplanets using AI-driven methods. 
      Our team participates in the NASA Space Challenge to detect distant worlds and assess their potential habitability. 
      This project combines advanced algorithms, astrophysics, and data visualization to make the hunt for exoplanets accessible 
      to both researchers and enthusiasts alike.
    </p>

    {/* Three Info Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Mission */}
      <div className="p-4 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Our Mission</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Detect and analyze exoplanets using AI</li>
          <li>Predict planet habitability and detectability</li>
          <li>Bring space exploration to a wider audience</li>
        </ul>
      </div>

      {/* Approach */}
      <div className="p-4 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Our Approach</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>AI-driven data analysis of astronomical observations</li>
          <li>Collaborative research between scientists and enthusiasts</li>
          <li>Interactive visualizations of exoplanet discoveries</li>
        </ul>
      </div>

      {/* Contact / Get Involved */}
      <div className="p-4 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Get Involved</h3>
        <p className="text-sm mb-2">General Email: <a href="mailto:team@aworldaway.com" className="text-blue-600 underline">team@aworldaway.com</a></p>
        <p className="text-sm mb-2">Collaboration: <a href="mailto:collaborate@aworldaway.com" className="text-blue-600 underline">collaborate@aworldaway.com</a></p>
        <p className="text-sm mb-2">Location: Dhaka, Bangladesh</p>
        <p className="text-sm mb-2">Join our Discord: <a href="https://discord.gg/yourlink" className="text-blue-600 underline">discord.gg/aworldaway</a></p>
        <p className="text-sm">Follow us on Twitter: <a href="https://twitter.com/aworldaway" className="text-blue-600 underline">@AWorldAway</a></p>
      </div>
    </div>

    {/* Call-to-Action Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
      <a
        href="mailto:team@aworldaway.com"
        className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-90 transition text-center w-full sm:w-auto"
      >
        Email Us
      </a>
      <a
        href="https://discord.gg/yourlink"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border border-black rounded-lg bg-transparent hover:opacity-90 transition text-center w-full sm:w-auto"
      >
        Join Discord
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
