import { useEffect, useRef } from 'react';
import { Reveal } from '../Reveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data = [
    { src: "/assets/Photos/A7405901.webp", left: "WE DON'T JUST SERVE FOOD.", right: "WE BUILD IT." },
    { src: "/assets/Photos/A7405920.webp", left: "EAT THE STRUCTURE.", right: "BREAK THE BRICK." },
    { src: "/assets/Photos/A7405903.webp", left: "WE DON'T NAME DRINKS.", right: "WE CURATE THEM." },
    { src: "/assets/Photos/A7405898.webp", left: "FORM FOLLOWS FLAVOR.", right: "EVERYTHING HAS ALIGNMENT." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;

        const imgBlock = row.querySelector('.gallery-img-wrapper');
        const textBlock = row.querySelector('.gallery-text-wrapper');

        // Cinematic Image Parallax (starts a bit low, scrubs up naturally)
        gsap.fromTo(imgBlock, 
          { y: 60, opacity: 0 },
          {
            y: -30, opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "bottom 30%",
              scrub: 1.2,
            }
          }
        );

        // Text reveal from the side with a slight delay
        const isMobile = window.innerWidth < 768;
        const xOffset = isMobile ? 0 : (i % 2 === 0 ? 40 : -40);
        const yOffset = isMobile ? 30 : 0;
        
        gsap.fromTo(textBlock, 
          { opacity: 0, x: xOffset, y: yOffset },
          {
            opacity: 1, x: 0, y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              end: "center 55%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-cream text-charcoal py-24 md:py-32 overflow-hidden border-t border-b border-charcoal/20">
      <div className="w-full text-center pb-20 md:pb-32 z-20">
        <Reveal>
          <h2 className="font-display text-5xl md:text-[6vw] uppercase tracking-tighter">The Philosophy</h2>
        </Reveal>
      </div>
      
      <div className="flex flex-col gap-32 md:gap-48 w-full max-w-7xl mx-auto px-6">
        {data.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} ref={(el) => { rowRefs.current[i] = el; }} className={`relative w-full flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Image Half */}
              <div className="w-full md:w-1/2 flex justify-center">
                 <div className={`w-[85vw] md:w-[35vw] lg:w-[30vw] relative z-10 gallery-img-wrapper ${isEven ? 'rotate-1' : '-rotate-2'}`}>
                    <img src={item.src} loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] will-change-transform" alt="Brand Aesthetics" />
                 </div>
              </div>

              {/* Text Half */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center gallery-text-wrapper ${isEven ? 'md:text-left md:items-start' : 'md:text-right md:items-end'} text-center`}>
                 <h3 className="font-display text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tighter text-charcoal/90 leading-[0.9] mb-4 md:mb-6 text-pretty">
                   {item.left}
                 </h3>
                 <p className="font-mono text-sm uppercase tracking-widest text-charcoal/60 leading-relaxed md:max-w-md max-w-[280px] mx-auto md:mx-0">
                   {item.right}
                 </p>
                 <div className="w-12 h-[2px] bg-charcoal/20 mt-8 hidden md:block"></div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
