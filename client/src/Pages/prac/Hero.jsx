import React from "react";
import Shapes from "./Shapesvg";
import ShapeThree from "./Shaptreesvg";
const Hero = () => {
  return (
    <header className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <Shapes />
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 text-center lg:text-start">
            <div className="relative mb-4 pb-6">
              <div className="absolute -top-[50vw] -right-[100vw] bottom-0 h-1/2 bg-center bg-repeat opacity-[.04] -z-10" />
              <p className=" tracking-[0.15em] font-medium mt-6 inline-block text-colour-1">
                REAL ESTATE
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-wide lg:text-7xl mb-2">
                Find a perfect home you love..!
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-[17px] leading-relaxed opacity-80 mb-12">
                An activity that requires a person's mental or physical effort
                is work.If a person is trained for a certain type of job, they
                may have a job or profession which suits.
              </p>
            </div>
            <button className="py-3 px-8 font-medium text-white bg-blue-600 hover:bg-opacity-90 rounded-full">
              Check Properties
            </button>
          </div>
          <div className="col-span-12 lg:col-span-5 relative text-center">
            <div className=" absolute top-0 z-2 left-24 right-0 bottom-0 h-full max-w-[390px] rounded-[390px]  lg:-left-12" />
            <ShapeThree />

            <div>
              <img
                src="https://assets.materialup.com/uploads/e73bc3ba-12d9-4d76-9214-37b9a068287a/preview.gif"
                alt=""
                className="max-w-full h-auto bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
