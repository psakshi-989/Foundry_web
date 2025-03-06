import React from "react";
import sqri from "../assets/bg_images/Square Foundry related image.png";
import warehouse from "../assets/bg_images/warehouse.jpg";
import eco from "../assets/bg_images/economic.jpg";
import bg from "../assets/bg_images/casting-1417198_1920.jpg";
import pgvcl from "../assets/bg_images/pgvcl-logo.png";
import dgvcl from "../assets/bg_images/dgvcl-logo.png";
import ugvcl from "../assets/bg_images/ugvcl-logo.png";
import falcon from "../assets/bg_images/falcon-logo.png";
import bhel from "../assets/bg_images/logo_bhel.png";
import cg from "../assets/bg_images/logo_cg.png";
import algo from "../assets/bg_images/logo-algo.jpg";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center px-4 md:px-10 lg:px-20">
      <section className="max-w-5xl text-center my-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Square Foundry</h2>
        <p className="text-lg text-gray-700">
          Welcome to Square Foundry, an ISO certified foundry, established in 2014. Square Foundry stands high as one of the most recognized manufacturers and suppliers in India. It is supported by highly qualified and experienced engineering staff and a very efficient team of skilled workers. We at Square Foundry strive to combine modern technology with traditional skill together with stringent quality control measures.
        </p>
      </section>

      <div className="grid md:grid-rows-3 gap-4 max-w-5xl">
        {[
          {
            img: sqri,
            title: "Square Foundry Overview",
            text: "The Square Foundry is headquartered in Rajkot, Gujarat, India. Over the course of 15 years, Square Foundry has been owned and operated efficiently, which has built a formidable reputation for manufacturing quality products for the Municipal, Construction, Automotive, Agricultural, Alternative Energy, and Water Management Industries for the past 15 years."
          },
          {
            img: warehouse,
            title: "Product Line & Facilities",
            text: "Square Foundry's network of manufacturing facilities produces tons of quality products every year for shipment to the various markets they serve. This includes the Square Foundry's own product line of all types of Sanitary castings, industrial casting like flanges and counterweights, Pump and Valve castings, Disk brake, Brake drum, Impellers, Sleeves, Pulleys, etc. We also produce products according to the customer's specifications."
          },
          {
            img: eco,
            title: "Quality & Market Expertise",
            text: "Square Foundry understands that the market it supplies is highly competitive and quality-driven. Square Foundry's years of experience in high-standard manufacturing enables it to provide quality products, at a volume production level that translates to economical solutions for you and your company."
          }
        ].map((card, index) => (
          <div 
            key={index} 
            className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center border border-gray-200 transition-transform duration-300 transform hover:scale-105 w-full`}
    >

      <img 
        src={card.img} 
        alt={card.title} 
        className={`w-full h-40 md:w-1/2 h-[250px] object-cover ${index % 2 === 0 ? 'md:order-1' : ''} px-4 rounded-lg`}
      />
      <div className="p-6 md:w-1/2">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
        <div className="w-16 h-1 bg-red-500 mb-4"></div>
        <p className="text-gray-600">{card.text}</p>
      </div>
    </div>
        ))}
      </div>

      <div
        className="w-screen h-screen bg-fixed bg-cover bg-center mt-10 flex flex-col items-center justify-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6">Our Clients</h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 relative z-10">
          {[pgvcl, ugvcl, dgvcl, falcon, bhel, cg, algo].map((logo, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-5 rounded-lg shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <img src={logo} alt={`Client logo ${index + 1}`} className="h-10 sm:h-12 md:h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}