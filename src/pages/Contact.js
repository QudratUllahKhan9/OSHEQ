import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";

export default function Contact() {
  return (
    <div>
      <Header />
      <main>
        <ContactSection/>
      </main>
      <Footer />
    </div>
  );
}
