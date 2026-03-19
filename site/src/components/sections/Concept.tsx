import { Reveal } from '../Reveal';

export default function Concept() {
  const pillars = [
    { title: "Sips", desc: "Tailor-made cocktails. We don't name drinks. We curate them." },
    { title: "Bites", desc: "Comfort food with a twist. Eat the structure. Built, not served." },
    { title: "Sounds", desc: "Curated music that defines the atmosphere, never background noise." }
  ];

  return (
    <section className="relative w-full bg-cream text-charcoal">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-charcoal/20 border-b border-charcoal/20">
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 border-charcoal/20">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-6xl md:text-[6vw] lg:text-[5vw] tracking-tighter leading-[0.9] uppercase mb-12 break-words">
              Not a café.<br/>Not a bar.<br/>Not a restaurant.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-mono text-charcoal/60 uppercase tracking-widest text-xs md:text-sm max-w-sm leading-relaxed">
              Blue Brick transforms throughout the day, seamlessly adapting to every moment. 
              The architecture of entertainment reimagined.
            </p>
          </Reveal>
        </div>
        
        <div className="flex flex-col divide-y divide-charcoal/20">
          {pillars.map((pillar, idx) => (
            <div key={pillar.title} className="p-8 md:p-12 lg:p-16 group hover:bg-charcoal hover:text-cream transition-colors duration-500 cursor-default">
              <Reveal delay={idx * 0.1}>
                <div className="flex flex-col h-full justify-between gap-12">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter">{pillar.title}</h3>
                    <span className="font-mono text-lg md:text-xl mt-2">(0{idx + 1})</span>
                  </div>
                  <p className="font-body text-base md:text-lg uppercase leading-tight max-w-sm">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
