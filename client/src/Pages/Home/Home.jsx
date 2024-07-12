import React from "react";
import Hero from "./Hero";
import Team from "./TeamSection";
import ExploreCities from "./ExploreCities";
import Footer from "./Footer";
import Agent from "./Agent";
import Loader from "./Loader";
import { useState, useEffect } from "react";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust the time as needed

    // Clear timeout on component unmount
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div>
      {/* <Component1/> */}

      <Hero />
   

      <Team />
      <ExploreCities />
      <Agent />
      <Footer />
    </div>
  );
};

export default Home;
