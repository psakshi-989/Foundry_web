import React from "react";
import manhole from "../assets/products/manhole-cover.png";
import grate from "../assets/products/grate.png";
import surbox from "../assets/products/surface-box.png";
import metbox from "../assets/products/meter-box.png";
import tecplate from "../assets/products/tactile.png";
import flange from "../assets/products/flange.png";
import counweight from "../assets/products/counter-weight.png";
import uh from "../assets/products/upper-housing.png";
import lh from "../assets/products/lower-housing.png";
import owb from "../assets/products/open-well-bracket.png";
import owmb from "../assets/products/open-well-motor-body.png";
import motorbase from "../assets/products/motor-base.png";
import owbase from "../assets/products/open-well-base.png";
import mb from "../assets/products/motor-body.png";
import cpa from "../assets/products/column-pipe-adapter.png";
import connection from "../assets/products/connection.png";
import diskbrake from "../assets/products/disk-brake.png";
import brakedrum from "../assets/products/brake-drum.png";
import impeller from "../assets/products/impeller.png";
import sleeve from "../assets/products/sleeves.png";
import pulley from "../assets/products/pulley.png";
import valve from "../assets/products/valve.png";
import volute from "../assets/products/volute-casing.png";
import nrv from "../assets/products/nrv.png";
import es from "../assets/products/end-shield.png";
import suction from "../assets/products/suction.png";
const placeholder = "https://via.placeholder.com/150";

// Product categories with their respective items
const categories = [
  {
    title: "Sanitary Casting",
    products: [
      { name: "Manhole Covers", image: manhole },
      { name: "Grates", image: grate },
      { name: "Surface Boxes", image: surbox },
      { name: "Meter Boxes", image: metbox },
      { name: "Tactile Plate", image: tecplate },
    ],
  },
  {
    title: "Industrial Casting",
    products: [
      { name: "Flanges", image: flange },
      { name: "Counterweights", image: counweight },
    ],
  },
  {
    title: "Pump and Valve Casting",
    products: [
      { name: "Motor Upper Housing", image: uh },
      { name: "Motor Lower Housing", image: lh },
      { name: "Valve", image: valve},
      { name: "Open Well Bracket", image: owb },
      { name: "Open Well Motor Body", image: owmb },
      { name: "Motor Base", image: motorbase },
      { name: "Motor Body", image: mb },
      { name: "NRV", image: nrv },
      { name: "Suction", image: suction },
      { name: "Open Well Base", image: owbase },
      { name: "End Shield Casting", image: es},
      { name: "Column Pipe Adapter", image: cpa},
      { name: "Connection Piece", image: connection},
      { name: "Volute Casing", image: volute}
    ],
  },
  {
    title: "Automotive Casting",
    products: [
        { name: "Disk Brake", image: diskbrake},
        { name: "Brake Drum", image: brakedrum}
    ],
  },
  {
    title: "Other Castings",
    products: [
        { name: "Impeller", image: impeller},
        { name:"Sleeves", image: sleeve},
        { name: "Pulley", image: pulley}
    ]
  }
];

// Product Card Component
const ProductCard = ({ name, image }) => (
  <div className="w-full sm:w-[300px] h-auto p-4 border border-gray-300 rounded-lg bg-gray-100 text-center 
              transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col items-center">
    <p className="text-lg font-semibold text-gray-800">{name}</p>
    <img
      className="w-32 h-32 object-contain mb-3"
      src={image || placeholder} // Use placeholder if no image available
      alt={name}
      loading="lazy"
    />
  </div>
);

export default function Profile() {
    return (
      <div className="overflow-x-hidden w-full">
        {/* Header Section */}
        <section className="text-gray-800 p-6 text-center flex flex-col items-center">
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            The Company is engaged in producing a wide range of product profiles.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mt-2">Product Profile</h2>
        </section>
  
        {/* Product Section */}
        <section className="p-6 max-w-6xl mx-auto w-full">
          {categories.map((category, index) => (
            <div key={index} className="mb-12 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
                {category.products.map((product, idx) => (
                  <ProductCard key={idx} name={product.name} image={product.image} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
}
