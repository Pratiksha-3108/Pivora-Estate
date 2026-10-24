'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, IndianRupee, Leaf, Gem } from 'lucide-react';

// Single digit flip & roll component with 3D perspective and fast smooth ease
function FlipDigit({
  char,
  delay = 0,
  duration = 0.85,
  hasAnimated,
}: {
  char: string;
  delay?: number;
  duration?: number;
  hasAnimated: boolean;
}) {
  const isDigit = /^[0-9]$/.test(char);

  if (!isDigit) {
    return (
      <span className="inline-block whitespace-pre">
        {char}
      </span>
    );
  }

  const targetDigit = parseInt(char, 10);
  // Full rotation loop of numbers, then landing precisely on targetDigit
  const sequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, targetDigit];
  const targetIndex = sequence.length - 1;

  return (
    <span className="inline-block overflow-hidden h-[1.15em] leading-[1.15em] relative [perspective:400px] align-baseline">
      <motion.span
        className="flex flex-col text-center"
        initial={{ y: '0%', rotateX: -35, opacity: 0.7 }}
        animate={
          hasAnimated
            ? {
                y: `-${(targetIndex / sequence.length) * 100}%`,
                rotateX: 0,
                opacity: 1,
              }
            : { y: '0%', rotateX: -35, opacity: 0.7 }
        }
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Snappy fast start with buttery-smooth deceleration
        }}
      >
        {sequence.map((d, idx) => (
          <span
            key={idx}
            className="h-[1.15em] flex items-center justify-center select-none"
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

// Multi-character flip number container (supports decimals, commas, spaces)
function FlipNumber({
  value,
  baseDelay = 0,
}: {
  value: string;
  baseDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const characters = value.split('');

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {characters.map((char, index) => (
        <FlipDigit
          key={index}
          char={char}
          delay={baseDelay + index * 0.05}
          duration={0.85}
          hasAnimated={isInView}
        />
      ))}
    </span>
  );
}

const STATS_DATA = [
  {
    id: 'residences',
    value: '2, 3 & 4',
    unit: 'BHK',
    label: 'RESIDENCES',
    icon: 'home' as const,
  },
  {
    id: 'price',
    value: '1.19',
    unit: 'Cr+',
    label: 'STARTING PRICE',
    icon: 'rupee' as const,
  },
  {
    id: 'amenities',
    value: '20',
    unit: '+',
    label: 'AMENITIES',
    icon: 'leaf' as const,
  },
  {
    id: 'experience',
    value: '100',
    unit: '%',
    label: 'PREMIUM LIVING',
    icon: 'gem' as const,
  },
];

function StatIcon({ icon }: { icon: 'home' | 'rupee' | 'leaf' | 'gem' }) {
  if (icon === 'home') {
    return <Home className="w-8 h-8 sm:w-9 sm:h-9 text-[#BD7E6C] stroke-[1.5] shrink-0" />;
  }
  if (icon === 'rupee') {
    return (
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.75px] border-[#BD7E6C] flex items-center justify-center shrink-0 text-[#BD7E6C]">
        <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
      </div>
    );
  }
  if (icon === 'leaf') {
    return <Leaf className="w-8 h-8 sm:w-9 sm:h-9 text-[#BD7E6C] stroke-[1.5] shrink-0" />;
  }
  return <Gem className="w-8 h-8 sm:w-9 sm:h-9 text-[#BD7E6C] stroke-[1.5] shrink-0" />;
}

export default function OverviewStats() {
  return (
    <section className="relative w-full py-[50px] bg-[#f5f4ef] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-y-8">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="relative flex items-center justify-center px-3 sm:px-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-center gap-3.5 sm:gap-4.5 justify-center"
              >
                <StatIcon icon={item.icon} />
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-baseline font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-950 tracking-tight leading-none whitespace-nowrap">
                    <FlipNumber value={item.value} baseDelay={index * 0.08} />
                    {item.unit && (
                      <span className="font-sans text-xs sm:text-sm lg:text-base font-light text-slate-700 ml-1.5 uppercase">
                        {item.unit}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1.5 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </motion.div>

              {/* Vertical divider line between counters on desktop */}
              {index < STATS_DATA.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 sm:h-16 w-px bg-stone-300/80" />
              )}

              {/* Vertical divider line between columns on mobile (col 1 to col 2) */}
              {index % 2 === 0 && (
                <div className="lg:hidden block absolute right-0 top-1/2 -translate-y-1/2 h-14 sm:h-16 w-px bg-stone-300/80" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
