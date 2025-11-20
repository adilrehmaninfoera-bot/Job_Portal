
// import React, { useState } from "react";
// import {FileText, User, Briefcase, Calendar, Search, BarChart2, Plus } from "lucide-react";

// // Sidebar Menu Items
// const menuItems = [
//   { title: "Create new", icon: <Plus size={20} />, path: "#" },
//   { title: "Jobs", icon: <Briefcase size={20} />, path: "#" },
//   { title: "Smart Sourcing", icon: <Search size={20} />, path: "#" },
//   { title: "Candidates", icon: <User size={20} />, path: "#" },
//   { title: "Interviews", icon: <Calendar size={20} />, path: "#" }, 
// ];

// function SmartSourcingPage() {
//   // Search inputs
//   const [jobSearch, setJobSearch] = useState("");
//   const [locationSearch, setLocationSearch] = useState("");

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md flex flex-col">
//         <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
//           <span className="text-blue-600">Job Portal</span>
//         </div>
//         <nav className="flex-1 p-3 space-y-1">
//           {menuItems.map((item) => (
//             <div
//               key={item.title}
//               className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition ${
//                 item.title === "Smart Sourcing" ? "bg-blue-100 text-blue-900 font-bold" : "text-gray-700"
//               }`}
//             >
//               <span className="mr-3">{item.icon}</span>
//               {item.title}
//             </div>
//           ))}
//         </nav>
//         {/* Language Selector */}
//         <div className="p-4 border-t mt-auto">
//           <label className="block text-sm mb-2">Choose the language you see on Indeed</label>
//           <select className="w-full border rounded p-2">
//             <option>English</option>
//             <option>Hindi</option>
//             {/* ...other languages */}
//           </select>
//         </div>
//       </aside>
//       {/* Main content */}
//       <main className="flex-1 p-0">
//         {/* Header */}
//         <div className="px-8 py-6 bg-white shadow flex items-center justify-between">
//           <div className="flex items-center space-x-8">
//             <span className="font-bold text-lg">Smart Sourcing</span>
//             <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Find candidates</button>
//             <a href="" className="px-4 py-2 rounded  text-black font-semibold">Plans and Pricing</a>
//             <a href="" className="px-4 py-2 rounded  text-black font-semibold">Projects</a>
//             <a href="" className="px-4 py-2 rounded  text-black font-semibold">Saved search</a>
//             </div>
//           <div className="flex items-center space-x-4">
//             <button className="border px-4 py-2 rounded font-semibold">India</button>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">Post a job</button>
//           </div>
//         </div>
//         {/* Hero area */}
//         <div className="bg-blue-50 py-16 px-8 flex flex-col items-center text-center">
//           <h1 className="text-3xl font-bold mb-2">Discover and engage with top talent</h1>
//           <p className="text-gray-700 mb-8">
//             Let us know what you're looking for. We'll find top candidates for you.
//           </p>
//           {/* Search box */}
//           <div className="bg-white rounded-xl shadow-md flex items-center justify-center px-6 py-4 w-full max-w-3xl mb-6">
//             <Search size={20} className="text-gray-600 mr-3" />
//             <input
//               value={jobSearch}
//               onChange={e => setJobSearch(e.target.value)}
//               type="text"
//               placeholder="Add your job  Job title, skills, companies, or search syntax"
//               className="flex-1 border-none outline-none p-2 bg-transparent text-gray-900"
//             />
//             <input
//               value={locationSearch}
//               onChange={e => setLocationSearch(e.target.value)}
//               type="text"
//               placeholder="City, county or postcode"
//               className="border border-gray-200 rounded p-2 ml-6 mr-2"
//             />
//             <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Find</button>
//             <button className="ml-3 p-2 rounded hover:bg-gray-100">•••</button>
//           </div>
//           {/* Info below search */}
//           <div className="mt-10">
//             <div className="flex flex-col items-center">
//               <span className="rounded-full bg-yellow-100 p-4 mb-2">
//                 <FileText size={32} className="text-blue-600" />
//               </span>
//               <p className="text-lg mt-2 font-semibold text-gray-700">
//                 Use <span className="font-bold">keywords</span> or <span className="font-bold">add your job</span> to search millions of resumes and find qualified candidates.
//               </p>
//               <a href="#" className="text-blue-700 underline mt-1">
//                 Post a job
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* Footer area */}
//         <footer className="px-8 py-6 text-sm text-gray-500 flex justify-between items-center bg-white mt-8">
//           <div>
//             <a href="#" className="mr-4 underline">About</a>
//             <a href="#" className="mr-4 underline">Contact us</a>
//           </div>
//           <div>
//             <a href="#" className="underline">Cookies, Privacy and Terms</a>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }

