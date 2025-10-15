import { Zap, Clock, DollarSign, Github, Twitter, MessageCircle, BookOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FaircutLandingPage() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);
  const totalSections = 3;

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
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Timeout to prevent rapid scrolling
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
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
        containerRef.current?.children[nextSection]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              containerRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

      <div ref={containerRef} className="smooth-scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* --- HERO SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 relative overflow-hidden">

          <div className="text-center w-full max-w-4xl mx-auto z-10">
            <h1 className="text-7xl md:text-8xl font-black mb-4 text-gray-900 dark:text-white tracking-tighter">
              FAIRCUT
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-16 font-normal tracking-wider uppercase">
              Unlock the Legacy Value of Your Creations
            </p>
            
            <div className="max-w-2xl mx-auto border-l-2 border-slate-400 dark:border-slate-500 pl-8 text-left">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                <span className="font-medium text-gray-900 dark:text-white">Jonas</span> sold a jacket last year. This morning, he woke up to <span className="font-semibold text-gray-900 dark:text-white">$60</span> from a sale he never made.
              </p>
              <p className="text-xl md:text-2xl text-gray-900 dark:text-white font-semibold mt-6 leading-relaxed">
                It's not just revenue. It's his legacy, earning for him.
              </p>
            </div>
          </div>
        </section>

        {/* --- VALUE PROPS SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 bg-gradient-to-br from-stone-100 via-slate-100 to-zinc-100 dark:from-slate-900 dark:via-neutral-900 dark:to-stone-900 relative overflow-hidden px-6">
          
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Your Creations. <br/>Your Legacy Revenue.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-100/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Faircut gives every physical product a digital soul—one that pays you a royalty on every future resale. Passively. Automatically. Permanently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 text-center shadow-sm">
                <Clock className="text-slate-600 dark:text-slate-300 h-8 w-8 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Effortless Onboarding</div>
                <div className="text-sm text-gray-600 dark:text-slate-400 mt-1">5-minute Shopify setup</div>
              </div>
              
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 text-center shadow-sm">
                <DollarSign className="text-slate-600 dark:text-slate-300 h-8 w-8 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Zero Investment</div>
                <div className="text-sm text-gray-600 dark:text-slate-400 mt-1">Free to install</div>
              </div>
              
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 text-center shadow-sm">
                <Zap className="text-slate-600 dark:text-slate-300 h-8 w-8 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Perpetual Royalties</div>
                <div className="text-sm text-gray-600 dark:text-slate-400 mt-1">Earn from every resale</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-50 dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950 px-6 relative">
          <div className="max-w-4xl w-full mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Ready to Get<br/>Your Fair Cut?
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Stop leaving money on the table. Join the brands turning every resale into revenue.
            </p>

            <a 
              href="mailto:hello@faircut.com?subject=Early%20Access%20Request" 
              className="inline-block bg-gradient-to-r from-slate-900 to-stone-900 dark:from-slate-100 dark:to-stone-100 text-white dark:text-slate-900 text-lg font-semibold py-4 px-12 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Request Exclusive Access
            </a>

            <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
              Seamless Shopify Integration &bull; Simple for Everyone
            </div>
          </div>

          {/* Footer (within CTA section) */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
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
        </section>
      </div>
    </>
  );
}
