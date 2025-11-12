import React from "react";
import bannerimg from "../assets/bannerimg.png"; // Adjust path if needed
import Jobrecommendation from "../component/Jobrecommendation";
// import Footer from "./Footer";


const popularJobs = [
  "Full stack developer",
  "Accountant",
  "Project Manager",
  "Data Entry",
  "Receptionist",
  "Graphic Designer",
];

const popularCities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Pune",
];

const Availablejob= () => {
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
                 AVAILABLE JOB
               </div>
      <section className="bg-gray-100 py-10 px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Find your next job
        </h2>
        <form className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-grow p-3 rounded border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="City, state, or zip code"
            className="flex-grow p-3 rounded border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-zinc-500 hover:bg-black text-white font-semibold rounded px-6 py-3 transition"
          >
            Search Jobs
          </button>
        </form>

        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2 text-gray-700 font-semibold">Popular Job Searches:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {popularJobs.map((job, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white px-4 py-2 rounded shadow hover:bg-amber-50 text-sm text-gray-800 underline"
              >
                {job}
              </a>
            ))}
          </div>

          <p className="mb-2 text-gray-700 font-semibold">Popular Cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularCities.map((city, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white px-4 py-2 rounded shadow hover:bg-amber-50 text-sm text-gray-800 underline"
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Jobrecommendation/>
      {/* <Footer/> */}
    </>
  );
};

export default Availablejob;
