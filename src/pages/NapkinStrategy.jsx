import { useEffect, useRef, useState } from 'react';
import { FileText, Edit3, Tag, Calendar, Baseline, Clock, Percent, Wrench, Users, ArrowRight, CornerDownRight } from 'lucide-react';

export default function NapkinStrategy() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 4; // Current Strategy, New Strategy, Digital Passport, Transfer Flow
  
  // Digital Passport data
  const watchMintTimestamp = new Date('2021-01-15').getTime();
  const transferLockEndDateTimestamp = new Date('2021-07-15').getTime();
  const isTransferLockActive = Date.now() < transferLockEndDateTimestamp;
  const activeRoyaltyTier = 'Year 3+'; // Can be 'Year 1', 'Year 2', or 'Year 3+'
  const serviceLogStatus = "Verified";
  const communityAccessStatus = "Enabled";
  
  // Helper functions
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };
  
  // Effect to ensure page starts at the top on load
  useEffect(() => {
    setCurrentSection(0);
    
    const forceScrollToTop = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
        containerRef.current.scrollTo(0, 0);
      }
      window.scrollTo(0, 0);
    };

    forceScrollToTop();
    const timeoutId = setTimeout(forceScrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Effect for handling mouse wheel scroll navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < totalSections) {
        isScrollingRef.current = true;
        setCurrentSection(nextSection);
        
        const targetSection = container.children[nextSection];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  // Effect for updating the current section based on viewport visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTop = 0;
    setCurrentSection(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            const index = Array.from(container.children).indexOf(entry.target);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const timeoutId = setTimeout(() => {
      Array.from(container.children).forEach((child) => {
        observer.observe(child);
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Effect for handling keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return;

      let nextSection = currentSection;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextSection = Math.min(currentSection + 1, totalSections - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        nextSection = Math.max(currentSection - 1, 0);
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextSection = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextSection = totalSections - 1;
      }

      if (nextSection !== currentSection) {
        isScrollingRef.current = true;
        setCurrentSection(nextSection);
        const targetSection = containerRef.current?.children[nextSection];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, totalSections]);

  return (
    <>
      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSection(index);
              const targetSection = containerRef.current?.children[index];
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSection 
                ? 'w-2 h-6 bg-slate-800 dark:bg-slate-200' 
                : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-400'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Faircut Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
          Faircut
        </div>
      </div>

      <div ref={containerRef} className="smooth-scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{scrollBehavior: 'smooth'}}>
        
        {/* --- SLIDE 1: CURRENT STRATEGY --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Louis Erard Strategy</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Selling, Not Distributing</h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">50% direct, 50% selected retailers — self-sustainable and independent</p>
            </div>

            {/* Primary Market */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4 text-lg text-gray-900 dark:text-white">
                  <span className="font-medium">Brand</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-medium">Collector</span>
                  <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                </div>
              </div>
            </div>

            {/* Secondary Market */}
            <div className="mb-8">
              <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Le Régulateur x Alain Silberstein — Chrono24)</p>
              <div className="bg-red-50/70 dark:bg-red-900/20 backdrop-blur-sm rounded-2xl p-4 border border-red-200 dark:border-red-800">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-lg text-gray-900 dark:text-white">
                    <span className="font-medium">Brand</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-medium">Flipper</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-medium">New Collector</span>
                    <span className="ml-auto font-mono text-xl font-bold text-red-600 dark:text-red-400">CHF 6,500 <span className="text-sm">(~116% markup)</span></span>
                  </div>
                  
                  {/* Lost Revenue Ticker */}
                  <div className="bg-red-100 dark:bg-red-900/40 rounded-lg px-3 py-2 border border-red-400 dark:border-red-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Flipper profit</span>
                      <div className="text-right">
                        <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 3,500</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-red-300 dark:border-red-600">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Brand share</span>
                      <div className="text-right">
                        <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
              <div className="flex justify-center gap-6 max-w-6xl mx-auto px-4">
                <div className="text-center flex-1">
                  <p className="text-xl mb-2"><span className="font-bold text-red-600 dark:text-red-400">"Frustration"</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Real collectors can't buy at retail because flippers buy instantly and list immediately at markup. Brand loses huge profits to resellers.</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-xl mb-2"><span className="font-bold text-red-600 dark:text-red-400">"Headaches"</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Collectors buying secondhand face authenticity concerns, warranty issues, and condition uncertainties</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-xl mb-2"><span className="font-bold text-red-600 dark:text-red-400">"Lost Community"</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">No connection between brand and secondary market collectors, missing opportunities to build lasting relationships</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 2: NEW STRATEGY --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">The Napkin Strategy</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Selling And Distributing,<br /><span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">With A Digital Passport</span></h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">100% control, zero cost, perpetual revenue — maintaining independence and self-sustainability</p>
            </div>

            {/* With Digital Passport Container */}
            <div className="mb-8 bg-gradient-to-br from-amber-50/70 to-orange-50/70 dark:from-amber-900/20 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl p-5 border border-amber-300 dark:border-amber-700">
              {/* Digital Passport Badge */}
              <div className="mb-4">
                <span className="inline-block bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400 dark:border-amber-600">
                  🔐 Watch With A Digital Passport
                </span>
              </div>

              {/* Primary Market */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Primary Market</p>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-lg text-gray-900 dark:text-white">
                    <span className="font-medium">Brand</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-medium">Collector</span>
                    <span className="ml-auto font-mono text-xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                  </div>
                </div>
              </div>

              {/* Secondary Market with Royalty */}
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-3">Secondary Market (Le Régulateur x Alain Silberstein — Chrono24)</p>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-gray-300 dark:border-gray-700">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-lg text-gray-900 dark:text-white">
                      <span className="font-medium">Brand</span>
                      <span className="text-gray-500">→</span>
                      <span className="font-medium">Reseller</span>
                      <span className="text-gray-500">→</span>
                      <span className="font-medium">New Collector</span>
                      <span className="ml-auto font-mono text-xl font-bold">CHF 6,500</span>
                    </div>
                    
                    {/* Royalty Ticker */}
                    <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg px-3 py-2 border border-amber-300 dark:border-amber-700">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Reseller profit</span>
                        <div className="text-right">
                          <span className="font-mono text-base font-bold text-gray-900 dark:text-white">CHF 2,450</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-200 dark:border-amber-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Brand share (30% royalty)</span>
                        <div className="text-right">
                          <span className="font-mono text-base font-bold text-amber-600 dark:text-amber-400">CHF 1,050</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400 italic mt-1">Per resale. Perpetual.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
              <div className="flex justify-center gap-6 max-w-6xl mx-auto px-4">
                <div className="text-center flex-1">
                  <p className="text-xl font-bold mb-2"><span className="text-orange-600 dark:text-orange-400">"Fair Access"</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Dynamic royalties (90% Yr 1, 60% Yr 2, 15% Yr 3+) eliminate flippers' margin and return profits to the brand. Transfer locks (first 6 months) ensure real collectors get priority access.</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-xl font-bold mb-2"><span className="text-orange-600 dark:text-orange-400">"Trust & Security"</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Digital passport ensures authenticity, tracks warranty, and maintains condition history throughout ownership</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-xl font-bold mb-2"><span className="text-orange-600 dark:text-orange-400">"Connected Community"</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Like a dating app, you connect collectors with each other across the watch's lifetime, building lasting relationships and community</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: THE DIGITAL PASSPORT (Visual & Simplified) --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-[Inter]">
          {/* Content container */}
          <div className="w-full max-w-4xl mx-auto space-y-4">

            {/* Title */}
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-1 uppercase tracking-wider">Proof of Concept</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 dark:text-white mb-1">The Digital Passport</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">Programmable rules, immutable history, perpetual revenues, turning collectors into community</p>
            </div>

            {/* Passport Visual Mockup Area */}
            <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl shadow-xl border-2 border-amber-200 dark:border-amber-800 overflow-hidden">
              {/* Header with Brand and Badge */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 px-4 py-2 border-b border-amber-200 dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">Louis Erard</span>
                    <h3 className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">Le Régulateur x Alain Silberstein</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full text-xs font-semibold border border-green-300 dark:border-green-700">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              
              {/* Main Content Flex Container */}
              <div className="flex flex-col md:flex-row gap-3 p-3 items-start">
                  {/* Left Column: Core Info + Rules */}
                  <div className="flex-1 space-y-2.5">
                      
                      {/* Watch Details & Image */}
                      <div className="flex gap-3 items-start">
                          {/* Details Block */}
                          <div className="space-y-1.5 text-xs flex-1">
                              <div className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Owner:</span>
                                <span className="font-semibold text-neutral-900 dark:text-white">Manuel Emch</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Ref:</span>
                                <span className="font-mono font-semibold text-neutral-900 dark:text-white">85358TT02.BTT88</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Edit3 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Edition:</span>
                                <span className="font-semibold text-neutral-900 dark:text-white">#042 / 178</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Tag className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Serial:</span>
                                <span className="font-mono font-semibold text-neutral-900 dark:text-white">LE-AS-2021-042</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-neutral-500 dark:text-neutral-400">Issued:</span>
                                <span className="font-semibold text-neutral-900 dark:text-white">{formatDate(watchMintTimestamp)}</span>
                              </div>
                          </div>
                          {/* Watch Image */}
                          <div className="w-28 h-auto flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-1.5 border-2 border-amber-200 dark:border-amber-800 shadow-md">
                              <img
                                src="https://img.chrono24.com/images/uhren/26746621-zpbgyrk9dwrlxwziwnej4dcs-Zoom.jpg"
                                alt="Watch"
                                className="max-w-full h-auto object-contain"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x120/e2e8f0/cbd5e1?text=Img'; }}
                              />
                          </div>
                      </div>

                      {/* Programmable Rules Display */}
                      <div className="pt-2 mt-2 border-t-2 border-neutral-200 dark:border-neutral-700 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-0.5 h-3 bg-amber-500 dark:bg-amber-600 rounded-full"></div>
                            <p className="text-xs text-neutral-900 dark:text-white uppercase tracking-wider font-bold">Programmable Rules</p>
                          </div>
                          
                          {/* Base Resale Price */}
                          <div className="flex items-center justify-between p-2 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700" title="Minimum price for royalty calculation">
                              <div className="flex items-center gap-1.5">
                                <Baseline className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0"/>
                                <span className="text-xs text-neutral-600 dark:text-neutral-400">Base Resale Price</span>
                              </div>
                              <span className="font-mono text-xs tabular-nums font-bold text-neutral-900 dark:text-white">CHF {formatNumber(3000)}</span>
                          </div>
                           {/* Transfer Lock Rule Display */}
                          <div className={`flex items-center justify-between p-2 rounded-lg border ${isTransferLockActive ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700' : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700'}`} title={`Transfer lock active for first 6 months. Ends ${formatDate(transferLockEndDateTimestamp)}`}>
                              <div className="flex items-center gap-1.5">
                                <Clock className={`w-3.5 h-3.5 flex-shrink-0 ${isTransferLockActive ? 'text-red-600 dark:text-red-500' : 'text-amber-600 dark:text-amber-500'}`}/>
                                <span className={`text-xs ${isTransferLockActive ? 'text-red-600 dark:text-red-400' : 'text-neutral-600 dark:text-neutral-400'}`}>Transfer Lock</span>
                              </div>
                              <span className={`text-xs font-bold ${isTransferLockActive ? 'text-red-700 dark:text-red-300' : 'text-neutral-900 dark:text-white'}`}>
                                  {isTransferLockActive ? 'Active' : formatDate(transferLockEndDateTimestamp)}
                              </span>
                          </div>
                          
                          {/* Royalty Rules Display */}
                          <div className="space-y-1">
                              <div className={`flex items-center justify-between p-2 rounded-lg border ${activeRoyaltyTier === 'Year 1' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700' : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700'}`} title="Royalty within first year">
                                  <div className="flex items-center gap-1.5">
                                    <Percent className={`w-3.5 h-3.5 flex-shrink-0 ${activeRoyaltyTier === 'Year 1' ? 'text-amber-600 dark:text-amber-500' : 'text-neutral-400 dark:text-neutral-500'}`}/>
                                    <span className={`text-xs ${activeRoyaltyTier === 'Year 1' ? 'text-amber-900 dark:text-amber-200' : 'text-neutral-600 dark:text-neutral-400'}`}>Year 1 Royalty</span>
                                  </div>
                                  <span className={`font-mono text-xs font-bold ${activeRoyaltyTier === 'Year 1' ? 'text-amber-900 dark:text-amber-100' : 'text-neutral-900 dark:text-white'}`}>90%</span>
                              </div>
                              <div className={`flex items-center justify-between p-2 rounded-lg border ${activeRoyaltyTier === 'Year 2' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700' : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700'}`} title="Royalty during second year">
                                  <div className="flex items-center gap-1.5">
                                    <Percent className={`w-3.5 h-3.5 flex-shrink-0 ${activeRoyaltyTier === 'Year 2' ? 'text-amber-600 dark:text-amber-500' : 'text-neutral-400 dark:text-neutral-500'}`}/>
                                    <span className={`text-xs ${activeRoyaltyTier === 'Year 2' ? 'text-amber-900 dark:text-amber-200' : 'text-neutral-600 dark:text-neutral-400'}`}>Year 2 Royalty</span>
                                  </div>
                                  <span className={`font-mono text-xs font-bold ${activeRoyaltyTier === 'Year 2' ? 'text-amber-900 dark:text-amber-100' : 'text-neutral-900 dark:text-white'}`}>60%</span>
                              </div>
                              <div className={`flex items-center justify-between p-2 rounded-lg border ${activeRoyaltyTier === 'Year 3+' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700' : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700'}`} title="Royalty after two years">
                                  <div className="flex items-center gap-1.5">
                                    <Percent className={`w-3.5 h-3.5 flex-shrink-0 ${activeRoyaltyTier === 'Year 3+' ? 'text-amber-600 dark:text-amber-500' : 'text-neutral-400 dark:text-neutral-500'}`}/>
                                    <span className={`text-xs ${activeRoyaltyTier === 'Year 3+' ? 'text-amber-900 dark:text-amber-200' : 'text-neutral-600 dark:text-neutral-400'}`}>Year 3+ Royalty</span>
                                  </div>
                                  <span className={`font-mono text-xs font-bold ${activeRoyaltyTier === 'Year 3+' ? 'text-amber-900 dark:text-amber-100' : 'text-neutral-900 dark:text-white'}`}>15%</span>
                              </div>
                          </div>
                          
                          {/* Service Log Status */}
                          <div className={`flex items-center justify-between p-2 rounded-lg border ${serviceLogStatus === "Verified" ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700' : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700'}`} title="Service history verifiable">
                              <div className="flex items-center gap-1.5">
                                <Wrench className={`w-3.5 h-3.5 flex-shrink-0 ${serviceLogStatus === "Verified" ? 'text-green-600 dark:text-green-500' : 'text-neutral-400 dark:text-neutral-500'}`}/>
                                <span className={`text-xs ${serviceLogStatus === "Verified" ? 'text-green-900 dark:text-green-200' : 'text-neutral-600 dark:text-neutral-400'}`}>Service Log</span>
                              </div>
                              <span className={`text-xs font-bold ${serviceLogStatus === "Verified" ? 'text-green-700 dark:text-green-300' : 'text-neutral-900 dark:text-white'}`}>{serviceLogStatus}</span>
                          </div>
                          
                          {/* Community Access Status */}
                          <div className={`flex items-center justify-between p-2 rounded-lg border ${communityAccessStatus === "Enabled" ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700' : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700'}`} title="Access to owner community & perks">
                              <div className="flex items-center gap-1.5">
                                <Users className={`w-3.5 h-3.5 flex-shrink-0 ${communityAccessStatus === "Enabled" ? 'text-green-600 dark:text-green-500' : 'text-neutral-400 dark:text-neutral-500'}`}/>
                                <span className={`text-xs ${communityAccessStatus === "Enabled" ? 'text-green-900 dark:text-green-200' : 'text-neutral-600 dark:text-neutral-400'}`}>Community Access</span>
                              </div>
                              <span className={`text-xs font-bold ${communityAccessStatus === "Enabled" ? 'text-green-700 dark:text-green-300' : 'text-neutral-900 dark:text-white'}`}>{communityAccessStatus}</span>
                          </div>
                      </div>
                  </div>
              </div> {/* End Main Flex Container */}
            </div> {/* End Passport Card */}

            {/* SECTION: Brand-Defined Rules & Benefits Tiles */}
            <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-widest font-medium text-center">Programmable Rules & Benefits</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                {/* Dynamic Royalties */}
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Percent className="w-4 h-4 mx-auto mb-1 text-amber-600 dark:text-amber-500"/>
                  <p className="text-xs font-medium">Dynamic Royalties</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 flex-grow">Capture higher % on quick flips (e.g., 90% Yr 1, 60% Yr 2, 15% Yr 3+).</p>
                </div>
                {/* Anti-Flipping Cooldown */}
                 <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Clock className="w-4 h-4 mx-auto mb-1 text-amber-600 dark:text-amber-500"/>
                  <p className="text-xs font-medium">Anti-Flipping Rules</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 flex-grow">Implement transfer locks (e.g., first 6 months) to discourage immediate speculation.</p>
                </div>
                 {/* Service History */}
                 <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Wrench className="w-4 h-4 mx-auto mb-1 text-amber-600 dark:text-amber-500"/>
                  <p className="text-xs font-medium">Verified Service Log</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 flex-grow">Build trust & value: only official centers can update the immutable service history.</p>
                </div>
                 {/* Owner Perks & Community */}
                 <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 h-full flex flex-col items-center">
                  <Users className="w-4 h-4 mx-auto mb-1 text-amber-600 dark:text-amber-500"/>
                  <p className="text-xs font-medium">Connected Community</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 flex-grow">Fulfill the 'dating site' vision: connect owners, offer perks, discounts & early access.</p>
                </div>
              </div>
            </div>

          </div>
        </section> {/* End Section 3 */}

         {/* --- SECTION 4: THE TRANSFER FLOW --- */}
         <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-[Inter]">
           {/* Content container */}
           <div className="w-full max-w-4xl mx-auto space-y-8">

             {/* Title */}
             <div className="text-center">
               <h2 className="text-3xl md:text-4xl font-light mb-2 tracking-tight">The Royalty-Enforced Transfer</h2>
               <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-widest font-medium">Simple, Secure & Automated</p>
             </div>

             {/* Simplified Transfer Flow - Centered and Enlarged */}
             <div className="space-y-4">
               <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-sm text-center text-neutral-700 dark:text-neutral-300">
                   <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 w-full md:w-auto">1. Seller lists price</div>
                   <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 hidden md:block" />
                    <CornerDownRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 md:hidden my-1" />
                   <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 w-full md:w-auto">2. Hub enforces rules & royalty</div>
                   <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 hidden md:block" />
                   <CornerDownRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 md:hidden my-1" />
                   <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 w-full md:w-auto">3. Seller pays royalty</div>
                   <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 hidden md:block" />
                   <CornerDownRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 md:hidden my-1" />
                   <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 w-full md:w-auto font-semibold">4. Passport transfers</div>
               </div>
             </div>

           </div>
         </section> {/* End Section 4 */}

      </div>
    </>
  );
}

