"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function HomeHero() {
  return (
    <section className="relative top-0 min-h-[90vh] sm:min-h-[95vh] flex flex-col justify-between bg-zinc-950 overflow-hidden px-5 sm:px-12 lg:px-20 pt-10 pb-8 border-b border-zinc-800/60 selection:bg-[#FBBF24] selection:text-zinc-950">
      
      {/* Background Image with Adjusted Visibility & Balanced Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Softened left gradient so text has contrast, but background image shines through */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/60 z-10" />
        <img 
          src="/newGallery/g2.avif" 
          alt="Luxury Car Window Tinting Studio" 
          className="w-full h-full object-cover object-center opacity-65 scale-105"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-0 w-full my-auto space-y-6 sm:space-y-8">
        
        <motion.div 
          className="space-y-5 sm:space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Location Tag */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase"
          >
            <span className="w-8 h-[1px] bg-[#FBBF24]" />
            <span>Springvale · VIC</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wide uppercase leading-[1.1] drop-shadow-md"
          >
            Precision in <br />
            every <span className="text-[#FBBF24]">panel.</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed drop-shadow"
          >
            Window tinting, tint removal, detailing, paint correction and ceramic protection — done properly, by hand, under studio light.
          </motion.p>

          {/* Action Buttons (Side-by-side on both mobile and desktop) */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0.6}
            className="flex flex-row items-center space-x-3 sm:space-x-4 pt-2 overflow-x-auto"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 bg-[#FBBF24] text-zinc-950 font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:bg-[#f5b316] shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] group text-xs sm:text-base whitespace-nowrap"
            >
              <span>Book Your Car In</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 rounded-full border border-zinc-700 bg-zinc-950/40 text-white font-semibold transition-all duration-300 hover:border-[#FBBF24] hover:text-[#FBBF24] backdrop-blur-md text-xs sm:text-base whitespace-nowrap"
            >
              Explore Services
            </Link>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Stats Grid (2x2 on Mobile, 4 columns on Desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-20 max-w-7xl mx-auto w-full pt-8 sm:pt-10 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 text-zinc-400 bg-zinc-950/60 backdrop-blur-sm -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        <div>
          <p className="text-2xl sm:text-3xl font-black text-[#FBBF24] tracking-tight">500+</p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">Vehicles Perfected</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-[#FBBF24] tracking-tight">5.0</p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">Google Rating</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-[#FBBF24] tracking-tight">6+</p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">Years of Craft</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-[#FBBF24] tracking-tight">Lifetime</p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">Tint Warranty</p>
        </div>
      </motion.div>

    </section>
  );
}
