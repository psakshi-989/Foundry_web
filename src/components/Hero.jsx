import HeroImage from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-20 px-2 md:px-4 text-center flex w-full h-screen flex-col items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>{" "}
      <div className="relative  max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
          Quality at its best
        </h1>
        <p className="text-lg text-red-400 font-semibold mb-6">
          AN ISO 9001:2015 CERTIFIED COMPANY
        </p>
        <p className="leading-relaxed text-lg">
          We are <b>CI and SGI casting supplier</b> based in Rajkot, the metal
          hub of <em>Gujarat</em>. We have strong core knowledge and experience
          in foundry and machining. With a highly optimized process and
          machining setup, we achieve efficient production with reduced costs.{" "}
          <br />
          <b>
            <em>“Quality at its best”</em>
          </b>{" "}
          has been our emphasis since inception. With our designing,
          manufacturing, and quality assurance processes, we are ready to serve
          your industry at the highest possible level.
          {/* We are <b>leading manufacturer of high-performance submersible pumps</b>, committed to delivering reliability and efficiency. Based in Rajkot, Gujarat, we bring decades of expertise in designing and manufacturing top-quality pumping solutions.{" "}

          With a strong focus on innovation and precision engineering, we ensure optimal performance and durability in every product. Our streamlined manufacturing processes and stringent quality control measures allow us to offer cost-effective yet superior solutions.{" "}

          <b><em>Performance You Can Trust</em></b> has been our guiding principle since inception. With advanced technology, rigorous testing, and a customer-centric approach, we are dedicated to powering industries with unmatched efficiency and reliability.{" "} */}
        </p>
      </div>
    </section>
  );
}