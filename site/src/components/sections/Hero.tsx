import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);

  return (
    <section ref={container} className="relative w-full h-[100dvh] overflow-hidden bg-charcoal border-b border-cream/20">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/assets/Photos/A7405899.webp" 
          alt="Blue Brick Interior" 
          fetchPriority="high"
          className="w-full h-full object-cover object-bottom md:object-center transition-all duration-1000 scale-[1.8] origin-bottom md:scale-105 md:origin-center"
        />
      </motion.div>

      <div className="absolute inset-0 z-20 flex flex-col justify-between px-6 md:px-12 py-8 md:py-12 w-full mix-blend-difference pointer-events-none">
        <div className="flex justify-between items-start w-full">
           <span className="font-mono text-sm uppercase tracking-widest text-white">Athens, GR</span>
           <span className="font-mono text-sm uppercase tracking-widest text-white text-right">A Living<br/>Organism</span>
        </div>
        
        <div className="w-full flex justify-center items-center z-10">
            <h1 className="sr-only">Blue Brick</h1>
            <img src="/assets/Logo/bluebrick-white.png" alt="Blue Brick Wordmark" className="w-[60vw] md:w-[35vw] max-w-md h-auto object-contain pointer-events-auto brightness-0 invert" />
        </div>
        
        <div className="flex justify-between items-end w-full">
            <span className="font-body text-2xl uppercase leading-tight text-white">Sips.<br/>Bites.<br/>Sounds.</span>
            <span className="font-mono text-sm uppercase tracking-widest text-white">[ Scroll Down ]</span>
        </div>
      </div>
    </section>
  );
}
