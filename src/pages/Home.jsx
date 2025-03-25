import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Capability from "../components/Capability";
import Form from "../components/Form";
import Whyus from "../components/Whyus";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Vision />
      
        {/* Brochure Section */}
        <div className="mt-8 mb-8 text-center">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
            Download Our Brochure
          </h2>

          <a
            href="/current-brochure.pdf" // path to your PDF in the public folder
            download="Square-Foundry-Brochure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Square Foundry Brochure
          </a>
        </div>
      <Whyus />
      <Capability />
      <Form />
    </div>
  );
}