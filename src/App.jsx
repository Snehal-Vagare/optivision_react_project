import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Appointment from "./components/Appointment";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Refs for scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const appointmentRef = useRef(null);
  const testimonialsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (section) => {
    switch (section.toLowerCase()) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "products":
        productsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "appointment":
        appointmentRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonials":
        testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "gallery":
        galleryRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        alert("Section not found 😅");
    }
  };

  return (
    <>
      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Sections */}
      <div ref={homeRef}>
        <Hero scrollToProducts={() => productsRef.current.scrollIntoView({ behavior: "smooth" })} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={productsRef}>
        <Products />
      </div>

      <div ref={appointmentRef}>
        <Appointment />
      </div>

      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      <div ref={galleryRef}>
        <Gallery />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;