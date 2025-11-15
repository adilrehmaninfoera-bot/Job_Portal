// // import React from 'react'

// // function EmployerDashboardpage() {
// //   return (
// //     <div>
    
// //     </div>
// //   )
// // }

// // export default EmployerDashboardpage



// import React, { useState } from "react";
// import {  FileText, User,Calendar,  Plus, BriefcaseBusiness} from "lucide-react";

// const menuItems = [
//   { title: "Create New", icon: <Plus size={20} />, path: "/EmployerDashboardpage" },
//   { title: "Jobs", icon: <BriefcaseBusiness size={20}/>, path: "/EmployerDashboardpage" },
//   { title: "Job Posts", icon: <FileText size={20} />, path: "/job-posts" },
//   { title: "Candidates", icon: <User size={20} />, path: "/candidates" },
//   { title: "Interview", icon: <Calendar size={20} />, path: "/settings" },
// ];

// export default function Dashboard() {
//   const [activeItem, setActiveItem] = useState("Jobs");

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md flex flex-col">
//         <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
//           JobPortal
//         </div>
//         <nav className="flex-1 p-4 space-y-1">
//           {menuItems.map((item) => (
//             <a
//               key={item.title}
//               href={item.path}
//               onClick={() => setActiveItem(item.title)}
//               className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition ${
//                 activeItem === item.title ? "bg-blue-600 text-white" : "text-gray-700"
//               }`}
//             >
//               <span className="mr-3">{item.icon}</span>
//               {item.title}
//             </a>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <header className="mb-8 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-gray-800">{activeItem}</h1>
//           {/* Add additional header actions if needed */}
//         </header>

//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="text-lg font-semibold mb-4">Active Job Posts</h2>
//             <p className="text-4xl font-bold text-blue-600">24</p>
//           </div>

//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="text-lg font-semibold mb-4">New Applicants</h2>
//             <p className="text-4xl font-bold text-blue-600">76</p>
//           </div>

//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="text-lg font-semibold mb-4">Interviews Scheduled</h2>
//             <p className="text-4xl font-bold text-blue-600">12</p>
//           </div>
//         </section>

//         {/* Placeholder for detailed content */}
//         <section className="mt-10 bg-white p-6 rounded shadow">
//           <h2 className="text-xl font-semibold mb-6">Overview</h2>
//           <p className="text-gray-600">
//             Welcome to your dashboard! Select a menu item to get started.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FileText, User, Calendar, Plus, Briefcase } from "lucide-react";

const menuItems = [
  { title: "Create New", icon: <Plus size={20} />, path: "/EmployerDashboardpage" },
  { title: "Jobs", icon: <Briefcase size={20} />, path: "/EmployerDashboardpage" },
  { title: "Job Posts", icon: <FileText size={20} />, path: "/job-posts" },
  { title: "Candidates", icon: <User size={20} />, path: "/candidates" },
  { title: "Interview", icon: <Calendar size={20} />, path: "/settings" },
];

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Jobs");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
          JobPortal
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              onClick={() => setActiveItem(item.title)}
              className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition ${
                activeItem === item.title ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-4 border-black border-b flex flex-col sm:flex-row sm:items-center ">
          <h1 className="text-3xl p-2 p-l-1 border-black border-r font-bold text-gray-800">{activeItem}</h1>
          <h1 className="text-3xl p-2  border-black border-r font-bold text-gray-800">All</h1>
          <h1 className="text-3xl p-2  border-black border-r font-bold text-gray-800">Tag</h1>
        </header>

 {/* Buttons below header */}
          <div className="mt-4 mb-4 sm:mt-0 flex space-x-3">
            <button
              onClick={() => alert("Add Action")}
              className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
            >
              Add New
            </button>

            <button
              onClick={() => alert("Export Action")}
              className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
            >
              Export
            </button>

            {/* Filter Button */}
            <button
              onClick={() => setFilterOpen((prev) => !prev)}
              className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Filter
              {/* Optional icon can be added here */}
            </button>
          </div>




        {/* Filter panel */}
        {filterOpen && (
          <section className="mb-6 p-4 bg-white rounded shadow border border-blue-300">
            <h2 className="text-lg font-semibold mb-3">Filter Jobs</h2>
            {/* Example filter inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Job title"
                className="border border-gray-300 rounded p-2"
              />
              <input
                type="text"
                placeholder="Location"
                className="border border-gray-300 rounded p-2"
              />
              <select className="border border-gray-300 rounded p-2">
                <option value="">Select status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="mt-4 flex space-x-3">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => alert("Apply filter")}
              >
                Apply
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => alert("Clear filter")}
              >
                  
              </button>
            </div>
          </section>
        )}

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-black p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Active Job Posts</h2>
            <p className="text-4xl font-bold text-blue-600">24</p>
          </div>

          <div className="bg-white shadow-black p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">New Applicants</h2>
            <p className="text-4xl font-bold text-blue-600">76</p>
          </div>

          <div className="bg-white shadow-black p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Interviews Scheduled</h2>
            <p className="text-4xl font-bold text-blue-600">12</p>
          </div>
        </section>

        {/* Placeholder for detailed content */}
        <section className="mt-10 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-6">Overview</h2>
          <p className="text-gray-600">
            Welcome to your dashboard! Select a menu item to get started.
          </p>
        </section>
      </main>
    </div>
  );
}
