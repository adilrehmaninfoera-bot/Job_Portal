import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarPublic() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>

        {/* Left side menu */}
        <div className="hidden md:flex space-x-16">
          <a href="/home" className="hover:text-blue-600">Home</a>
          <a href="./Availablejob.jsx" className="hover:text-blue-600">Available Jobs</a>
          <a href="/salary" className="hover:text-blue-600">Salary</a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="hover:text-blue-600 font-medium">Login</a>
          <a
            href="/jobpost"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Post a Job
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a href="/home" className="block hover:text-blue-600">Home</a>
          <a href="/availablejob" className="block hover:text-blue-600">Available Jobs</a>
          <a href="/salary" className="block hover:text-blue-600">Salary</a>
          <a href="/login" className="block hover:text-blue-600">Login</a>
        </div>
      )}
    </header>
  );
}
