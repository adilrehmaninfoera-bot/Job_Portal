



import React from "react";
import bannerimg from "../assets/bannerimg.png"
import Footer from "./Footer";

const companyReviews = [
  {
    company: "Tech Innovations Ltd.",
    rating: 4.5,
    reviewCount: 120,
    summary:
      "Great place to work with supportive management and opportunities for growth.",
    pros: [
      "Flexible working hours",
      "Good work-life balance",
      "Strong team culture",
    ],
    cons: ["Occasional tight deadlines", "Limited parking space"],
  },
  {
    company: "Creative Media Inc.",
    rating: 4.0,
    reviewCount: 85,
    summary:
      "Creative environment with lots of chances to learn new skills and collaborate.",
    pros: ["Innovative projects", "Friendly coworkers", "Regular training programs"],
    cons: ["Workload can be high", "Needs better communication"],
  },
  {
    company: "Fintech Solutions",
    rating: 3.8,
    reviewCount: 60,
    summary: "Good pay and benefits, but work-life balance could improve.",
    pros: ["Competitive salary", "Good benefits package"],
    cons: ["Long working hours", "Limited remote work options"],
  },
  // Add more company reviews as needed
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (

       


    <div className="flex items-center space-x-1 text-amber-400">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.39 3.57 1.45-6.36L1 7.43l6.58-.56L10 1l2.42 5.87 6.58.56-4.05 4.78 1.46 6.36z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M10 15l-5.39 3.57 1.45-6.36L1 7.43l6.58-.56L10 1l2.42 5.87 6.58.56-4.05 4.78 1.46 6.36z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 fill-gray-300"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.39 3.57 1.45-6.36L1 7.43l6.58-.56L10 1l2.42 5.87 6.58.56-4.05 4.78 1.46 6.36z" />
        </svg>
      ))}
    </div>
  );
};

const CompanyReviewCard = ({ company, rating, reviewCount, summary, pros, cons }) => (
  <div className="bg-white rounded-lg shadow p-6 space-y-4 hover:shadow-lg transition cursor-pointer">
    <h3 className="text-xl font-bold text-gray-900">{company}</h3>
    <div className="flex items-center space-x-4">
      <StarRating rating={rating} />
      <span className="text-sm text-gray-600">({reviewCount} reviews)</span>
    </div>
    <p className="text-gray-700">{summary}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold text-green-600">Pros</h4>
        <ul className="list-disc list-inside text-gray-600">
          {pros.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-red-600">Cons</h4>
        <ul className="list-disc list-inside text-gray-600">
          {cons.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const CompanyReviewPage = () => (

<>
  <div
                  className="w-full h-35 flex justify-center items-center font-extrabold text-4xl sm:text-6xl bg-center bg-cover text-white shadow-md"
                  style={{
                    backgroundImage: `url(${bannerimg})`,
                    backgroundBlendMode: "multiply",
                    backgroundColor: "rgba(59,130,246,0.75)", // Tailwind blue-500 with opacity
                  }}
                >
                  COMPANY REVIEW
                </div>
  <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
    
   
    <header className="max-w-4xl mx-auto mb-12 text-center">
      
      <p className="text-lg text-gray-700">
        See what current and former employees have to say about companies.
      </p>
    </header>

    <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {companyReviews.map((review, idx) => (
        <CompanyReviewCard key={idx} {...review} />
      ))}
       {companyReviews.map((review, idx) => (
        <CompanyReviewCard key={idx} {...review} />
      ))}
  
    </section>
       
  </div>
   <Footer/>
  </>
);

export default CompanyReviewPage;
