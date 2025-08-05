"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoBackground from "./LogoBackground";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 50) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`w-full flex items-center relative h-16 sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`} 
      style={{ background: "var(--navbar-bg)" }}
    >
      {/* Left section with the correct background */}
      <div className="relative w-[20%] h-full">
        <LogoBackground />
        
        {/* The logo on top */}
        <div className="absolute inset-0 z-10 h-full flex items-center justify-center pr-8">
          <Link href="/" className="flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={210} 
              height={210}
              className="hover:opacity-80 transition-opacity object-contain" 
            />
          </Link>
        </div>
      </div>
      
      {/* Right section with navigation */}
      <div className="flex-1 flex items-center justify-between px-6 py-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full text-white font-medium">
          {/* All items are direct children, spaced out equally by the parent container */}
          <Link href="/destinations" className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
            Destinations 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
            Inspiration 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
            About us 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="flex items-center text-white font-medium cursor-pointer hover:text-gray-200 transition-colors">
            <span className="mr-2">📞</span>0299-475083 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm">
            Request a travel proposal
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-end w-full">
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <div className="py-4 px-6 space-y-4">
            <Link href="/destinations" className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800">
              Destinations <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800">
              Inspiration <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800">
              About us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800 pt-2 border-t">
              <span className="mr-2">📞</span>0299-475083 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="pt-2 border-t">
                <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-colors">
                  Request a travel proposal
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 