import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/container";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contactme" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border text-foreground">
      <Container className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold tracking-wider text-primary font-serif">
          Saung
        </h1>

        <ul className="hidden md:flex gap-8 uppercase text-sm tracking-wider">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`transition-colors duration-300 hover:text-primary ${isActive(path) ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-transform duration-300 text-foreground"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      <div
        className={`md:hidden bg-background text-foreground transition-all duration-300 ease-in-out overflow-hidden ${isOpen
          ? "max-h-60 opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 uppercase text-sm tracking-wide">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 hover:text-primary ${isActive(path) ? "text-primary" : "text-muted-foreground"
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
