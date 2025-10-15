import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FairCutSlide() {
  return (
    <section className="h-screen snap-start snap-always bg-white dark:bg-gray-900 relative overflow-hidden flex items-center justify-center px-6">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
          FAIRCUT
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light">
          Unlock the Legacy Value of Your Creations
        </p>

        <Link 
          to="/faircut"
          className="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg font-semibold py-4 px-10 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span>Learn More</span>
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
        </Link>
      </div>
    </section>
  );
}

