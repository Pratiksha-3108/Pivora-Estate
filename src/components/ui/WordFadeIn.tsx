'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface WordFadeInProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; stagger: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WordFadeIn({
  text,
  className = '',
  wordClassName = '',
  delay = 0.05,
  stagger = 0.1,
  as = 'h2',
}: WordFadeInProps) {
  const words = text.split(' ');
  const MotionComponent = motion[as] as typeof motion.h2;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={{ delay, stagger }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className={`inline-block mr-[0.25em] last:mr-0 ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
