import React from 'react';
import Image from 'next/image';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function Discover() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#FFFFF0' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Column */}
        <div className="md:w-7/12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Discover our Indonesia tours</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              A <strong>customized tour of Indonesia</strong>: a dream trip! This vast country is so captivating, you can explore all sorts of destinations with your tailor-made tour. Hop on a bike and ride past rice paddies, venture into the jungle, and finish on a white sandy beach. Explore the islands with your private driver. We're happy to advise you, based on our own experience, on the most beautiful islands of Indonesia. Below, see our favorite sample island tours. Or how about a combination of multiple islands or a trip to <a href="#" className="text-blue-500 hover:underline">Malaysia</a>? Anything is possible.
            </p>
            <p>
              We are happy to help you put together an unforgettable tour to Indonesia, based on your wishes and our suggestions from our own travel experiences.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Both the well-known islands of Indonesia and the lesser-known islands</li>
              <li>Stay overnight in characteristic accommodations</li>
              <li>Advice from personal travel experiences of our specialists</li>
              <li>Tailor-made travel, completely according to your wishes; everything is possible!</li>
            </ul>
            <p>
              Also take a look at our <a href="#" className="text-blue-500 hover:underline">Indonesia building blocks</a>, which you can combine into a complete tour.
            </p>
          </div>
          <span className="text-blue-600 font-semibold mt-6 inline-block cursor-pointer hover:underline">
            Read more
          </span>
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>100% custom-made</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>From my own travel experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Travel worry-free</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-5/12">
          <div className="rounded-xl p-8 text-white" style={{ backgroundColor: '#2ec4b6' }}>
            <h3 className="text-2xl font-bold mb-6">Indonesia with MyIndoTravel</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><CheckIcon /> Rice fields and temples</li>
              <li className="flex items-center gap-3"><CheckIcon /> Orangutans in the jungle</li>
              <li className="flex items-center gap-3"><CheckIcon /> Bounty beaches on the Gili's</li>
              <li className="flex items-center gap-3"><CheckIcon /> Rituals of Torajaland</li>
              <li className="flex items-center gap-3"><CheckIcon /> Komodo dragons near Flores</li>
            </ul>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center gap-4">
              <Image 
                src="/indo_kids.jpg" 
                alt="Chantal" 
                width={60} 
                height={60} 
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">Do you have any questions?</p>
                <p className="font-semibold">I'm happy to help!</p>
                <p className="mt-1">Chantal</p>
              </div>
            </div>
            <div className="mt-6 text-center">
                <p className="font-bold">Excellent</p>
                <div className="flex items-center justify-center gap-1 my-1">
                    {/* Stars SVG */}
                </div>
                <p className="text-sm">829 reviews</p>
                {/* Trustpilot Logo */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 