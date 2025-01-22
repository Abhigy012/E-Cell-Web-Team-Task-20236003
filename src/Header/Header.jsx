import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-[#4e2065b2] to-[#3d3b50] md p-3 z-50">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6 ml-auto">
          <li>
            <NavLink to="/Home" className={({ isActive }) => isActive ? "text-purple-500 font-semibold" : "text-white hover:text-purple-500"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-500 font-semibold" : "text-white hover:text-purple-500"}>Grid</NavLink>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhay--goyal/" target="_blank" className="text-white  hover:text-purple-500">LinkedIn</a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col items-center space-y-3">
            <li>
              <NavLink to="/Home" className={({ isActive }) => isActive ? "text-purple-500 font-semibold" : "text-gray-700 hover:text-purple-500"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-500 font-semibold" : "text-gray-700 hover:text-purple-500"}>Grid</NavLink>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhay--goyal/" target="_blank" className="text-gray-700 hover:text-purple-500">Linkedin</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
