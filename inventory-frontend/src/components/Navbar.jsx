import { useState } from "react";
import { Link } from "react-router-dom";
import { PiHamburgerDuotone } from "react-icons/pi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 start-0 z-20 w-full h-16 border-b border-gray-800 bg-[#05041a] text-white shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 h-full">
        {/* Logo + App Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/elote cozy4.jpg" className="h-8" />
          <span className="text-2xl font-semibold whitespace-nowrap text-white">
            Inventory App
          </span>
        </Link>

        {/* Hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 text-white text-xl bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {/* Hamburger icon here */}
            <PiHamburgerDuotone className="w-6 h-6" />
          </button>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none font-medium text-sm text-center px-4 py-2 rounded-lg"
          >
            Get Started
          </button>
        </div>



        {/* Responsive menu links */}
        <div
          id="navbar-sticky"
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 
          p-4 mt-4 md:p-0 md:mt-0 
          bg-[#05041a] border border-white
          md:border-0 rounded-lg text-white
          font-medium items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                to="/"
                className="block text-white bg-purple-600 hover:bg-purple-700 font-medium text-sm px-4 py-2 rounded-lg transition transform hover:scale-105"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/inventory"
                className="block text-white bg-purple-600 hover:bg-purple-700 font-medium text-sm px-4 py-2 rounded-lg transition transform hover:scale-105"
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
