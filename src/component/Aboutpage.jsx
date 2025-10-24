import React from "react";
import bannerimg from "../assets/bannerimg.png"; // Adjust path as needed
import abimg from "../assets/abimg.png"


export default function AboutPage() {
  return (


<>

     <div
        className="w-full h-35 flex justify-center items-center font-extrabold text-4xl sm:text-6xl bg-center bg-cover text-white shadow-md"
        style={{
                backgroundImage: `url(${bannerimg})`,
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(59,130,246,0.75)", // Tailwind blue-500 with opacity
                }}
     >
        About
     </div>


    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-center gap-20">
        {/* Replace the src attribute with your own platform image or suitable hero image */}
        <img
          src={abimg}
          alt="Our team connecting talent and opportunity"
          className="w-full md:w-3/7 rounded-lg shadow-lg object-cover"
        />

        <div className="md:w-3/5">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            About Job_Portal 
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            [Your Job Portal Name] is dedicated to connecting job seekers and employers across India and beyond. Our platform puts people first, offering powerful tools to find jobs, post opportunities, and research top companies—all under one roof.
          </p>
          <p className="mb-4 text-gray-700">
            Powered by intelligent search and proprietary hiring data, we simplify and accelerate the recruitment process for both jobseekers and employers. Our goal is to create meaningful connections, enabling candidates to discover the right opportunities and helping organizations find their perfect hires with ease.
          </p>
          <ul className="mb-4 list-disc ml-6 text-gray-800">
            <li>
              <span className="font-semibold text-primary">50,000+</span> registered job seekers and growing
            </li>
            <li>
              <span className="font-semibold text-primary">2,000+</span> verified employers hire through our portal
            </li>
            <li>
              <span className="font-semibold text-primary">Fast matching:</span> thousands of job matches made every day
            </li>
          </ul>
          <p className="text-gray-700">
            Our mission is to empower every professional journey. Whether you’re seeking your next role or building your team, [Your Job Portal Name] is the place where connections happen and careers are made.
          </p>
        </div>
      </div>
    </div>
</>
  );
}
