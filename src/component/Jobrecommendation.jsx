import React from "react";
import Jobcard from "./Jobcard";

const jobs = [
  {
    title: "Full Stack Developer",
    company: "Tech Innovations Ltd.",
    location: "Bengaluru, Karnataka",
    snippet:
      "Exciting opportunity to work with cutting-edge technologies in a dynamic team.",
  },
  {
    title: "Marketing Manager",
    company: "Creative Media Inc.",
    location: "Mumbai, Maharashtra",
    snippet: "Lead marketing campaigns for top brands with innovative strategies.",
  },
   {
    title: "java developer",
    company: "Tech Inc.",
    location: "Mumbai, Maharashtra",
    snippet: "Lead marketing campaigns for top brands with innovative strategies.",
  },
   {
    title: "Marketing Manager",
    company: "Creative Media Inc.",
    location: "Mumbai, Maharashtra",
    snippet: "Lead marketing campaigns for top brands with innovative strategies.",
  },
  // add more jobs...
];

const Jobrecommendation = () => {
  return (
    <section className="bg-zinc-500 py-10 px-6 sm:px-12 lg:px-24 border-t border-gray-200">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
        Recommended Jobs For You
      </h3>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-black">
        {jobs.map((job, idx) => (
          <Jobcard
            key={idx}
            title={job.title}
            company={job.company}
            location={job.location}
            snippet={job.snippet}
          />
        ))}
   
       
      </div>
    </section>
  );
};

export default Jobrecommendation;
