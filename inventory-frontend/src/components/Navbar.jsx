import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 start-0 z-20 w-full h-16 shadow-md border-b border-gray-800 bg-[#05041a] text-white shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 h-full">
        {/* Logo + App Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/elote cozy4.jpg" className="h-8" />
          <span className="text-2xl font-semibold whitespace-nowrap text-[#ffffff]">
            Inventory App
          </span>
        </Link>

        {/* Right-side buttons */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none font-medium text-sm text-center px-4 py-2 rounded-lg"
          >
            Get Started
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {/* Add icon here if needed */}
          </button>
        </div>

        {/* Responsive menu links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-white md:flex-row md:space-x-8 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/inventory"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Inventory
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
