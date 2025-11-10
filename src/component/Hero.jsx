export default function Hero() {
return (
<section className="bg-blue-50 py-20 text-center px-4">
<h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 shadow-yellow-500">
Find Your Dream Job Today
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
Explore thousands of job opportunities across industries and locations.
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<input
type="text"
placeholder="Job title or keyword"
className="px-4 py-2 rounded-lg border w-full sm:w-80"
/>
<input
type="text"
placeholder="Location"
className="px-4 py-2 rounded-lg border w-full sm:w-60"
/>
<button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
Search
</button>
</div>
</section>
);
}