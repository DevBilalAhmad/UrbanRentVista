import React from "react";
import Shapes from "./Shapesvg";
import ShapeThree from "./Shaptreesvg";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
const Hero = () => {

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 ">
      <div className="p-10 self-center sm:pl-40	">
        <p className="tracking-[0.15em] font-medium mt-6 inline-block text-colour-1 mb-2">
          REAL ESTATE
        </p>
        <h2 className="text-3xl font-bold leading-tight tracking-wide mb-2">
          Find a perfect home you love..!
        </h2>
        <div className="max-w-3xl">
          <p className="z-[-1] text-[17px] leading-relaxed opacity-80 mb-12">
            An activity that requires a person's mental or physical effort is
            work. If a person is trained for a certain type of job, they may have
            a job or profession which suits.
          </p>
        </div>

        <Link to="/properties">
          <button className="py-3 px-8 font-medium text-white bg-blue-600 hover:bg-opacity-90 rounded-full">
            Check Properties
          </button>
        </Link>
      </div>
      <div className="p-0 flex">
        <SearchBar/>
        {/* <img
          src="https://assets.materialup.com/uploads/e73bc3ba-12d9-4d76-9214-37b9a068287a/preview.gif"
          alt=""
          className="max-w-full h-auto"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
