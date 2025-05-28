import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FEFEFA] border-b border-[#e0e0e0] text-[#222]">
      <div className="w-[90%] mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wider">Saung</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 uppercase text-sm tracking-wider">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`transition-colors duration-300 hover:text-[#A68BBE] ${
                  isActive(path) ? "text-[#A68BBE]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#FEFEFA] text-[#222] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 uppercase text-sm tracking-wide">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-[#A68BBE] ${
                  isActive(path) ? "text-[#A68BBE]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
