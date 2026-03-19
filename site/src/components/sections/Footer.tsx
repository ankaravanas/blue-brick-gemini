import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative w-full bg-primary text-white flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/20 border-b border-white/20">
        
        {/* LOGO BLOCK */}
        <div className="py-12 px-6 md:p-16 flex flex-col justify-center items-center md:items-start gap-8 border-b lg:border-b-0 border-white/20">
           <img src="/assets/Logo/bluebrick-white.png" alt="Blue Brick Wordmark" className="w-[70vw] md:max-w-sm h-auto object-contain brightness-0 invert" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:divide-x divide-white/20">
           
           {/* LOCATION BLOCK */}
           <div className="py-12 px-6 md:p-12 flex flex-col justify-between items-center md:items-start text-center md:text-left min-h-[30vh] border-b sm:border-b-0 sm:border-r lg:border-r-0 border-white/20">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">Location</span>
              <div className="mt-8 md:mt-12 flex flex-col items-center md:items-start">
                <a href="https://maps.google.com/?q=Dragatsaniou,+Athens,+Greece" target="_blank" rel="noopener noreferrer" className="font-body text-2xl md:text-3xl uppercase leading-tight w-fit group cursor-pointer hover:text-white/70 transition-colors block">
                  Dragatsaniou<br/>Athens, Greece
                </a>
                <a href="https://maps.google.com/?q=Dragatsaniou,+Athens,+Greece" target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-widest uppercase mt-6 block border-b border-white/30 pb-1 w-fit hover:text-white/70 hover:border-white/70 transition-colors">View on Maps ↗</a>
              </div>
           </div>

           {/* SOCIAL BLOCK */}
           <div className="py-12 px-6 md:p-12 flex flex-col justify-between items-center md:items-start min-h-[30vh]">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">Social</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-xl md:text-2xl uppercase hover:text-white/80 transition-colors flex items-center justify-center md:justify-start gap-2 mt-8 md:mt-12 w-fit">
                Instagram <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
           </div>
           
        </div>
      </div>
      
      {/* COPYRIGHT BLOCK */}
      <div className="py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-white/60">© {new Date().getFullYear()} Blue Brick</span>
        <button onClick={scrollToTop} className="font-mono text-xs uppercase tracking-widest hover:text-white transition-colors hover:underline underline-offset-4 text-white/70">
          [ Back to Top ]
        </button>
      </div>
    </footer>
  );
}
