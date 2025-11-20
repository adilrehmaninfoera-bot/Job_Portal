import React, { useState, useEffect } from 'react';

function CandidateApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('/api/my-job-applications') // Replace with your API URL
      .then(res => res.json())
      .then(data => {
        setApplications(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load applications');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading applications...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Candidates Who Applied</h1>
      {applications.length === 0 ? (
        <p>No applications found for your posted jobs.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="font-semibold text-xl">{app.candidateName}</h2>
              <p><strong>Job Title:</strong> {app.jobTitle}</p>
              <p><strong>Application Date:</strong> {app.appliedAt}</p>
              <p><strong>Resume:</strong> <a href={app.resumeLink} className="text-blue-600 underline">View Resume</a></p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Contact Candidate
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CandidateApplications;
