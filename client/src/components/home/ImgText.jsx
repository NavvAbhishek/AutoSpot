import React from "react";
import ImgTextImg from "../../assets/ImgTextImg.jpg";

export default function ImgText() {
  return (
      <div className="flex flex-wrap justify-center items-center gap-12 max-w-full mt-24 py-12 xs:px-8 bg-gray-50">
        <div>
          <img src={ImgTextImg} alt="" className="w-30rem h-auto xs:w-96" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-4xl font-bold xs:text-3xl">Know Our Washing Service</p>
          <p className="text-sm py-8 xs:text-xs">
            Before we formed MuffinGroup. our -gang of four" worked for an
            interactive agency, <br />
            which is where we first met. Like Others having an entrepreneurial
            spirit. we took <br /> stock Of ourselves, and decided to strike out
            on our own, as a design and <br /> development team.
            <br />
            <br />
            We started by creating a WordPress theme called Doover. It was
            rejected, but we <br /> stuck with it. and it was eventually
            approved. With that successful venture under our
          </p>
          <button className="rounded-full bg-sec-color text-base font-medium py-1 px-4 text-gray-900">
              Appointemnt
            </button>
        </div>
      </div>
  );
}
