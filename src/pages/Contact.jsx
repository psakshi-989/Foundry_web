import React from "react";
import Form from "../components/Form";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We would love to hear from you! Reach out via the form below or connect with us directly.
        </p>
      </section>

      {/* Contact Info + Map */}
      <section className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-16 px-6 py-12 bg-white">
        
        {/* Contact Details */}
        <div className="flex-1 md:max-w-lg bg-gray-50 rounded-lg shadow-lg shadow-red-400/50">
          <div className="flex flex-col justify-center h-full p-6">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-red-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                    Survey No : 275/P-27, Plot No - 4, 
                    <br />Hadamtala Industrial Area, 
                    <br />Rajkot, Gujarat - 360024, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Phone className="text-red-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 9924870978</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">squarefoundry@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="flex-1 md:max-w-xl h-72 md:h-96 shadow-md border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            title="Square Foundry Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.515113347327!2d70.78720207523962!3d22.067583280540036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA0JzAzLjMiTiA3MMKwNDcnMjMuMiJF!5e0!3m2!1sen!2sin!4v1710666133123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <Form />
    </div>
  );
}
