import React, { useState, useEffect } from 'react';

// Sample job data, replace with actual backend data
const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc',
    location: 'Bangalore, India',
    salary: '₹6,00,000 - ₹10,00,000/yr',
    logoUrl: 'https://via.placeholder.com/50',
    type: 'Full-Time',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovatech Labs',
    location: 'Hyderabad, India',
    salary: '₹5,50,000 - ₹9,00,000/yr',
    logoUrl: 'https://via.placeholder.com/50',
    type: 'Part-Time',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Delhi, India',
    salary: '₹4,00,000 - ₹7,00,000/yr',
    logoUrl: 'https://via.placeholder.com/50',
    type: 'Contract',
  },
   {
    id: 4,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc',
    location: 'Bangalore, India',
    salary: '₹6,00,000 - ₹10,00,000/yr',
    logoUrl: 'https://via.placeholder.com/50',
    type: 'Full-Time',
  },
   {
    id: 5,
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Delhi, India',
    salary: '₹4,00,000 - ₹7,00,000/yr',
    logoUrl: 'https://via.placeholder.com/50',
    type: 'Contract',
  },
   {
    id: 6,
    title: 'Manager',
    company: 'infosys',
    location: 'Delhi, India',
    salary: '₹4,00,000 - ₹7,00,000/yr',
    logoUrl: 'https://via.placeholder.com/50',
    type: 'Full Time',
  },

  // Add more jobs
];

function PopularJobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  useEffect(() => {
    setFilteredJobs(
      jobData.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Popular Jobs
      </h1>

      <div className="max-w-4xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search jobs, companies, or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4 space-x-4">
                <img
                  src={job.logoUrl}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-700">{job.company}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Salary:</strong> {job.salary}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Job Type:</strong> {job.type}
              </p>

              <button
                onClick={() => alert(`You clicked on ${job.title}`)}
                className="mt-auto bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default PopularJobSearch;
