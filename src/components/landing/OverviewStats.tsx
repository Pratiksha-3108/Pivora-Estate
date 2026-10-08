'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// CountUp component for animating counter numbers on scroll
function AnimatedCounter({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 2000,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(easeOut * target);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  {
    id: 'residences',
    type: 'static',
    mainValue: '2, 3 & 4',
    unit: 'BHK',
    label: 'RESIDENCES',
    badge: 'LUXURY HOMES',
    highlight: false,
    lineHeight: 'h-10 sm:h-12',
  },
  {
    id: 'price',
    type: 'counter',
    targetNumber: 1.19,
    decimals: 2,
    unit: 'Cr+',
    label: 'STARTING PRICE',
    badge: 'ONWARDS',
    highlight: false,
    lineHeight: 'h-16 sm:h-20',
  },
  {
    id: 'amenities',
    type: 'counter',
    targetNumber: 20,
    decimals: 0,
    unit: '+',
    label: 'AMENITIES',
    badge: 'LIFESTYLE',
    highlight: false,
    lineHeight: 'h-24 sm:h-28',
  },
  {
    id: 'experience',
    type: 'counter',
    targetNumber: 100,
    decimals: 0,
    unit: '%',
    label: 'PREMIUM LIVING',
    badge: 'REFINED LIFESTYLE',
    highlight: false,
    lineHeight: 'h-32 sm:h-38',
  },
];

export default function OverviewStats() {
  return (
    <section className="relative w-full pt-[100px] pb-24 sm:pb-32 bg-slate-950 text-white overflow-hidden select-none">
      {/* Background Skyscraper Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=90')`,
        }}
      />

      {/* Base Overlay with Minimal Opacity */}
      <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

      {/* Balanced Side Gradient: Minimal/no dark overlay on the left to compensate for the photo's natural left shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/35 pointer-events-none" />

      {/* Top and Bottom Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/30 pointer-events-none" />

      {/* Content Container with FadeInUp Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 items-end">
          {STATS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              className="flex flex-col items-center text-center group"
            >

              {/* Pin Indicator: Double Ring Node Dot + Ascending Vertical Pin Line */}
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-[#BD7E6C] group-hover:bg-[#BD7E6C]/25 group-hover:shadow-[0_0_18px_#BD7E6C]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80 group-hover:bg-[#BD7E6C] transition-colors duration-300" />
                </div>

                {/* Ascending Line Length */}
                <div className={`w-[1px] ${item.lineHeight} bg-gradient-to-b from-white/50 via-white/20 to-transparent transition-all duration-500`} />
              </div>

              {/* Big Metric Value Display with Animated Counter */}
              <div className="flex items-baseline justify-center gap-1.5 font-sans tracking-tight whitespace-nowrap drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                {item.type === 'counter' ? (
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
                    <AnimatedCounter
                      target={item.targetNumber!}
                      decimals={item.decimals}
                      duration={2200}
                    />
                  </span>
                ) : (
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
                    {item.mainValue}
                  </span>
                )}

                {item.unit && (
                  <span className="text-2xl sm:text-3xl font-light text-white/90">
                    {item.unit}
                  </span>
                )}
              </div>

              {/* Uppercase Metric Label */}
              <div className="mt-3 text-xs sm:text-sm font-bold tracking-[0.25em] text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {item.label}
              </div>

              {/* Rosegold / Gold Outline Pill Badge */}
              <div className="mt-4 px-4 py-1.5 rounded-full bg-slate-950/70 border border-[#BD7E6C] backdrop-blur-md shadow-lg">
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#BD7E6C] uppercase">
                  {item.badge}
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


