[33mcommit 8a582124f212709e4c9c1c0f8de7a99f73461bd4[m
Author: ahmad-selim59 <ahmad22selim@gmail.com>
Date:   Tue Aug 5 20:36:31 2025 +0100

    adding navbar routing for destinations

[1mdiff --git a/components/navbar/Navbar.tsx b/components/navbar/Navbar.tsx[m
[1mindex 7b07b1a..00157ba 100644[m
[1m--- a/components/navbar/Navbar.tsx[m
[1m+++ b/components/navbar/Navbar.tsx[m
[36m@@ -2,13 +2,18 @@[m
 [m
 import Image from "next/image";[m
 import Link from "next/link";[m
[31m-import { useState, useEffect } from "react";[m
[32m+[m[32mimport { useState, useEffect, useRef } from "react";[m
 import LogoBackground from "./LogoBackground";[m
[32m+[m[32mimport tripsData from "../trips/tripsData.json";[m
 [m
 export default function Navbar() {[m
   const [isMenuOpen, setIsMenuOpen] = useState(false);[m
   const [isVisible, setIsVisible] = useState(true);[m
   const [lastScrollY, setLastScrollY] = useState(0);[m
[32m+[m[32m  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);[m
[32m+[m[32m  const dropdownRef = useRef<HTMLDivElement>(null);[m
[32m+[m
[32m+[m[32m  const locations = Array.from(new Set(tripsData.map(trip => trip.location)));[m
 [m
   useEffect(() => {[m
     const handleScroll = () => {[m
[36m@@ -35,6 +40,20 @@[m [mexport default function Navbar() {[m
     };[m
   }, [lastScrollY]);[m
 [m
[32m+[m[32m  // Close dropdown when clicking outside[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    const handleClickOutside = (event: MouseEvent) => {[m
[32m+[m[32m      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {[m
[32m+[m[32m        setIsDestinationsOpen(false);[m
[32m+[m[32m      }[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    document.addEventListener('mousedown', handleClickOutside);[m
[32m+[m[32m    return () => {[m
[32m+[m[32m      document.removeEventListener('mousedown', handleClickOutside);[m
[32m+[m[32m    };[m
[32m+[m[32m  }, []);[m
[32m+[m
   return ([m
     <nav [m
       className={`w-full flex items-center relative h-16 sticky top-0 z-50 transition-all duration-300 ease-in-out ${[m
[36m@@ -64,11 +83,45 @@[m [mexport default function Navbar() {[m
       <div className="flex-1 flex items-center justify-between px-6 py-2">[m
         {/* Desktop Navigation */}[m
         <div className="hidden md:flex items-center justify-between w-full text-white font-medium">[m
[31m-          {/* All items are direct children, spaced out equally by the parent container */}[m
[31m-          <Link href="/destinations" className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">[m
[31m-            Destinations [m
[31m-            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>[m
[31m-          </Link>[m
[32m+[m[32m          {/* Destinations Dropdown */}[m
[32m+[m[32m          <div className="relative" ref={dropdownRef}>[m
[32m+[m[32m            <div[m[41m [m
[32m+[m[32m              className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors"[m
[32m+[m[32m              onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}[m
[32m+[m[32m            >[m
[32m+[m[32m              <Link href="/destinations" onClick={(e) => e.stopPropagation()}>Destinations</Link>[m
[32m+[m[32m              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">[m
[32m+[m[32m                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />[m
[32m+[m[32m              </svg>[m
[32m+[m[32m            </div>[m
[32m+[m[41m            [m
[32m+[m[32m            {/* Dropdown Menu */}[m
[32m+[m[32m            {isDestinationsOpen && ([m
[32m+[m[32m              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border z-50">[m
[32m+[m[32m                <div className="py-2">[m
[32m+[m[32m                  <Link[m[41m [m
[32m+[m[32m                    href="/destinations"[m[41m [m
[32m+[m[32m                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"[m
[32m+[m[32m                    onClick={() => setIsDestinationsOpen(false)}[m
[32m+[m[32m                  >[m
[32m+[m[32m                    All Destinations[m
[32m+[m[32m                  </Link>[m
[32m+[m[32m                  <div className="border-t my-2"></div>[m
[32m+[m[32m                  {locations.map((location) => ([m
[32m+[m[32m                    <Link[m
[32m+[m[32m                      key={location}[m
[32m+[m[32m                      href={`/destinations?location=${encodeURIComponent(location)}`}[m
[32m+[m[32m                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"[m
[32m+[m[32m                      onClick={() => setIsDestinationsOpen(false)}[m
[32m+[m[32m                    >[m
[32m+[m[32m                      {location}[m
[32m+[m[32m                    </Link>[m
[32m+[m[32m                  ))}[m
[32m+[m[32m                </div>[m
[32m+[m[32m              </div>[m
[32m+[m[32m            )}[m
[32m+[m[32m          </div>[m
[32m+[m
           <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">[m
             Inspiration [m
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>[m
[36m@@ -103,9 +156,26 @@[m [mstrokeWidth={2} d="M19 9l-7 7-7-7" /></svg>[m
       {isMenuOpen && ([m
         <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">[m
           <div className="py-4 px-6 space-y-4">[m
[31m-            <Link href="/destinations" className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800">[m
[32m+[m[32m            <Link[m[41m [m
[32m+[m[32m              href="/destinations"[m[41m [m
[32m+[m[32m              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800"[m
[32m+[m[32m              onClick={() => setIsMenuOpen(false)}[m
[32m+[m[32m            >[m
               Destinations <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>[m
             </Link>[m
[32m+[m[32m            {/* Mobile Destinations Submenu */}[m
[32m+[m[32m            <div className="ml-4 space-y-2">[m
[32m+[m[32m              {locations.map((location) => ([m
[32m+[m[32m                <Link[m
[32m+[m[32m                  key={location}[m
[32m+[m[32m                  href={`/destinations?location=${encodeURIComponent(location)}`}[m
[32m+[m[32m                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"[m
[32m+[m[32m                  onClick={() => setIsMenuOpen(false)}[m
[32m+[m[32m                >[m
[32m+[m[32m                  {location}[m
[32m+[m[32m                </Link>[m
[32m+[m[32m              ))}[m
[32m+[m[32m            </div>[m
             <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-800">[m
               Inspiration <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>[m
             </div>[m

[33mcommit 9349207196be793dd984f4158a1a5eefbd38e8a1[m
Author: ahmad-selim59 <ahmad22selim@gmail.com>
Date:   Tue Aug 5 17:01:50 2025 +0100

    addind top seller and destinations page

[1mdiff --git a/components/navbar/Navbar.tsx b/components/navbar/Navbar.tsx[m
[1mindex e995078..7b07b1a 100644[m
[1m--- a/components/navbar/Navbar.tsx[m
