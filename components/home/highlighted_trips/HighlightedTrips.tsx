'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import highlightedTripsData from './highlightedTripsData.json';

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

export default function HighlightedTrips() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#FFFFF0' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Top Sellers
          </h2>
          <p className="text-xl text-gray-600">
            Most popular Indonesia travel experiences
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedTripsData.map((trip: Trip) => (
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
                  <div className="text-sm">days</div>
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/destinations">
            <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
              View All Destinations
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 