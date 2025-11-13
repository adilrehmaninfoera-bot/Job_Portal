// import React from 'react'

// function EmployerDashboardpage() {
//   return (
//     <div>
    
//     </div>
//   )
// }

// export default EmployerDashboardpage



import React, { useState } from "react";
import { Home, FileText, User, Settings } from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: <Home size={20} />, path: "/EmployerDashboardpage" },
  { title: "Job Posts", icon: <FileText size={20} />, path: "/job-posts" },
  { title: "Candidates", icon: <User size={20} />, path: "/candidates" },
  { title: "Settings", icon: <Settings size={20} />, path: "/settings" },
];

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");

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
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">{activeItem}</h1>
          {/* Add additional header actions if needed */}
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Active Job Posts</h2>
            <p className="text-4xl font-bold text-blue-600">24</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">New Applicants</h2>
            <p className="text-4xl font-bold text-blue-600">76</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
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
