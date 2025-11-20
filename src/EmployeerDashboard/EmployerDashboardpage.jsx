import React, { useState } from "react";
import { FileText, User, Calendar, Plus, Briefcase, Search } from "lucide-react";
import employerimage2 from "../assets/employerimage2.png";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Create New",
    icon: <Plus size={20} />,
    path: "/EmployerDashboardpage",
  },
  {
    title: "Jobs",
    icon: <Briefcase size={20} />,
    path: "/EmployerDashboardpage",
  },
  {
    title: "Smart Sourcing",
    icon: <Search size={20} />,
    path: "/SmartSourcingPage",
  },
  { title: "Candidates", icon: <User size={20} />, path: "/CandidateApplicationspage" },
  { title: "Interview", icon: <Calendar size={20} />, path: "/Interviewpage" },
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
                activeItem === item.title
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
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
        <div className=" text-3xl font-bold text-blue-500 ">Job Portal</div>
        {/* Header */}
        <header className="mb-4 border-black border-b flex flex-col sm:flex-row sm:items-center ">
          <h1 className="text-3xl p-2 p-l-1 px-4 border-black  font-bold text-gray-800">
            {activeItem}
          </h1>
          <span className="text-3xl font-light">|</span>
          <a href="/all" className="text-2xl p-2 px-6 font-bold font-mono">
            All
          </a>
          <a href="/tag" className=" text-2xl p-2 px-4 font-bold font-mono">
            tag
          </a>
        </header>

        {/* Buttons below header */}
        <div className="mt-4 mb-4 sm:mt-0 flex space-x-3">
          <button
            onClick={() => alert("Add Action")}
            className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
          >
            Job title
          </button>

          <button
            onClick={() => alert("Export Action")}
            className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
          >
            location
          </button>

          <button
            onClick={() => alert("Export Action")}
            className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
          >
            status
          </button>

           <button
            onClick={() => alert("Export Action")}
            className="px-3 py-1 rounded border border-gray-600 text-gray-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
          >
            <i class="fas fa-accessible-icon "></i>
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
                className="px-4 py-2 bg-blue-600 text-white border rounded-full hover:bg-blue-700"
                onClick={() => alert("Apply filter")}
              >
                Apply
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => alert("Clear filter")}
              ></button>
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

        <div className="pt-10 flex flex-col items-center min-h-screen">
          <img
            src={employerimage2}
            alt="Our team connecting talent and opportunity"
            className="w-full md:w-4/6 rounded-2xl shadow-xl object-cover transition-transform duration-300 hover:scale-105 border-4 border-blue-200"
          />

          <h1 className="mt-6 max-w-2xl text-center text-lg text-gray-700 px-4">
            {" "}
            Reach more candidates, faster.
          </h1>
          <p className=" max-w-1xl text-center text-lg text-gray-700 px-4">
            Post your first job directly on Indeed and get up to 4 times more
            completed applications compared to directing candidates to your own
            career site. Make the application process simple and mobile-friendly
            with Indeed Apply—helping you hire top talent quicker and easier.
          </p>

          <Link
            to="/EmployerPostjobpage.jsx"
            className="block bg-blue-400 text-white rounded px-5 py-2 text-center hover:bg-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Post Job
          </Link>
        </div>
      </main>
    </div>
  );
}
