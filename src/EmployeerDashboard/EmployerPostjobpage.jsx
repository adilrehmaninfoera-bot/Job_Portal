import React, { useState, useEffect } from "react";

// Sample mock resumes data (replace with API data)
const sampleResumes = [
  {
    id: 1,
    name: "Alice Johnson",
    jobTitle: "Software Engineer",
    location: "San Francisco, CA",
    experience: "5 years",
    education: "B.Sc. Computer Science",
    summary:
      "Experienced software engineer skilled in React, Node.js, and databases.",
  },
  // Add more mock resumes...
];

function ResumeSearchApp() {
  const [resumes, setResumes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [page, setPage] = useState(1);
  const [resultsPerPage] = useState(10);

  useEffect(() => {
    // TODO: Replace with real API fetch using searchTerm, filterLocation, page
    // For demo, using static data filtered locally
    let filtered = sampleResumes;
    if (searchTerm)
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (filterLocation)
      filtered = filtered.filter(r => r.location === filterLocation);
    setResumes(filtered);
  }, [searchTerm, filterLocation, page]);

  // Pagination controls
  const totalPages = Math.ceil(resumes.length / resultsPerPage);
  const paginatedResumes = resumes.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Resume Search</h1>

      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-8">
        <input
          type="text"
          placeholder="Search by name, title, or skills"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          value={filterLocation}
          onChange={e => setFilterLocation(e.target.value)}
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">All Locations</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
          {/* Add more options */}
        </select>
      </div>

      {/* Resume Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedResumes.map(r => (
          <div key={r.id} className="border rounded shadow p-4 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">{r.name}</h2>
            <p className="text-blue-600 font-medium">{r.jobTitle}</p>
            <p className="text-gray-700">{r.location}</p>
            <p className="text-gray-600 mt-2">{r.summary}</p>
            <p className="text-sm text-gray-500 mt-1">{r.experience} | {r.education}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
              View Resume
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 border rounded">{page} of {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ResumeSearchApp;
