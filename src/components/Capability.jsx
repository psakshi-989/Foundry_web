import React from "react";
import { PackageSearch, Shapes, ShieldCheck } from "lucide-react";

export default function Capability() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="text-5xl text-red-500 font-bold text-center mb-12">
        Foundry Capability
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Raw Material & Material */}{" "}
        <div
          className="cursor-pointer border border-gray-300 backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg w-full md:w-1/3 text-center 
            transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500 hover:bg-white/20 duration-300"
        >
          <PackageSearch className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Raw Material & Material
          </h2>
          <p className="text-lg">
            We cast all standards of <b>ferrous and non-ferrous metals</b>.
            Using <b>solidification casting methods</b>, we ensure{" "}
            <b>superior mechanical properties</b>.
          </p>
        </div>
        {/* Casting Range */}
        <div
          className="cursor-pointer border border-gray-300 backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg w-full md:w-1/3 text-center 
            transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500 hover:bg-white/20 duration-300"
        >
          <Shapes className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Casting Range
          </h2>
          <p className="text-lg">
            Our products include{" "}
            <b>
              Sanitary casting, Pumps & Valves, Impellers, Pulleys, Sleeves,
              Industrial casting, Disk brakes, Drum brakes
            </b>
            , etc.
            <br />
            Customization is available.
          </p>
        </div>
        {/* Values */}
        <div
          className="cursor-pointer border border-gray-300 backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg w-full md:w-1/3 text-center 
            transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500 hover:bg-white/20 duration-300"
        >
          <ShieldCheck className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Our Values
          </h2>
          <ul className="text-lg space-y-2">
            <li>
              ✔ Achieved <b>ISO 9001:2015</b> certification.
            </li>
            <li>
              ✔ Ensuring <b>top-notch product quality</b>.
            </li>
            <li>
              ✔ Upholding <b>fair and honest work ethics</b>.
            </li>
            <li>
              ✔ Meeting <b>realistic & flexible deadlines</b>.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
