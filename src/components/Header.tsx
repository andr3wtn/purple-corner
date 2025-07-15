'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import ListItem from './ListItem';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const pathname = usePathname();

  const navItems = [
    { label: "Home", href:'/' },
    { label: "About Us", href:'/about' },
    { label: "Events", href:'/events' },
    { label: "Resources", href:'/resources' },
    { label: "Contacts", href:'#footer' }
  ]
  return (
    <header className="top-0 z-50 bg-[#310D51] px-10 py-2 flex justify-between items-center">
      <Image alt="light background logo" src="/images/logo_light.svg" width={60} height={60} className="w-[60px] h-[60px] !rounded-full object-cover" />
      <nav className="flex justify-end py-6">
        {/* Desktop Navs */}
        <ul className="hidden lg:flex lg:gap-6 md:gap-4 font-semibold text-white">
          {navItems.map((item) => {
            const isActive = pathname == item.href;
            return (<ListItem key={item.href} href={item.href} className={`${isActive ? ('bg-[#957DAB] text-[#1F0732]') : ('bg-[#BC9ED9] text-[#310C50]')}`}>{item.label}</ListItem>)
          })}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">

          <div onClick={toggleMenu} className="w-6 h-6 relative cursor-pointer z-50">
            {/* Line 1 */}
            <span
              className={`absolute h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
              }`}
            />
            {/* Line 2 */}
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'top-2.5'
              }`}
            />
            {/* Line 3 */}
            <span
              className={`absolute h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
              }`}
            />
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-10 bg-[#310D51] px-10 pt-20 text-xl min-w-[200px]">
              <ul className="flex flex-col text-white gap-5">
                {navItems.map((item) => {
                  const isActive = pathname == item.href;
                  return (<ListItem href={item.href} className={`${isActive ? ('underline underline-offset-2 md:underline-0') : ('')} px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors` }>
                      {item.label}
                    </ListItem>);
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
} 

          // <div className="absolute top-20 right-5 bg-[#310D51] border border-[#BC9ED9] rounded-lg shadow-lg z-50 min-w-[200px]">
          //   <ul className="py-2 flex flex-col">
          //     <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
          //       <a href="/" className="block text-white font-semibold">Home</a>
          //     </li>
          //     <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
          //       <a href="/" className="block text-white font-semibold">About Us</a>
          //     </li>
          //     <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
          //       <a href="/events" className="block text-white font-semibold">Events</a>
          //     </li>
          //     <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
          //       <a href="/resources" className="block text-white font-semibold">Resources</a>
          //     </li>
          //     <li className="px-4 py-2 hover:bg-[#BC9ED9] hover:text-[#310D51] transition-colors">
          //       <a href="/" className="block text-white font-semibold">Contacts</a>
          //     </li>
