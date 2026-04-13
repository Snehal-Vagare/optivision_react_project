import React, { useRef } from "react";
import Hero from "./Hero";
import Products from "./Products";

function Home() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <Hero scrollToProducts={scrollToProducts} />

      {/* Products Section */}
      <div ref={productsRef}>
        <Products />
      </div>
    </>
  );
}

export default Home;