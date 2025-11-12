import React from 'react'

function EmployerFooter() {
  return (
    //return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">JobPortal</h3>
          <p className="text-gray-400 max-w-sm">
            Connecting employers with top talent worldwide. Post jobs, review
            applications, and hire the best candidates effortlessly.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="/help-center" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/sitemap" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-l bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 px-5 rounded-r hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 JobPortal. All rights reserved.
      </div>
    </footer>
  );
}

export default EmployerFooter