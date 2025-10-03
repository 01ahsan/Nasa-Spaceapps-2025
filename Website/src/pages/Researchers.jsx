import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Researchers() {
  const [preprocessFile, setPreprocessFile] = useState(null);

  const rawFluxDatasets = [
    {
      name: "NASA Exoplanet Archive – Bulk Data",
      description:
        "Official NASA bulk data portal with TCE light curves, KOI event files, and mission-level tables.",
      link: {
        url: "https://exoplanetarchive.ipac.caltech.edu/bulk_data_download/?utm_source=chatgpt.com",
        text: "Download",
      },
      notes:
        "Best starting point for downloading Kepler/K2 mission data in bulk.",
    },
    {
      name: "Kepler Mission Data (MAST/STSci)",
      description:
        "Complete Kepler raw data archive: light curves (SAP, PDCSAP), pixel files, full-frame images.",
      link: {
        url: "https://archive.stsci.edu/missions-and-data/kepler?utm_source=chatgpt.com",
        text: "Kepler Archive",
      },
      notes: "Use for extracting raw photometry and building CGR/ML pipelines.",
    },
    {
      name: "SuperWASP Bulk Time Series",
      description:
        "Ground-based transit survey with millions of light curve observations.",
      link: {
        url: "https://exoplanetarchive.ipac.caltech.edu/docs/SuperWASPBulkDownload.html?utm_source=chatgpt.com",
        text: "SuperWASP Data",
      },
      notes: "Great for extending beyond Kepler space data, very large files.",
    },
    {
      name: "UKIRT Microlensing Survey (265 GB)",
      description: "Near-infrared microlensing time-series data.",
      link: {
        url: "https://exoplanetarchive.ipac.caltech.edu/docs/UKIRTBulkDownload.html?utm_source=chatgpt.com",
        text: "UKIRT Data",
      },
      notes: "Useful for advanced research; dataset is very large.",
    },
  ];

  const processedDatasets = [
    {
      name: "Mendeley “ML Exoplanet Lightcurve Dataset”",
      description:
        "5,302 Kepler KOI light curves (preprocessed: normalized, interpolated, cleaned).",
      link: {
        url: "https://data.mendeley.com/datasets/wctcv34962/3?utm_source=chatgpt.com",
        text: "Mendeley Dataset",
      },
      notes: "Excellent for ML training without heavy preprocessing.",
    },
    {
      name: "NASA Exoplanet Archive – KOI / TCE / Confirmed Planets",
      description:
        "Core exoplanet catalogs with candidate & confirmed planets, stellar parameters, orbital details.",
      link: {
        url: "https://exoplanetarchive.ipac.caltech.edu/?utm_source=chatgpt.com",
        text: "Exoplanet Archive",
      },
      notes:
        "Ideal for merging with light curves, feature engineering, or labeling.",
    },
  ];

  const renderTable = (title, description, datasets) => (
    
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl p-6 border border-purple-200 
                 hover:shadow-3xl hover:scale-[1.02] transition-transform duration-300"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 
                     bg-clip-text text-transparent mb-2">
        {title}
      </h2>
      <p className="mb-4 text-gray-700">{description}</p>
  
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-left border border-gray-200 overflow-hidden rounded-xl 
                          bg-gradient-to-r from-white/90 to-gray-100/70">
          <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white">
            <tr>
              <th className="p-3">Dataset</th>
              <th className="p-3">Description</th>
              <th className="p-3">Direct Link</th>
              <th className="p-3">Usage / Notes</th>
            </tr>
          </thead>
          <tbody>
            {datasets.map((ds, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-purple-50/60" : "bg-pink-50/60"
                } hover:scale-[1.01] hover:bg-purple-100/70 transition transform duration-200`}
              >
                <td className="p-3 font-semibold text-purple-800">{ds.name}</td>
                <td className="p-3 text-gray-700">{ds.description}</td>
                <td className="p-3">
                  <a
                    href={ds.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 font-medium hover:underline hover:text-pink-800"
                  >
                    🔗 {ds.link.text}
                  </a>
                </td>
                <td className="p-3 text-gray-700">{ds.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
  

  return (
    <div className="min-h-screen relative overflow-hidden">
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
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Explore Exoplanets: As Researcher
          </h1>
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-[80vh] left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-[120vh] right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      {/* Content Section */}
      {/* 🔹 New Heading for Raw Flux & Time-Series Section */}
<h1 className="text-3xl font-extrabold text-purple-700 text-center mt-12 mb-6">
  Necessary Datasets For Exoplanet Research
</h1>


      <div className="relative p-10 space-y-10 bg-gradient-to-b from-white to-gray-100 z-10">
        {renderTable(
          "1. Raw Flux & Time-Series Data",
          "For researchers who want to work directly with telescope light curves and photometric data.",
          rawFluxDatasets
        )}
        {renderTable(
          "2. Processed & Metadata Tables",
          "For those who want pre-cleaned, structured data with planetary and stellar parameters.",
          processedDatasets
        )}

        {/* === Preprocess File Upload Section === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl p-6 border border-purple-200"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Submit Your Preprocess File
          </h2>

          <motion.label
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            htmlFor="preprocessFile"
            className="flex flex-col items-center justify-center border-2 border-dashed border-purple-400 rounded-xl p-10 cursor-pointer text-center transition-all duration-300 hover:border-pink-500 hover:bg-purple-50"
          >
            <svg
              className="w-10 h-10 mb-3 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 8v-4a2 2 0 00-2-2H7m0 0H5a2 2 0 00-2 2v4m6 4v-4a2 2 0 012-2h4a2 2 0 012 2v4"
              ></path>
            </svg>
            <span className="text-purple-700 font-medium">
              Drag & Drop your file here or click to select
            </span>
            <input
              type="file"
              id="preprocessFile"
              onChange={(e) => setPreprocessFile(e.target.files[0])}
              className="hidden"
            />
          </motion.label>

          {preprocessFile && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-green-600 font-medium text-center"
              >
                Here is your preprocess file: {preprocessFile.name}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-3"
              >
                <a
                  href={URL.createObjectURL(preprocessFile)}
                  download={preprocessFile.name}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-pink-500 transition-colors duration-300"
                >
                  Download Your Preprocess File
                </a>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* === Balancing The Dataset Section === */}
        {/* === Balancing The Dataset Section === */}
{/* === Balancing The Dataset Section === */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl p-6 border border-purple-200 mt-10"
>
  <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center relative">
    Balancing The Dataset
    <span className="block w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></span>
  </h2>

  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
  <img
  src="/image1.jpg"
  alt="Image 1"
  className="w-full md:w-1/2 h-[36rem] object-contain rounded-xl shadow-lg"
/>
<img
  src="/image3.jpg"
  alt="Image 2"
  className="w-full md:w-1/2 h-[36rem] object-contain rounded-xl shadow-lg"
/>


  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl p-6 border border-purple-200 mt-10"
>
  <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
    Machine Learning Predictions For Detecting Exoplanets
  </h2>

  {/* Subsection 1 */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-purple-600 mb-4 text-center">
      Machine Learning Predictions Result Without Dataset Balancing
    </h3>
    <div className="flex justify-center">
    <img
  src="/image2.jpg"
  alt="ML Predictions Without Dataset Balancing"
  className="w-full md:w-2/3 h-[32rem] object-contain rounded-xl shadow-lg"
/>

    </div>
  </div>

  {/* Subsection 2 */}
  <div>
    <h3 className="text-xl font-semibold text-purple-600 mb-4 text-center">
      Machine Learning Predictions Result With Dataset Balancing
    </h3>
    <div className="flex justify-center">
    <img
  src="/image5.jpg"
  alt="ML Predictions Without Dataset Balancing"
  className="w-full md:w-2/3 h-[32rem] object-contain rounded-xl shadow-lg"
/>
    </div>
  </div>
</motion.div>
{/* Section: Explainability (XAI) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-10 mt-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-purple-200 mx-4 md:mx-16"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center underline">
          Explainability (XAI)
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Understanding <span className="font-semibold text-purple-600">why</span> an AI makes a prediction is just as
          important as the prediction itself. Using <strong>SHAP (SHapley Additive Explanations)</strong> and 
          <strong> feature importance</strong>, scientists can explain which features (like radius, distance, 
          or star temperature) influenced the AI’s decision.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 text-gray-700">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-semibold text-purple-700">SHAP values:</span> Show how much each feature 
                pushes the prediction higher or lower.
              </li>
              <li>
                <span className="font-semibold text-purple-700">Feature importance:</span> Highlights which features 
                (e.g., planet radius, orbital distance) matter the most for habitability.
              </li>
              <li>
                Helps build <span className="font-semibold text-pink-600">trust</span> in AI predictions and 
                makes the process transparent for researchers.
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src="/image9.jpg"
              alt="Explainability Illustration"
              className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>


      </div>
    </div>
  );
}
