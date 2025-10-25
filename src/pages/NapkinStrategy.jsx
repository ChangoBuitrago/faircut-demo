import { useEffect, useRef, useState } from 'react';

export default function NapkinStrategy() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 3; // Current Strategy, New Strategy, Digital Passport
  
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
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">Louis Erard Strategy</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">Selling, Not Distributing</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">50% direct, 50% selected retailers — self-sustainable and independent</p>
            </div>

            {/* Primary Market */}
            <div className="mb-12">
              <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">Primary Market</p>
              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4 text-xl text-gray-900 dark:text-white">
                  <span className="font-medium">You</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-medium">Collector</span>
                  <span className="ml-auto font-mono text-2xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                </div>
              </div>
            </div>

            {/* Secondary Market */}
            <div className="mb-16">
              <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">Secondary Market (Le Régulateur x Alain Silberstein — Chrono24)</p>
              <div className="bg-red-50/70 dark:bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-200 dark:border-red-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xl text-gray-900 dark:text-white">
                    <span className="font-medium">You</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-medium">Flipper</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-medium">New Collector</span>
                    <span className="ml-auto font-mono text-2xl font-bold text-red-600 dark:text-red-400">CHF 6,500 <span className="text-sm">(~116% markup)</span></span>
                  </div>
                  
                  {/* Lost Revenue Ticker */}
                  <div className="bg-red-100 dark:bg-red-900/40 rounded-lg px-4 py-2 border border-red-400 dark:border-red-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Flipper profit</span>
                      <div className="text-right">
                        <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">CHF 3,500</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-red-300 dark:border-red-600">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Your share</span>
                      <div className="text-right">
                        <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">CHF 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="pt-12 border-t border-gray-300 dark:border-gray-700">
              <div className="flex justify-center gap-12 max-w-6xl mx-auto">
                <div className="text-center flex-1">
                  <p className="text-2xl mb-3"><span className="font-bold text-red-600 dark:text-red-400">"Frustration"</span></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Real collectors can't buy at retail because flippers buy instantly and list immediately at markup</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-2xl mb-3"><span className="font-bold text-red-600 dark:text-red-400">"Headaches"</span></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Collectors buying secondhand face authenticity concerns, warranty issues, and condition uncertainties</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-2xl mb-3"><span className="font-bold text-red-600 dark:text-red-400">"Lost Community"</span></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">No connection between brand and secondary market collectors, missing opportunities to build lasting relationships</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 2: NEW STRATEGY --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">The Napkin Strategy</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">Selling And Distributing</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">100% control, zero cost, perpetual revenue — maintaining independence and self-sustainability</p>
            </div>

            {/* With Digital Passport Container */}
            <div className="mb-16 bg-gradient-to-br from-amber-50/70 to-orange-50/70 dark:from-amber-900/20 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-300 dark:border-amber-700">
              {/* Digital Passport Badge */}
              <div className="mb-6">
                <span className="inline-block bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400 dark:border-amber-600">
                  🔐 Watch With A Digital Passport
                </span>
              </div>

              {/* Primary Market */}
              <div className="mb-8">
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">Primary Market</p>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-xl text-gray-900 dark:text-white">
                    <span className="font-medium">You</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-medium">Collector</span>
                    <span className="ml-auto font-mono text-2xl font-bold text-gray-900 dark:text-white">CHF 3,000</span>
                  </div>
                </div>
              </div>

              {/* Secondary Market with Royalty */}
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">Secondary Market (Le Régulateur x Alain Silberstein — Chrono24)</p>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xl text-gray-900 dark:text-white">
                      <span className="font-medium">You</span>
                      <span className="text-gray-500">→</span>
                      <span className="font-medium">Reseller</span>
                      <span className="text-gray-500">→</span>
                      <span className="font-medium">New Collector</span>
                      <span className="ml-auto font-mono text-2xl font-bold">CHF 6,500</span>
                    </div>
                    
                    {/* Royalty Ticker */}
                    <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg px-4 py-2 border border-amber-300 dark:border-amber-700">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Reseller profit</span>
                        <div className="text-right">
                          <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">CHF 2,450</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-200 dark:border-amber-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Your share (30% royalty)</span>
                        <div className="text-right">
                          <span className="font-mono text-lg font-bold text-amber-600 dark:text-amber-400">CHF 1,050</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400 italic mt-1">Per resale. Perpetual.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="pt-12 border-t border-gray-300 dark:border-gray-700">
              <div className="flex justify-center gap-12 max-w-6xl mx-auto">
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold mb-3"><span className="text-orange-600 dark:text-orange-400">"Fair Access"</span></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Set time-based royalty rates (e.g., 90% first year) to eliminate flippers' margin, ensuring real collectors get priority access</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold mb-3"><span className="text-orange-600 dark:text-orange-400">"Trust & Security"</span></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Digital passport ensures authenticity, tracks warranty, and maintains condition history throughout ownership</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold mb-3"><span className="text-orange-600 dark:text-orange-400">"Connected Community"</span></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Like a dating app, you connect collectors with each other across the watch's lifetime, building lasting relationships and community</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SLIDE 3: DIGITAL PASSPORT EXAMPLE --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto z-10">
            
            {/* Title */}
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">Example</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3">Digital Passport</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Le Régulateur Louis Erard x Alain Silberstein</p>
            </div>

            {/* Digital Passport Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-amber-400 dark:border-amber-600 shadow-2xl">
              
              {/* Header with Lock Icon */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-amber-300 dark:border-amber-700">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">Le Régulateur</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Louis Erard × Alain Silberstein</p>
                </div>
                <div className="text-5xl">🔐</div>
              </div>

              {/* Watch Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Serial Number</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">LE-AS-2024-0042</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Edition</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Limited 178 pcs</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Retail Base Price</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">CHF 3,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Warranty</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Valid until Oct 2026</p>
                </div>
              </div>

              {/* Resale Royalties */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 mb-6 border border-gray-300 dark:border-gray-700">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Resale Royalties</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Year 1 (2024-2025)</span>
                    <span className="font-mono font-bold text-orange-600 dark:text-orange-400">90%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Year 2 (2025-2026)</span>
                    <span className="font-mono font-bold text-orange-600 dark:text-orange-400">60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Year 3+ (2026 onwards)</span>
                    <span className="font-mono font-bold text-orange-600 dark:text-orange-400">30%</span>
                  </div>
                </div>
              </div>

              {/* Additional Properties */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 border border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Authenticity</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">✓ Verified</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 border border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Ownership History</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">1 Transfer</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 border border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Service Records</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Up to date</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 border border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Insurance</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">✓ Active</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}

