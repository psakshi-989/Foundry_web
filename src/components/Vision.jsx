import React from "react";
export default function Vision() {
  return (
    <section className="max-w-4xl mx-auto text-center py-12 px-6">
      {/* Heading */}
      <h1 className="text-5xl text-red-500 font-bold mb-4">Our Vision</h1>
      <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div> {/* Underline Effect */}

      {/* Vision Statement */}
      <p className="text-lg text-gray-700 leading-relaxed">
        At <span className="text-red-600 font-semibold">Square Foundry</span>, we envision becoming  
        the <i>global sourcing partner of choice</i> for premium cast iron and  
        ductile iron products. By blending <i>cutting-edge technology</i> with  
        traditional craftsmanship, we ensure castings that meet and exceed  
        national and international standards.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mt-6">
        With <i>precision, reliability, and innovation</i> at our core, we adapt  
        to evolving market needs while maintaining an unwavering commitment to  
        <span className="font-semibold"> on-time delivery</span> and <span className="font-semibold">customer satisfaction</span>.  
        Through a culture of excellence, we strive to build  
        <i> long-term global partnerships</i>, ensuring that quality isn’t just  
        a standard—it’s our habit.
      </p>
    </section>
  );
}
