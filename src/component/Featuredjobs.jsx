export default function Featuredjobs() {
const jobs = [
{ title: "Software Engineer", company: "Tech Corp", location: "Remote" },
{ title: "Product Manager", company: "Startup Inc", location: "New York" },
{ title: "UX Designer", company: "Design Studio", location: "San Francisco" },
];


return (
<div  className="m-7">
<h3 className="text-2xl font-semibold text-center mb-6">Featured Jobs</h3>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{jobs.map((job, idx) => (
<div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
<h4 className="text-lg font-bold mb-2">{job.title}</h4>
<p className="text-gray-600 mb-4">{job.company} • {job.location}</p>
<button className="text-blue-600 font-medium hover:underline">Apply Now</button>
</div>
))}
</div>
</div>
);
}