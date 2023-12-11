import React from "react";
import mainImage from "../assets/about_us_pic.jpg"; // Import your main image

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="p-6 text-black text-center">
        <h1 className="text-3xl font-semibold">About Us</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8 ">
        {/* Main Image */}
        <div className="text-center mb-8 flex justify-center items-center">
          <img
            src={mainImage}
            alt="Main Image"
            className="rounded-lg shadow-lg w-2/5 flex "
          />
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 pb-5">
            Welcome to AutoSpot, your trusted source for all things related to
            vehicle service centers and automotive solutions.
          </p>
          Welcome to <span className="font-bold">AutoSpot</span> , your trusted
          source for all things related to vehicle service centers and
          automotive solutions. <br /> At{" "}
          <span className="font-bold">AutoSpot</span>, we are passionate about
          helping you find the nearest and most reliable vehicle service
          centers, ensuring that your automotive needs are met with ease and
          convenience. Our mission is to simplify the process of locating
          service centers, checking queue information, and accessing valuable
          insights to enhance your vehicle maintenance experience. <br />
          <div className="text-xl font-semibold py-3">Our Vision</div>
          Our vision is to create a seamless bridge between vehicle owners and
          service centers, making it effortless for you to keep your vehicles in
          optimal condition. We strive to be your go-to platform for real-time
          updates on queue status, service offerings, and additional information
          to aid you in making informed decisions about your vehicle's care.{" "}
          <br />
          <div className="text-xl font-semibold py-3"> Why Choose Us? </div>
          <ul className="list-disc pl-4">
            <li>
              Comprehensive Database: We maintain an extensive database of
              service centers, ensuring that you have access to a wide range of
              options no matter where you are.
            </li>
            <li>
              Real-Time Updates: Our platform provides real-time updates on
              queue information, allowing you to choose the most convenient
              service center for your needs.
            </li>
            <li>
              User-Friendly Interface: We have designed our website to be
              user-friendly and intuitive, ensuring a seamless experience for
              all users.
            </li>
            <li>
              Reliable Information: Our commitment to accuracy means you can
              trust the information you find on our platform.
            </li>
            <li>
              Dedicated Support: Our team is here to assist you in any way we
              can. If you have questions or need assistance, please don't
              hesitate to reach out to us.
            </li>
          </ul>
          <div className="pb-3"></div>
          Thank you for choosing  <span className="font-bold">AutoSpot</span> as your trusted resource
          for vehicle service center information. We look forward to serving you
          and helping you maintain your vehicles with ease and confidence. Feel
          free to customize and expand upon this description to reflect the
          unique value proposition and goals of your website.
        </div>
      </main>
    </div>
  );
}
