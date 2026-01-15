"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/pe-dimensiuni/bucatarie", label: "Bucătărie" },
  { href: "/pe-dimensiuni/dressing", label: "Dressing" },
  { href: "/pe-dimensiuni/baie", label: "Baie" },
  { href: "/pe-dimensiuni/birou", label: "Birou" },
  { href: "/cum-functioneaza", label: "Cum funcționează" },
  { href: "/masuratori", label: "Măsurători" },
  { href: "/shop", label: "Shop" },
];

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span>Meniu</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
