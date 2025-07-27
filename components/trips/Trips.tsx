'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import tripsData from './tripsData.json';

interface Trip {
  id: number;
  location: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  itinerary: string[];
  highlights: string[];
  flightIncluded: boolean;
}

const CheckIcon = () => (
  <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

export default function Trips() {
  const [selectedLocation, setSelectedLocation] = useState<string>('Island combinations');
  const [priceSort, setPriceSort] = useState<'asc' | 'desc' | null>(null);

  // Get unique locations for filter buttons
  const locations = ['Island combinations', ...Array.from(new Set(tripsData.map(trip => trip.location)))];

  // Filter and sort trips
  const filteredAndSortedTrips = useMemo(() => {
    let filtered = selectedLocation === 'Island combinations' 
      ? tripsData 
      : tripsData.filter(trip => trip.location === selectedLocation);

    if (priceSort) {
      filtered = [...filtered].sort((a, b) => 
        priceSort === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    return filtered;
  }, [selectedLocation, priceSort]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#FFFFF0' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-6 py-3 rounded-full border-2 font-medium transition-colors ${
                selectedLocation === location
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-teal-700'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Price Sort Controls */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setPriceSort(priceSort === 'asc' ? null : 'asc')}
            className={`px-4 py-2 rounded border ${
              priceSort === 'asc' 
                ? 'bg-teal-700 text-white border-teal-700' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => setPriceSort(priceSort === 'desc' ? null : 'desc')}
            className={`px-4 py-2 rounded border ${
              priceSort === 'desc' 
                ? 'bg-teal-700 text-white border-teal-700' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            Price: High to Low
          </button>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedTrips.map((trip: Trip) => (
            <div key={trip.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-lg">
                  <div className="text-lg font-bold">{trip.duration.split(' ')[0]}</div>
                  <div className="text-sm">to dawn</div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-teal-700 text-white text-xs px-2 py-1 rounded-full">
                    {trip.id}
                  </span>
                  <span className="text-gray-600 text-sm">Indonesia Tour</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">{trip.title}</h3>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {trip.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <CheckIcon />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Itinerary */}
                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Itinerary: </span>
                  <span className="text-gray-600 text-sm">
                    {trip.itinerary.join(' > ')}
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-end mt-4">
                  <div className="flex-1 pr-4">
                    <div className="text-sm text-gray-600">From</div>
                    <div className="text-2xl font-bold text-gray-800">€ {trip.price} per person</div>
                    <div className="text-xs text-gray-500">
                      Flight {trip.flightIncluded ? 'included' : 'can be booked optionally'}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors whitespace-nowrap">
                      View this tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 