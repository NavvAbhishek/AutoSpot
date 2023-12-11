import React from "react";
import { GiCarSeat } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";
import { FaHandsWash } from "react-icons/fa";

export default function Services() {
  return (
    <div className="max-w-full pt-20">
      <p className="text-5xl xs:text-4xl font-bold flex justify-center pb-20">Our Services</p>
      <div className="boxes flex flex-wrap justify-center items-center gap-10">
        <div className="bg-green-200 flex flex-col justify-center items-center px-4 py-12 gap-2">
          <div className="text-2xl font-bold">
            <GiCarSeat />
          </div>
          <p className="text-2xl font-bold">Interior services</p>
          <p className="text-sm">Best interior for your car we <br /> clean every particle of dust even</p>
        </div>
        <div className="bg-green-200 flex flex-col justify-center items-center px-4 py-12 gap-2">
          <div className="text-2xl font-bold">
            <AiFillCar />
          </div>
          <p className="text-2xl font-bold">Exterior Service</p>
          <p className="text-sm">Best interior for your car we <br /> clean every particle of dust even</p>
        </div>
        <div className="bg-green-200 flex flex-col justify-center items-center px-4 py-12 gap-2">
          <div className="text-2xl font-bold">
            <MdLocalCarWash />
          </div>
          <p className="text-2xl font-bold">Wax Polishing</p>
          <p className="text-sm">Best interior for your car we <br /> clean every particle of dust even</p>
        </div>
        <div className="bg-green-200 flex flex-col justify-center items-center px-4 py-12 gap-2">
          <div className="text-2xl font-bold">
            <FaHandsWash />
          </div>
          <p className="text-2xl font-bold">Compound Polish</p>
          <p className="text-sm">Best interior for your car we <br /> clean every particle of dust even</p>
        </div>
      </div>
    </div>
  );
}
