import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cyan-900 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-white tracking-tight">
          JobPortal Employer
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-15 font-medium">
          <Link to="/post-job" className="hover:text-blue-400 text-amber-50">
            Post a Job
          </Link>
          <Link to="/manage-jobs" className="hover:text-blue-400  text-amber-50">
            Manage Jobs
          </Link>
          <Link to="/candidates" className="hover:text-blue-400  text-amber-50">
            Candidates
          </Link>
          {/* <Link to="/pricing" className="hover:text-blue-600">
            Pricing
          </Link> */}

          {/* Login/Signup Buttons */}
          {/* <Link
            to="/login"
            className="text-white hover:underline font-semibold px-4 py-2"
          >
            Login
          </Link> */}
          <Link
            to="/EmployerDashboardpage"
            className="bg-stone-200 text-cyan-300 px-5 py-2 rounded-lg hover:bg-stone-400 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 max-w-md mx-auto">
          <Link
            to="/post-job"
            className="block font-medium text-blue-700 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Post a Job
          </Link>
          <Link
            to="/manage-jobs"
            className="block font-medium text-blue-700 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Manage Jobs
          </Link>
          <Link
            to="/candidates"
            className="block font-medium text-blue-700 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Candidates
          </Link>
          <Link
            to="/pricing"
            className="block font-medium text-blue-700 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>

          <hr />

          <Link
            to="/login"
            className="block font-semibold text-blue-700 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/"
            className="block bg-blue-400 text-white rounded px-5 py-2 text-center hover:bg-blue-500"
            onClick={() => setMenuOpen(false)}
          >
           Dashboard
          </Link>
        </div>
      )}
    </header>
  );
}

    
