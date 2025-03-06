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
      { name: "Valve", image: ""},
      { name: "Open Well Bracket", image: owb },
      { name: "Open Well Motor Body", image: owmb },
      { name: "Motor Base", image: motorbase },
      { name: "Motor Body", image: mb },
      { name: "NRV", image: "" }, // No image available
      { name: "Suction", image: "" }, // No image available
      { name: "Open Well Base", image: owbase },
      { name: "End Shield Casting", image: ""},
      { name: "Column Pipe Adapter", image: cpa},
      { name: "Connection Piece", image: connection},
      { name: "Volute Casting", image: ""}
    ],
  },
  {
    title: "Automative Casting",
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
  <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <p className="m-2 text-[1.1rem] text-[#333] font-bold">{name}</p>
    <img
      className="w-full h-[150px] object-contain m-2"
      src={image || placeholder} // Use placeholder if no image available
      alt={name}
    />
  </div>
);
export default function Profile() {
    return (
      <div className="overflow-x-hidden w-full">
        {/* Header Section */}
        <section className="main text-[#333] p-5 text-center flex justify-center items-center flex-col">
          <p className="text-lg sm:text-[1.3rem] text-[#666] max-w-[90%] sm:max-w-[80%] mx-auto">
            The Company is engaged in producing a wide range of product profiles.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-2.5">Product Profile</h2>
        </section>
  
        {/* Product Section */}
        <section className="prod p-5 max-w-[1200px] mx-auto w-full">
          {categories.map((category, index) => (
            <div key={index} className="category mb-10 text-center">
              <h3 className="text-[1.5rem] sm:text-[1.8rem] text-[#ed3237] mb-5">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 justify-items-center mx-auto">
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
  