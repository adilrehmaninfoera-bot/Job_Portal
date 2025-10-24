
import React from "react";
import bannerimg from "../assets/bannerimg.png"; // Adjust path as needed
import Footer from "./Footer";

const salaryData = [
  { industry: "Software Engineer", avgSalary: "₹8,37,096 per year", jobOpenings: "Job openings" },
  { industry: "Registered Nurse", avgSalary: "₹2,14,791 per year", jobOpenings: "Job openings" },
  { industry: "Accountant", avgSalary: "₹2,53,346 per year", jobOpenings: "Job openings" },
  { industry: "Business Analyst", avgSalary: "₹8,30,503 per year", jobOpenings: "Job openings" },
  { industry: "Nursing Assistant", avgSalary: "₹2,66,335 per year", jobOpenings: "Job openings" },
  { industry: "Sales Executive", avgSalary: "₹2,46,572 per year", jobOpenings: "Job openings" },
  // add more as needed, or pull dynamically
];

const SalaryCard = ({ industry, avgSalary, jobOpenings }) => {
  return (

    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{industry}</h3>
      <p className="text-amber-600 font-bold text-xl mb-1">{avgSalary}</p>
      <p className="text-gray-600 text-sm">{jobOpenings}</p>
    </div>
  );
};

const SalaryGuidePage = () => {
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
            SALARY
          </div>


    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Discover Your Earning Potential
        </h1>
        <p className="text-lg text-gray-700">
          Explore high-paying careers, salaries, and job openings by industry and location.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {salaryData.map((item, idx) => (
          <SalaryCard
            key={idx}
            industry={item.industry}
            avgSalary={item.avgSalary}
            jobOpenings={item.jobOpenings}
          />
        ))}

        {salaryData.map((item, idx) => (
          <SalaryCard
            key={idx}
            industry={item.industry}
            avgSalary={item.avgSalary}
            jobOpenings={item.jobOpenings}
          />
        ))}
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default SalaryGuidePage;
