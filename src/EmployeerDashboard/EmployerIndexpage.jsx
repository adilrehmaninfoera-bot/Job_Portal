// // import React from 'react'

// import EmployeerNavbar from "../EmployeerDashboard/EmployeerNavbar";

// function EmployeerIndexpage() {
//   return (
//        <div>
//         <EmployeerNavbar/>

//        </div>
//   )
// }

// export default EmployeerIndexpage;

import React from "react";
// import { Home,Free } from "lucide-react"
import { Gift, Users, Calendar } from "lucide-react";
import EmployerNavbar from "./EmployerNavbar";
import employerimage from "../assets/Employerimage.jpg";
import EmployerFooter from "./EmployerFooter";

const features = [
  {
    title: "Post jobs for free",
    description:
      "Reach millions of qualified candidates with a powerful job posting platform at no cost.",
    icon: <Gift size={50} className="text-cyan-600" />,
  },
  {
    title: "Candidate matching",
    description:
      "Get matched with highly qualified candidates to save time and find the right fit fast.",
    icon: <Users size={50} className="text-cyan-600" />,
  },
  {
    title: "Interview scheduling",
    description:
      "Easily manage the interview process and schedule interviews directly through the platform.",

    icon: <Calendar size={50} className="text-cyan-600" />,
  },
];

const testimonials = [
  {
    quote:
      "Using JobPortal made hiring so much easier. The quality of candidates was outstanding!",
    name: "Ravi Sharma",
    role: "HR Manager",
    company: "Tech Solutions Ltd.",
  },
  {
    quote:
      "The platform helped us find the perfect candidate faster than we imagined.",
    name: "Meera Patel",
    role: "Recruitment Lead",
    company: "Innovatech",
  },
];

const companies = [
  { name: "Acme Corp", logo: "/logos/acme.svg" },
  { name: "Globex", logo: "/logos/globex.svg" },
  { name: "Initech", logo: "/logos/initech.svg" },
  { name: "Umbrella Corp", logo: "/logos/umbrella.svg" },
];

export default function EmployerLandingPage() {
  return (
    <>
      <EmployerNavbar />

      <main className="bg-white">
        <div
          className="w-full bg-center bg-cover rounded-b-full opacity-90 flex-1 pb-16"
          style={{ backgroundImage: `url(${employerimage})` }}
        >
          {/* Hero Section */}
          <section className=" text-center py-20 px-6">
            <h1 className="text-5xl font-extrabold text-white max-w-4xl mx-auto mb-6">
              Hire top talent faster with JobPortal
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Post your jobs for free and find your perfect candidates within
              days.
            </p>
            <a
              href="/post-job"
              className="inline-block bg-white text-cyan-400 px-4 py-2 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Post a Job for Free
            </a>
          </section>

          {/* Features Section */}
          <section className="py-20 px-6 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl animate-bounce font-bold mb-12 text-orange-200">
              Why choose JobPortal?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-cyan-50  transition duration-600 hover:shadow-cyan-800  shadow-lg rounded-full p-8 flex flex-col items-center"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 max-w-md">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Trusted Companies Section */}
        <section className=" py-14 px-6 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">
            Trusted by leading companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            {companies.map(({ name, logo }, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`${name} logo`}
                className="h-12 grayscale opacity-70 hover:opacity-100 transition cursor-pointer"
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 text-center text-gray-900">
            What our clients say
          </h2>
          <div className="space-y-12">
            {testimonials.map(({ quote, name, role, company }, idx) => (
              <blockquote
                key={idx}
                lg
                className="bg-gray-100 p-8 rounded-lg shadow-md italic"
              >
                <p className="mb-4 text-lg text-gray-800">"{quote}"</p>
                <footer className="text-gray-600 font-semibold">
                  — {name}, {role} at {company}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="bg-cyan-200 text-white text-center py-16 px-6">
          <h2 className="text-4xl font-extrabold mb-6">Ready to hire today?</h2>
          <a
            href="/post-job"
            className="inline-block bg-white text-blue-700 px-12 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Post Your Job for Free
          </a>
        </section>
      </main>
      <EmployerFooter />
    </>
  );
}