// export default SmartSourcingPage;





import React, { useState } from "react";
import { FileText, User, Briefcase, Calendar, Search, BarChart2, Plus } from "lucide-react";

// Sidebar Menu Items
const menuItems = [
  { title: "Create new", icon: <Plus size={20} />, path: "#" },
  { title: "Jobs", icon: <Briefcase size={20} />, path: "#" },
  { title: "Smart Sourcing", icon: <Search size={20} />, path: "#" },
  { title: "Candidates", icon: <User size={20} />, path: "#" },
  { title: "Interviews", icon: <Calendar size={20} />, path: "#" }, 
];

function SmartSourcingPage() {
  // Search inputs
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
          <span className="text-blue-600">Job Portal</span>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition ${
                item.title === "Smart Sourcing"
                  ? "bg-blue-100 text-blue-900 font-bold"
                  : "text-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.title}
            </div>
          ))}
        </nav>
        {/* Language Selector */}
        <div className="p-4 border-t mt-auto">
          <label className="block text-sm mb-2">Choose the language you see on Indeed</label>
          <select className="w-full border rounded p-2">
            <option>English</option>
            <option>Hindi</option>
            {/* ...other languages */}
          </select>
        </div>
      </aside>

      {/* Main content + sticky footer: vertical flexbox layout */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Header */}
        <div className="px-8 py-6 bg-white shadow flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="font-bold text-lg">Smart Sourcing</span>
            <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Find candidates</button>
            <a href="" className="px-4 py-2 rounded text-black font-semibold">Plans and Pricing</a>
            <a href="" className="px-4 py-2 rounded text-black font-semibold">Projects</a>
            <a href="" className="px-4 py-2 rounded text-black font-semibold">Saved search</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="border px-4 py-2 rounded font-semibold">India</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">Post a job</button>
          </div>
        </div>
        {/* Hero area and main content (make it grow to push footer) */}
        <div className="flex-1">
          <div className="bg-blue-50 py-16 px-8 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold mb-2">Discover and engage with top talent</h1>
            <p className="text-gray-700 mb-8">
              Let us know what you're looking for. We'll find top candidates for you.
            </p>
            {/* Search box */}
            <div className="bg-white rounded-xl shadow-md flex items-center justify-center px-6 py-4 w-full max-w-3xl mb-6">
              <Search size={20} className="text-gray-600 mr-3" />
              <input
                value={jobSearch}
                onChange={e => setJobSearch(e.target.value)}
                type="text"
                placeholder="Add your job  Job title, skills, companies, or search syntax"
                className="flex-1 border-none outline-none p-2 bg-transparent text-gray-900"
              />
              <input
                value={locationSearch}
                onChange={e => setLocationSearch(e.target.value)}
                type="text"
                placeholder="City, county or postcode"
                className="border border-gray-200 rounded p-2 ml-6 mr-2"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Find</button>
              <button className="ml-3 p-2 rounded hover:bg-gray-100">•••</button>
            </div>
            {/* Info below search */}
            <div className="mt-10">
              <div className="flex flex-col items-center">
                <span className="rounded-full bg-yellow-100 p-4 mb-2">
                  <FileText size={32} className="text-blue-600" />
                </span>
                <p className="text-lg mt-2 font-semibold text-gray-700">
                  Use <span className="font-bold">keywords</span> or <span className="font-bold">add your job</span> to search millions of resumes and find qualified candidates.
                </p>
                <a href="#" className="text-blue-700 underline mt-1">
                  Post a job
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer always at the bottom */}
        <footer className="px-8 py-6 text-sm text-gray-500 flex justify-between items-center bg-white">
          <div>
            <a href="#" className="mr-4 underline">About</a>
            <a href="#" className="mr-4 underline">Contact us</a>
          </div>
          <div>
            <a href="#" className="underline">Cookies, Privacy and Terms</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SmartSourcingPage
