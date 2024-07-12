import React from "react";
import SearchBar from "./searchBar/SearchBar";
const Hero = () => {
  return (
    <div className="flex m-14 flex-row justify-around items-center">
      <div className="w-[555px] h-[288px] mr-8">
        {/* <h1 className="h-[176px]  text-[64.85px] font-bold ">Modern living for everyone</h1>
         */}
        <h1>
          <img src="/public/text.png" alt="" />
        </h1>
        <p className="text-[21.25px]">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Pkistan .
        </p>
        <div className="mt-5">
          <SearchBar />
        </div>
      </div>

      <div className="relative ">
        <img
          src="/public/dots.png"
          className="absolute  object-cover z-0 top-0 left-20 "
        />
        <img src="/public/home.png" className="relative z-1 ml-2" />
      </div>
    </div>
  );
};

export default Hero;
