import { useEffect, useRef, useState } from 'react';
import { Github, Twitter, MessageCircle, BookOpen } from 'lucide-react';

export default function FaircutLandingPageV2() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 7; // Hero, Problem, Solution, Benefits, Calculator, Partnership, CTA
  
  const [sliderValues, setSliderValues] = useState({
    avgItemPrice: 3000,
    resaleMarkup: 116,
    royaltyRate: 30,
    itemsSold: 500,
    lifetimeResales: 2
  });
  
  const [calculatedRevenue, setCalculatedRevenue] = useState(0);
  const [totalResellerProfit, setTotalResellerProfit] = useState(0);

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

  // Format currency helper
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).format(value);
  };

  // Calculate revenue based on slider values
  const calculateRevenue = () => {
    const { avgItemPrice, itemsSold, resaleMarkup, royaltyRate, lifetimeResales } = sliderValues;

    if (itemsSold === 0) {
      setCalculatedRevenue(0);
      setTotalResellerProfit(0);
      return;
    }

    const profitPerResale = avgItemPrice * (resaleMarkup / 100);
    const totalResales = itemsSold * lifetimeResales;
    const totalMarketProfit = profitPerResale * totalResales;
    setTotalResellerProfit(totalMarketProfit);

    const totalRoyaltyGenerated = totalMarketProfit * (royaltyRate / 100);
    const creatorShare = totalRoyaltyGenerated * 0.50;
    setCalculatedRevenue(creatorShare);
  };

  // Recalculate when slider values change
  useEffect(() => {
    calculateRevenue();
  }, [sliderValues]);

  // Handle slider changes
  const handleSliderChange = (key, value) => {
    setSliderValues(prev => ({
      ...prev,
      [key]: parseInt(value)
    }));
  };

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
        
        {/* --- HERO SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">
          <div className="text-center w-full max-w-5xl mx-auto z-10">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-6">
              Your Creations Generate Significant Profits in Resale.
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8">
              You're Seeing <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">$0</span> Of It.
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-16" style={{lineHeight: '1.6'}}>
              Resellers capture all of that profit. You're left out. <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent font-black">We're changing that.</span>
            </p>
          </div>
        </section>

        {/* --- PROBLEM SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center text-gray-900 dark:text-white mb-3 tracking-tighter">The Resale Market Problem</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Every creator faces the same three challenges in the secondary market
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="text-center flex-1">
                <p className="text-2xl mb-3"><span className="font-bold text-red-600 dark:text-red-400">"Lost Revenue"</span></p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your creations generate massive profits when resold. Resellers and marketplaces capture it all. You get $0.
                </p>
              </div>
              <div className="text-center flex-1">
                <p className="text-2xl mb-3"><span className="font-bold text-red-600 dark:text-red-400">"Trust Issues"</span></p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Secondary buyers face authenticity concerns, warranty gaps, and condition uncertainties without your involvement.
                </p>
              </div>
              <div className="text-center flex-1">
                <p className="text-2xl mb-3"><span className="font-bold text-red-600 dark:text-red-400">"Disconnected Community"</span></p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  You have no connection to secondary market owners, missing opportunities to build lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SOLUTION SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Unlock Royalties from Every Resale</h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-100/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Faircut attaches a digital passport to each item you create. This immutable link ensures resellers automatically pay you a royalty on every future resale—forever.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-gray-900 dark:text-white mb-12">
                <div className="w-60 h-52">
                    <div className="flex flex-col items-center text-center p-6 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl h-full justify-center">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-500 rounded-full flex items-center justify-center mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Your Product</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Item is created and sold</p>
                    </div>
                </div>
                <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 md:w-16 md:h-1 rotate-90 md:rotate-0"></div>
                <div className="w-60 h-52">
                     <div className="flex flex-col items-center text-center p-6 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl h-full justify-center">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-500 rounded-full flex items-center justify-center mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Digital Passport Attached</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Royalty system enabled forever</p>
                    </div>
                </div>
                <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 md:w-16 md:h-1 rotate-90 md:rotate-0"></div>
                <div className="w-60 h-52">
                     <div className="flex flex-col items-center text-center p-6 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl h-full justify-center">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-500 rounded-full flex items-center justify-center mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Automatic Royalties</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">You earn on every resale</p>
                    </div>
                </div>
            </div>

            {/* Before/After Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-red-50/50 dark:bg-red-900/10 rounded-2xl p-6 border-2 border-red-300 dark:border-red-700">
                <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4">Without Faircut</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Your share of resales:</span>
                    <span className="font-bold text-xl text-gray-900 dark:text-white">$0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Reseller profit:</span>
                    <span className="font-bold text-xl text-red-600 dark:text-red-400">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Community connection:</span>
                    <span className="font-bold text-xl text-gray-900 dark:text-white">None</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-700">
                <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4">With Faircut</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Your royalty share:</span>
                    <span className="font-bold text-xl text-amber-600 dark:text-amber-400">15-90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Perpetual revenue:</span>
                    <span className="font-bold text-xl text-amber-600 dark:text-amber-400">Forever</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Community connection:</span>
                    <span className="font-bold text-xl text-amber-600 dark:text-amber-400">Direct</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- BENEFITS SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Transform Your Secondary Market</h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-100/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Turn every resale into revenue, trust, and community
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Perpetual Royalties */}
              <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Perpetual Revenue Stream
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  Finally capture your fair share of resale profits. Generate 100% margin revenue from items you sold years ago—forever.
                </p>
              </div>

              {/* Trust & Authenticity */}
              <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Trust & Authenticity
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  Every item has verified authenticity, complete ownership history, and maintained warranties. Build trust with every buyer.
                </p>
              </div>

              {/* Connected Community */}
              <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Connected Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  Transform anonymous secondary buyers into an engaged community you can market to and build lasting relationships with.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CALCULATOR SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Stop Leaving Money on the Table
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-16">
              See the profit your work generates for others, and how much of it you can claim back.
            </p>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center mb-12">
                <div className="text-center mb-8 md:mb-0 md:border-r border-gray-200 dark:border-gray-700 md:pr-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Total Reseller Profit</h3>
                  <div className="text-5xl md:text-6xl font-black text-gray-500 dark:text-gray-500 mb-2">
                    {formatCurrency(totalResellerProfit)}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Currently, you get <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">$0</span> of this.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Your Share with Faircut</h3>
                  <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
                    {formatCurrency(calculatedRevenue)}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Our 50/50 split ensures we win only when you do.</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {/* Column 1: Your Business */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Business</h3>
                    </div>

                    {/* Average Item Price */}
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Average Item Price</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(sliderValues.avgItemPrice)}</span>
                      </div>
                      <input 
                        type="range" 
                        min="50" 
                        max="5000" 
                        value={sliderValues.avgItemPrice} 
                        step="50" 
                        onChange={(e) => handleSliderChange('avgItemPrice', e.target.value)} 
                        className="w-full h-2 bg-gradient-to-r from-emerald-200 to-green-200 dark:from-emerald-800 dark:to-green-800 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    
                    {/* Items Sold Annually */}
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Items Sold Annually</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{sliderValues.itemsSold.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="100" 
                        max="10000" 
                        value={sliderValues.itemsSold} 
                        step="100" 
                        onChange={(e) => handleSliderChange('itemsSold', e.target.value)} 
                        className="w-full h-2 bg-gradient-to-r from-emerald-200 to-green-200 dark:from-emerald-800 dark:to-green-800 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        Total annual sales: {formatCurrency(sliderValues.avgItemPrice * sliderValues.itemsSold)}
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Your Legacy */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Legacy</h3>
                    </div>

                    {/* Royalty Rate */}
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Royalty Rate</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{sliderValues.royaltyRate}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="5" 
                        max="50" 
                        value={sliderValues.royaltyRate} 
                        step="1" 
                        onChange={(e) => handleSliderChange('royaltyRate', e.target.value)} 
                        className="w-full h-2 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-1">Powered by Faircut</p>
                    </div>
                  </div>

                  {/* Column 3: Market Reality */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Market Reality</h3>
                    </div>
                    
                    {/* Resale Markup */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Resale Markup</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{sliderValues.resaleMarkup}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="50" 
                        max="300" 
                        value={sliderValues.resaleMarkup} 
                        step="25" 
                        onChange={(e) => handleSliderChange('resaleMarkup', e.target.value)} 
                        className="w-full h-2 bg-gradient-to-r from-rose-200 to-red-200 dark:from-rose-800 dark:to-red-800 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Set by resellers</p>
                    </div>
                    
                    {/* Lifetime Resales Per Item */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Lifetime Resales Per Item</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{sliderValues.lifetimeResales}</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={sliderValues.lifetimeResales} 
                        step="1" 
                        onChange={(e) => handleSliderChange('lifetimeResales', e.target.value)} 
                        className="w-full h-2 bg-gradient-to-r from-rose-200 to-red-200 dark:from-rose-800 dark:to-red-800 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Average over the product's lifespan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PARTNERSHIP AGREEMENT SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6">
            <div className="w-full max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">Risk-Free Terms</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12">We believe in perfect alignment. We only succeed when you do.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-8 h-full">
                        <div className="text-4xl font-bold text-amber-500 mb-2">$0</div>
                        <h3 className="text-lg font-semibold mb-2">Setup Fee</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">A 5-minute, no-code integration.</p>
                    </div>
                    <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-8 h-full">
                        <div className="text-4xl font-bold text-amber-500 mb-2">$0</div>
                        <h3 className="text-lg font-semibold mb-2">Monthly Cost</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Digital passport issuance & management included.</p>
                    </div>
                    <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-8 h-full">
                        <div className="text-4xl font-bold text-amber-500 mb-2">You Set</div>
                        <h3 className="text-lg font-semibold mb-2">The Royalty</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Technology to enforce your rule, automatically.</p>
                    </div>
                </div>
                <div className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 p-1 rounded-2xl shadow-lg shadow-amber-500/20">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
                        <h3 className="text-3xl font-black text-gray-900 dark:text-white">Our Term: A 50/50 Royalty Split</h3>
                        <p className="text-amber-600 dark:text-amber-400 font-semibold mt-1">Resellers pay the royalty. We split it 50/50. Perfect alignment.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 pb-32 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              Ready to Get Your Fair Cut?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-100/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Stop leaving money on the table. Join the creators turning every resale into revenue.
            </p>

            <button 
              className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 text-white dark:text-slate-900 text-lg font-semibold py-4 px-12 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Request Exclusive Access
            </button>

          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="fixed bottom-6 left-0 right-0 text-center z-50">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-3">
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Twitter size={16} />
              <span>Twitter</span>
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <MessageCircle size={16} />
              <span>Discord</span>
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen size={16} />
              <span>Docs</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Faircut. All Rights Reserved.</p>
        </div>
      </div>

      {/* Custom styles for sliders */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #d97706;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #ffffff;
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #d97706;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #ffffff;
        }
        @media (prefers-color-scheme: dark) {
          .slider::-webkit-slider-thumb {
            border: 2px solid #1f2937;
          }
          .slider::-moz-range-thumb {
            border: 2px solid #1f2937;
          }
        }
      `}</style>
    </>
  );
}

