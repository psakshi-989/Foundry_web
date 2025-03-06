import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Capability from "../components/Capability";
import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Hero />
      <Vision />
      <Capability />
      <Form />
    </div>
  );
}