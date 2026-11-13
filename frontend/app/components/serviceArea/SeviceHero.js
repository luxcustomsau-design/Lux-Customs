"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-start bg-zinc-950 overflow-hidden px-6 sm:px-12 lg:px-20 border-b border-zinc-800/60 selection:bg-[#FBBF24] selection:text-zinc-950">
      
      {/* Background Image with Improved Visibility & Balanced Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/60 z-10" />
        <img 
          src="/newGallery/g5.avif" 
          alt="Luxury Car Window Tinting" 
          className="w-full h-full object-cover object-center opacity-70 scale-105"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-0 w-full pt-12">
        
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Small Subtitle Tag */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase"
          >
            <span className="w-8 h-[1px] bg-[#FBBF24]" />
            <span>Our Services</span>
          </motion.div>

          {/* Main Headline (Exact text & split styling) */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wide uppercase leading-[1.1] drop-shadow-md"
          >
            Five Crafts. <br />
            One <span className="text-[#FBBF24]">Standard.</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-lg font-normal leading-relaxed pt-2 drop-shadow"
          >
            From your first tint to a full correction and coating — everything happens in our Springvale studio, by the same pair of hands.
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
}
