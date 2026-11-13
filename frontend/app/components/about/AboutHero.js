"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-between bg-zinc-950 overflow-hidden px-6 sm:px-12 lg:px-20 pt-16 pb-12 border-b border-zinc-800/60 selection:bg-[#FBBF24] selection:text-zinc-950">
      
      {/* Background Image with Improved Visibility & Balanced Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/60 z-10" />
        <img 
          src="/about/aboutCar.avif" 
          alt="Lux Customs Studio Workshop" 
          className="w-full h-full object-cover object-center opacity-70 scale-105"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-0 w-full my-auto space-y-6">
        
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tag */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase"
          >
            <span className="w-8 h-[1px] bg-[#FBBF24]" />
            <span>ABOUT LUXCUSTOMS</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wide uppercase leading-[1.1] drop-shadow-md"
          >
            Built on <br />
            <span className="text-[#FBBF24]">obsession.</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed drop-shadow"
          >
            A tinting and detailing studio in Springvale where craftsmanship outranks volume — every single time.
          </motion.p>

        </motion.div>

      </div>

      {/* Bottom Section Label Indicator ("THE MANIFESTO") */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-20 max-w-7xl mx-auto w-full pt-6 flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase"
      >
        <span className="w-8 h-[1px] bg-[#FBBF24]" />
        <span>The Manifesto</span>
      </motion.div>

    </section>
  );
}
