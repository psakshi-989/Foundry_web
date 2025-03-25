import React from "react";
import HeroImage from "../assets/hero-image.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-2 md:px-4 text-center flex w-full h-screen flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-red-500/20 to-black/60 animate-gradientOpacity"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-xl"
        >
          Quality at its best
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-red-400 font-semibold mb-6"
        >
          AN ISO 9001:2015 CERTIFIED COMPANY
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="leading-relaxed text-lg text-zinc-100"
        >
          We are <b>CI and SGI casting supplier</b> based in Rajkot, the metal
          hub of <em>Gujarat</em>. We have strong core knowledge and experience
          in foundry and machining. With a highly optimized process and
          machining setup, we achieve efficient production with reduced costs.
          <br />
          <b>
            <em>“Quality at its best”</em>
          </b>{" "}
          has been our emphasis since inception. With our designing,
          manufacturing, and quality assurance processes, we are ready to serve
          your industry at the highest possible level.
        </motion.p>
      </div>
    </section>
  );
}
