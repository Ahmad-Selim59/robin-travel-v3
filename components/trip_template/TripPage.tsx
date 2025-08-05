'use client';

import React from 'react';
import Image from 'next/image';
import { TripTemplate } from './index';

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

interface TripPageProps {
  trip: Trip;
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function TripPage({ trip }: TripPageProps) {
  return (
    <TripTemplate trip={trip}>
      {/* Trip Content */}
      <div className="max-w-6xl mx-auto px-4 py-16" style={{ backgroundColor: '#FFFFF0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Trip Overview */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-teal-700 text-white text-sm px-3 py-1 rounded-full">
                  {trip.duration}
                </span>
                <span className="text-gray-600">•</span>
                <span className="bg-teal-700 text-white text-sm px-3 py-1 rounded-full">{trip.location}</span>
              </div>

              <Image
                src={trip.image}
                alt={trip.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </div>

            {/* Highlights Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trip.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckIcon />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Itinerary</h2>
              <div className="space-y-4">
                {trip.itinerary.map((destination, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border-l-4 border-teal-700 bg-gray-50">
                    <div className="bg-teal-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{destination}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6" style={{ backgroundColor: '#2ec4b6' }}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Trip Details</h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">Price from</div>
                <div className="text-3xl font-bold text-gray-800">€{trip.price}</div>
                <div className="text-sm text-gray-600">per person</div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="text-lg font-semibold text-gray-800">{trip.duration}</div>
              </div>

              {/* Flight Info */}
              <div className="mb-8">
                <div className="text-sm text-gray-600 mb-1">Flight</div>
                <div className="text-sm text-gray-800">
                  {trip.flightIncluded ? 'Included in price' : 'Can be booked optionally'}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                Book This Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </TripTemplate>
  );
} 