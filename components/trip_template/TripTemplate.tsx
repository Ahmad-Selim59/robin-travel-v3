'use client';

import React from 'react';
import Image from 'next/image';

interface Trip {
  id: number;
  location: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  header_image: string;
  itinerary: string[];
  highlights: string[];
  flightIncluded: boolean;
}

interface TripTemplateProps {
  trip: Trip;
  children?: React.ReactNode;
}

export default function TripTemplate({ trip, children }: TripTemplateProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFF0' }}>
      {/* Header Section */}
      <div className="relative h-96 w-full">
        {/* Background Image */}
        <Image
          src={trip.header_image}
          alt={trip.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-40" />
        
        {/* Header Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          {/* Indonesia Tour Text */}
          <div className="mb-4">
            <span className="text-lg md:text-xl font-medium tracking-wide uppercase">
              Indonesia Tour
            </span>
          </div>
          
          {/* Trip Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {trip.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div>
        {children}
      </div>
    </div>
  );
} 