import { Briefcase, Laptop, Building2 } from "lucide-react";


export default function Categories() {
const categories = [
{ name: "Business & Management", jobs: "1200+ Jobs", icon: <Briefcase size={40} className="text-blue-600" /> },
{ name: "IT & Software", jobs: "800+ Jobs", icon: <Laptop size={40} className="text-blue-600" /> },
{ name: "Engineering", jobs: "600+ Jobs", icon: <Building2 size={40} className="text-blue-600" /> },
];


return (
<div className="m-7">
<h3 className="text-2xl font-semibold mb-6 text-center">Browse by Categories</h3>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{categories.map((cat, idx) => (
<div key={idx} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:shadow-lg transition">
{cat.icon}
<h4 className="text-lg font-bold mb-2">{cat.name}</h4>
<p className="text-gray-600 text-center">{cat.jobs}</p>
</div>
))}
</div>
</div>
);
}