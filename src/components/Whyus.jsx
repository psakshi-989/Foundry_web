import React from "react";
import { Award, Clock, Globe, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Whyus() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-red-500 font-semibold bg-red-100 px-3 py-1 rounded-full mb-4">
            Why Us
          </span>
          <h2 className="text-4xl font-extrabold text-zinc-800 mb-4">
            What Makes Us Stand Out?
          </h2>
          <p className="text-zinc-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Discover why industries trust <span className="font-semibold">Square Foundry</span> for precision, performance, and partnership.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              Icon: Award,
              title: "Uncompromised Quality",
              desc: "Each casting undergoes rigorous quality control, exceeding global benchmarks for durability and precision."
            },
            {
              Icon: Clock,
              title: "Timely Delivery",
              desc: "Punctuality is our promise. We streamline production to ensure your projects stay on schedule."
            },
            {
              Icon: Globe,
              title: "Aiming Global",
              desc: "We aspire to become your trusted global sourcing partner, delivering innovative casting solutions."
            },
            {
              Icon: Settings,
              title: "Custom Engineered Solutions",
              desc: "Our team works closely with you to develop castings that meet your unique specifications and application needs."
            }
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative bg-white group p-8 rounded-3xl shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-[0_8px_30px_rgba(255,0,0,0.3)]"
            >
              <Icon
                className="w-14 h-14 text-red-500 mx-auto mb-6 transition-transform duration-300"
                aria-hidden="true" // Accessibility fix for decorative icons
              />
              <h3 className="text-xl font-semibold text-center text-zinc-800 mb-3">
                {title}
              </h3>
              <p className="text-zinc-700 text-center leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}