import { Reveal } from '../Reveal';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function MenuPreview() {
  const menuImages = [
    "/assets/Branding/menus/IMG_4027.webp",
    "/assets/Branding/menus/IMG_4028.webp",
    "/assets/Branding/menus/IMG_4030.webp",
    "/assets/Branding/menus/IMG_4031.webp",
    "/assets/Branding/menus/IMG_4032.webp",
    "/assets/Branding/menus/IMG_4033.webp"
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  // Using solid percentages. Framer Motion fails interpolating to calc() strings.
  // -60% safely leaves the final card within the right side of the screen.
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section className="relative w-full bg-charcoal text-cream flex flex-col pt-24 md:pt-32 border-t border-cream/20">
      <div className="w-full flex justify-center pb-16 md:pb-24 z-20">
         <Reveal>
            <h2 className="font-display text-5xl sm:text-7xl md:text-[10vw] tracking-tighter leading-none uppercase text-center w-full drop-shadow-md px-4">
              Built, <br />Not Served.
            </h2>
         </Reveal>
      </div>

      {/* Mobile Native Scroll Version */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-24 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
         {menuImages.map((src, idx) => (
            <div key={idx} className="relative w-[85vw] flex-shrink-0 snap-center pointer-events-auto cursor-pointer" onClick={() => setSelectedImg(src)}>
               <img src={src} alt={`Menu Page ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-auto object-cover border border-cream/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]" />
               <span className="absolute -bottom-8 left-0 font-mono text-xs uppercase tracking-widest text-cream/50">PG {idx + 1}</span>
            </div>
         ))}
         {/* End bumper */}
         <div className="w-[4vw] flex-shrink-0" />
      </div>

      {/* Desktop Framer Motion Version */}
      <div ref={containerRef} className="hidden md:block h-[300vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-charcoal">
          <motion.div style={{ x: scrollX }} className="flex gap-8 md:gap-16 items-center px-[10vw] md:px-[20vw] w-max">
            {menuImages.map((src, idx) => (
              <div key={idx} className="relative w-[85vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 group pointer-events-auto cursor-point" onClick={() => setSelectedImg(src)}>
                 <img src={src} alt={`Menu Page ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-auto object-cover border border-cream/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02] cursor-pointer" />
                 <span className="absolute -bottom-8 left-0 font-mono text-xs uppercase tracking-widest text-cream/50">PG {idx + 1}</span>
              </div>
            ))}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>
      </div>

      {/* GSAP / Framer Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8 cursor-zoom-out touch-none"
          >
            {/* Top Bar Hint */}
            <div className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-cream/70 bg-black/30 px-4 py-2 rounded-full border border-cream/10">
              Close [✕]
            </div>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg} 
              alt="Zoomed Menu Preview" 
              className="max-w-[95vw] max-h-[90vh] object-contain drop-shadow-[0_45px_65px_-15px_rgba(0,0,0,0.5)] border border-cream/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null); // Click image to close it too, for absolute mobile ease.
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
