export default function Footer() {
return (
<footer className="bg-gray-800 text-white py-6 mt-auto">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
<p>© 2025 JobPortal. All rights reserved.</p>
<div className="flex space-x-8 mt-4 md:mt-0">
<a href="Browsecompany" className="hover:text-blue-400 ">Browse Company</a>
<a href="/careeradvice" className="hover:text-blue-400 ">Career Advice</a>
<a href="/Popularjob" className="hover:text-blue-400 ">Popularjob</a>
<a href="/Companyreview" className="hover:text-blue-400 ">Company Review </a>
<a href="#" className="hover:text-blue-400">Support</a>
<a href="/Help" className="hover:text-blue-400 ">help</a>
<a href="/Aboutpage" className="hover:text-blue-400 ">About</a>
</div>
</div>
</footer>
);
}