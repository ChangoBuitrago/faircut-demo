import { useRef, useEffect, useState } from 'react';
import StorySlides from '../components/StorySlides';
import BusinessSlides from '../components/BusinessSlides';
import FairCutSlide from '../components/FairCutSlide';

// Main component for the landing page presentation
export default function Landing() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSlides = 17; // Updated to 17 slides

  // Effect for handling mouse wheel scroll navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSlide = currentSlide + direction;

      if (nextSlide >= 0 && nextSlide < totalSlides) {
        isScrollingRef.current = true;
        setCurrentSlide(nextSlide);
        
        const targetSection = container.children[nextSlide];
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Timeout to prevent rapid scrolling
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSlide]);

  // Effect for updating the current slide based on viewport visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            const index = Array.from(container.children).indexOf(entry.target);
            if (index !== -1) {
              setCurrentSlide(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the slide is visible
    );

    Array.from(container.children).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  // Effect for handling keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return;

      let nextSlide = currentSlide;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide = Math.min(currentSlide + 1, totalSlides - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        nextSlide = Math.max(currentSlide - 1, 0);
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextSlide = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextSlide = totalSlides - 1;
      }

      if (nextSlide !== currentSlide) {
        isScrollingRef.current = true;
        setCurrentSlide(nextSlide);
        containerRef.current?.children[nextSlide]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  // Determine which section we're in based on currentSlide
  const getCurrentSection = () => {
    if (currentSlide >= 0 && currentSlide <= 6) return 'story';
    if (currentSlide >= 7 && currentSlide <= 15) return 'business';
    if (currentSlide === 16) return 'summary';
    return 'story';
  };

  const jumpToSection = (section) => {
    let targetSlide = 0;
    if (section === 'story') targetSlide = 0;
    else if (section === 'business') targetSlide = 7;
    else if (section === 'summary') targetSlide = 16;
    
    setCurrentSlide(targetSlide);
    containerRef.current?.children[targetSlide]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentSection = getCurrentSection();

  return (
    <>
      {/* Left Section Navigation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
        <button
          onClick={() => jumpToSection('story')}
          className={`group flex items-center gap-3 transition-all duration-300 ${
            currentSection === 'story' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          }`}
          aria-label="Jump to Story section"
        >
          <div className={`h-12 w-1 rounded-full transition-all duration-300 ${
            currentSection === 'story' 
              ? 'bg-gray-900 dark:bg-gray-100' 
              : 'bg-gray-400 dark:bg-gray-600'
          }`}></div>
          <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
            currentSection === 'story'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-600'
          }`} style={{ writingMode: 'horizontal-tb' }}>
            The Story
          </span>
        </button>

        <button
          onClick={() => jumpToSection('business')}
          className={`group flex items-center gap-3 transition-all duration-300 ${
            currentSection === 'business' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          }`}
          aria-label="Jump to Business section"
        >
          <div className={`h-12 w-1 rounded-full transition-all duration-300 ${
            currentSection === 'business' 
              ? 'bg-gray-900 dark:bg-gray-100' 
              : 'bg-gray-400 dark:bg-gray-600'
          }`}></div>
          <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
            currentSection === 'business'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-600'
          }`} style={{ writingMode: 'horizontal-tb' }}>
            The Business
          </span>
        </button>

        <button
          onClick={() => jumpToSection('summary')}
          className={`group flex items-center gap-3 transition-all duration-300 ${
            currentSection === 'summary' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          }`}
          aria-label="Jump to Summary section"
        >
          <div className={`h-12 w-1 rounded-full transition-all duration-300 ${
            currentSection === 'summary' 
              ? 'bg-gray-900 dark:bg-gray-100' 
              : 'bg-gray-400 dark:bg-gray-600'
          }`}></div>
          <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
            currentSection === 'summary'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-600'
          }`} style={{ writingMode: 'horizontal-tb' }}>
            FAIRCUT
          </span>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              containerRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-2 h-6 bg-gray-800 dark:bg-gray-200' 
                : 'w-2 h-2 bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
          
      <div ref={containerRef} className="smooth-scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Story Slides (1-7) */}
        <StorySlides />

        {/* Business Slides (8-16) */}
        <BusinessSlides />

        {/* FairCut Slide (17) */}
        <FairCutSlide />

      </div>
    </>
  );
}
