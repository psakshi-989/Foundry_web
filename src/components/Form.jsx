import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_bqs7bss",
        "template_pwcbsa7",
        form.current,
        "ooKD97zWoZv5mUsLA"
    )
    .then(
      () => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-gray-200 text-gray-900 p-8 rounded-2xl shadow-lg border border-gray-400">
        <h2 className="text-2xl font-semibold text-red-400 mb-6">
          Enquire by Sending a Message
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
            >
              SEND
            </button>
            <button
              type="reset"
              className="px-6 py-3 bg-gray-400 text-gray-900 rounded-lg font-semibold hover:bg-gray-500 transition"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
