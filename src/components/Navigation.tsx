'use client';

import React, { useState } from 'react';
import ListItem from './ListItem';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-end py-6">
      {/* Desktop Navs */}
      <ul className="hidden lg:flex lg:gap-6 md:gap-4 font-semibold text-white">
        <ListItem className="" href="#">
          Home
        </ListItem>
        <ListItem className="" href="/about-us">
          About Us
        </ListItem>
        <ListItem className="" href="/events">
          Events
        </ListItem>
        <ListItem className="" href="/resources">
          Resources
        </ListItem>
        <ListItem className="" href="#footer">
          Contacts
        </ListItem>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded-md hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 right-5 bg-[#310D51] border border-[#BC9ED9] rounded-lg shadow-lg z-50 min-w-[200px]">
            <ul className="py-2 flex flex-col">
              <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
                <a href="/" className="block text-white font-semibold">Home</a>
              </li>
              <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
                <a href="/" className="block text-white font-semibold">About Us</a>
              </li>
              <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
                <a href="/events" className="block text-white font-semibold">Events</a>
              </li>
              <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
                <a href="/resources" className="block text-white font-semibold">Resources</a>
              </li>
              <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
                <a href="/" className="block text-white font-semibold">Contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
} 