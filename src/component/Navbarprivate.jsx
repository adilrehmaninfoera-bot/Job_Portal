
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
//   <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>

//   {/* Left side menu */}
//   <div className="hidden md:flex space-x-16">
//     <a href="/home" className="hover:text-blue-600">Home</a>
//     {/* <a href="/jobs" className="hover:text-blue-600">Jobs</a> */}
//     <a href="/availablejob" className="hover:text-blue-600"> Available Jobs</a>
//     <a href="/salary" className="hover:text-blue-600">Salary</a>
//   </div>

//   {/* Right side actions */}
//   <div className="hidden md:flex items-center space-x-4">
//     <a href="/login" className="hover:text-blue-600 font-medium">Login</a>
//     <a
//       href="/jobpost"
//       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//     >
//       Post a Job
//     </a>
//   </div>

 
//    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//    {menuOpen ? <X size={28} /> : <Menu size={28} />}
//    </button>
//    </nav>
//    {menuOpen && (
// <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
// <a href="#" className="block hover:text-blue-600">Home</a>
// <a href="#" className="block hover:text-blue-600">Jobs</a>
// <a href="#" className="block hover:text-blue-600">Companies</a>
// <a href="#" className="block hover:text-blue-600">Contact</a>
// </div>
// )}




//     </header>
//   );
// }

import { useState } from "react";
import { Menu, X, User, Bookmark , Bell } from "lucide-react";

export default function NavbarPrivate() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>

        {/* Left side menu */}
        <div className="hidden md:flex space-x-16">
          <a href="/home" className="hover:text-blue-600">Home</a>
          <a href="/availablejob" className="hover:text-blue-600">Available Jobs</a>
          <a href="/salary" className="hover:text-blue-600">Salary</a>
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
    
          <a
            href="/profile"
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Profile"
          >
            <Bookmark className="text-blue-600" size={24} />  
          </a>
          <a
            href="/profile"
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Profile"
          >
            <Bell className="text-blue-600" size={24} />  
          </a>
          <a
            href="/profile"
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Profile"
          >
            <User className="text-blue-600" size={24} />  
          </a>
          
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

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a href="./" className="block hover:text-blue-600">Home</a>
          <a href="./availablejob" className="block hover:text-blue-600">Available Jobs</a>
          <a href="./salary" className="block hover:text-blue-600">Salary</a>
          <a href="./profile" className="flex items-center space-x-2 hover:text-blue-600">
            <User size={18} className="text-blue-600" /> <span>Profile</span>
          </a>
          <Link to="/home" className="hover:text-blue-600">Home</Link>
<Link to="/availablejob" className="hover:text-blue-600">Available Jobs</Link>
<Link to="/salary" className="hover:text-blue-600">Salary</Link>
          <a
            href="Jobpost.jsx"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Post a Job
          </a>
        </div>
      )}
    </header>
  );
}
