import React from "react";
import carImg from "../../assets/maincar.png";

export default function Main() {
  return (
    <div className="bg-main-color">
      <div className="flex flex-row lg:flex-row md:flex-row items-center justify-evenly sm:flex-col xs:flex-col h-70vh">
        <div className="text-white">
          <p className="text-base text-sec-color">Car Detailing</p>
          <h1 className="text-6xl font-bold py-8 lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl">
            Effective and <br /> powerfull
          </h1>
          <p className="pb-8 font-semibold">
            Tips, tricks and all of the stuff you should know <br /> about Be
            Theme
          </p>
          <div>
            <button className="rounded-full bg-sec-color text-base font-medium py-1 px-4 text-gray-900">
              Appointemnt
            </button>
          </div>
        </div>
        <div>
          <img src={carImg} alt="Car Image" className="w-42rem h-auto lg:w-42rem md:w-30rem sm:w-96 xs:w-80" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 text-white font-semibold xs:flex-wrap">
        <div className="flex flex-col justify-center items-center bg-green-700 text-base px-8 py-9  md:text-sm xs:text-xs">
          <span>Los Angeles</span>
          <span>25 Service Centers</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-700 text-base px-8 py-9 md:text-sm xs:text-xs">
          <span>New York</span>
          <span>37 Service Centers</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-700 text-base px-8 py-9 md:text-sm xs:text-xs">
          <span>Chicago</span>
          <span>20 Service Centers</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-700 text-base px-8 py-9 md:text-sm xs:text-xs">
          <span>Las Vegas</span>
          <span>33 Service Centers</span>
        </div>
      </div>
    </div>
  );
}