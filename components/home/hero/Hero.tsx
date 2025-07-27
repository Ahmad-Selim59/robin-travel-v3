"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because we have a clone at 0
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const originalSlides = [
    {
      image: "/indo_kids.jpg",
      alt: "Children in Indonesia",
      title: "Indonesia travels"
    },
    {
      image: "/black_ops.jpg", 
      alt: "Black Ops Adventure",
      title: "Adventure travels"
    },
    {
      image: "/logo.png", 
      alt: "Logo Adventure",
      title: "Logo travels"
    }
  ];

  // Create slides with clones for infinite effect
  const slides = [
    originalSlides[originalSlides.length - 1], // Clone of last slide
    ...originalSlides,
    originalSlides[0] // Clone of first slide
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer whenever currentSlide changes

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      // If we're at the cloned first slide, jump to the real first slide
      if (currentSlide + 1 === slides.length - 1) {
        setCurrentSlide(1);
      }
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      // If we're at the cloned last slide, jump to the real last slide
      if (currentSlide - 1 === 0) {
        setCurrentSlide(originalSlides.length);
      }
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setCurrentSlide(index + 1); // +1 because of the cloned slide at index 0
  };

  // Get the current slide index for dot indicators (accounting for clones)
  const getCurrentSlideIndex = () => {
    if (currentSlide === 0) return originalSlides.length - 1;
    if (currentSlide === slides.length - 1) return 0;
    return currentSlide - 1;
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Carousel Images */}
      <div 
        ref={carouselRef}
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={`slide-${index}`} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              priority={index <= 2}
            />
            <div className="absolute inset-0 bg-opacity-30 flex items-center justify-start">
              <div className="ml-12 md:ml-24">
                <h1 className="text-white text-4xl md:text-6xl font-bold">{slide.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {originalSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              getCurrentSlideIndex() === index 
                ? 'bg-black' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 