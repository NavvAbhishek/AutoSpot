import React from "react";
import Featured1 from "../../assets/featured1.jpg";

export default function Featured() {
  return (
    <div className="max-w-full pt-16">
      <div className="flex justify-center text-3xl font-bold pb-12">Our Featured</div>
      <div className=" flex flex-wrap justify-center items-center gap-10">
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">Seasonal Promotions</p>
          <p className="text-sm">
          Summer A/C Tune-Up Discount <br />
          Contrary to popular belief, <br />
          Lorem Ipsum is not simply random
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">Service Packages</p>
          <p className="text-sm">
          Basic maintenance. <br />
          Comprehensive tune-ups. <br />
          Premium detailing. <br />
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">Emergency Services</p>
          <p className="text-sm">
          Emergency services roadside assistance <br />
           and 24/7 helplines.Contrary to popular <br />
           belief, Lorem Ipsum is not simply 
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">Membership Programs</p>
          <p className="text-sm">
          You can get discounts, exclusive <br />
          offers, and rewards if you have <br />
          a membership program.
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
