import React from "react";

// Import your images for each blog article
import blogImage1 from "../assets/blog-1.jpg";
import blogImage2 from "../assets/blog-2.jpg";
import blogImage3 from "../assets/blog-3.jpg";

const BlogPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Blog</h1>

      {/* Blog Article 1 */}
      <div className="mb-8">
        <img
          src={blogImage1}
          alt="Blog Article 1"
          className="rounded-lg shadow-lg mb-4 w-2/5"
        />
        <h2 className="text-xl font-semibold mb-2">
          The Importance of Regular Vehicle Maintenance
        </h2>
        <p className="text-gray-700 w-3/5">
          Regular vehicle maintenance is crucial for the longevity and
          performance of your car. Neglecting maintenance can lead to costly
          repairs and safety issues down the road. Here are some key reasons why
          you should prioritize regular maintenance: <br /> <br />
          Proactive Problem Detection: Routine maintenance allows mechanics to
          identify and address issues before they escalate. This proactive
          approach can save you from major breakdowns and expensive repairs.{" "}
          <br />
          <br />
          Optimal Performance: Well-maintained vehicles run more efficiently and
          achieve better fuel economy. Regular oil changes, air filter
          replacements, and tire rotations contribute to a smoother and safer
          ride. <br /> <br />
          Safety First: Maintenance checks encompass critical safety components,
          such as brakes, tires, and lights. Ensuring these systems are in top
          condition is essential for your safety and the safety of others on the
          road. <br /> <br />
          Resale Value: When it's time to sell your vehicle, a well-documented
          maintenance history can significantly increase its resale value.
          Prospective buyers appreciate a well-cared-for car. <br /> <br />
          In conclusion, regular vehicle maintenance is an investment in the
          reliability, safety, and longevity of your vehicle. Don't wait for
          problems to arise; schedule routine maintenance to keep your car in
          peak condition. <br />
        </p>
      </div>

      {/* Blog Article 2 */}
      <div className="mb-8">
        <img
          src={blogImage2}
          alt="Blog Article 2"
          className="rounded-lg shadow-lg mb-4 w-2/5"
        />
        <h2 className="text-xl font-semibold mb-2">
          Tips for Finding the Right Service Center
        </h2>
        <p className="text-gray-700 w-3/5">
          Choosing the right service center for your vehicle is essential to
          ensure quality repairs and a positive experience. Here are some tips
          to help you find the perfect service center: Research and Reviews:
          Start by researching local service centers online. Read customer
          reviews and testimonials to gauge the quality of their work and
          customer service. <br /> <br />
          Certifications and Expertise: Look for service centers with certified
          technicians and expertise in your vehicle's make and model.
          Specialized knowledge ensures accurate diagnoses and repairs. <br />{" "}
          <br />
          Recommendations: Ask friends, family, and coworkers for
          recommendations. Personal referrals often lead to trustworthy service
          centers.
          <br /> <br />
          Pricing Transparency: A reputable service center should provide clear
          and transparent pricing. Avoid those that give vague estimates or
          hidden charges.
          <br /> <br />
          Warranty: Inquire about warranties on parts and labor. A service
          center that stands behind its work is likely to be reliable.
          <br /> <br />
          Facilities and Equipment: Visit the service center in person to assess
          their facilities and equipment. A clean and organized workspace is a
          good sign of professionalism.
          <br /> <br />
          Convenience: Consider the location and operating hours. A nearby
          service center with flexible hours can save you time and hassle.
          <br /> <br />
          By following these tips, you can make an informed decision and find a
          service center that meets your needs and ensures your vehicle receives
          top-notch care.
        </p>
      </div>

      {/* Blog Article 3 */}
      <div>
        <img
          src={blogImage3}
          alt="Blog Article 3"
          className="rounded-lg shadow-lg mb-4 w-2/5"
        />
        <h2 className="text-xl font-semibold mb-2">
          Understanding Your Vehicle's Warning Lights
        </h2>
        <p className="text-gray-700 w-3/5">
          Modern vehicles are equipped with various warning lights on the
          dashboard to alert drivers to potential issues. Understanding these
          warning lights can help you take prompt action and prevent further
          damage. Here are some common warning lights and their meanings: <br />{" "}
          <br />
          Check Engine Light: This light indicates a problem with the engine or
          emissions system. It could range from a loose gas cap to a more
          serious issue, so it's essential to have it checked. <br /> <br />
          Brake System Warning Light: This light suggests an issue with the
          braking system, such as low brake fluid or worn brake pads. Addressing
          brake problems promptly is crucial for safety. <br /> <br />
          Oil Pressure Light: When this light comes on, it indicates low oil
          pressure, which can lead to engine damage if not addressed. Stop your
          vehicle immediately and check the oil level. <br /> <br />
          Battery Warning Light: A lit battery light could mean a failing
          battery, a faulty alternator, or electrical system issues. Ignoring it
          may result in a breakdown. <br /> <br />
          Tire Pressure Monitoring System (TPMS) Light: The TPMS light warns of
          low tire pressure, which can impact safety and fuel efficiency. Check
          and inflate your tires as needed. <br /> <br />
          Airbag Warning Light: This light signals a problem with the airbag
          system. Promptly addressing it is essential for passenger safety.{" "}
          <br /> <br />
          ABS Warning Light: The ABS light indicates a problem with the
          anti-lock braking system. Loss of ABS functionality may affect your
          ability to control the vehicle during hard braking. <br /> <br />
          In conclusion, paying attention to warning lights and addressing
          issues promptly can prevent more extensive and costly repairs in the
          long run. Familiarize yourself with your vehicle's dashboard lights to
          ensure safe and reliable driving. <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
