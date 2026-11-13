"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ByTheNumbersSection() {
  const stats = [
    { value: "500+", label: "VEHICLES PERFECTED" },
    { value: "5.0", label: "GOOGLE RATING" },
    { value: "99%", label: "UV REJECTION FILMS" },
    { value: "7yr", label: "COATING DURABILITY" }
  ];

  return (
    <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Studio Image Card */}
        <div className="lg:col-span-6">
          <div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 aspect-[4/3] sm:aspect-[4/3]">
            <Image
              src="/about/aboutCar.avif"
              alt="Lux Customs Studio Springvale"
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-85"
            />
            {/* Gradient Overlay for Label Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
            
            {/* Studio Location Footer Label on Image */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-zinc-400 font-semibold">
              <span>THE STUDIO</span>
              <span>SPRINGVALE, VIC 3171</span>
            </div>
          </div>
        </div>

        {/* Right Column: Titles, Stats Grid & See the Work Link */}
        <div className="lg:col-span-6 space-y-10">
          
          {/* Section Titles */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
              <span className="w-8 h-[1px] bg-[#FBBF24]" />
              <span>BY THE NUMBERS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Small studio. <span className="text-[#FBBF24]">Serious output.</span>
            </h2>
          </div>

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-2"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#FBBF24] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* "See the work" link pointing to gallery */}
          <div className="pt-2">
            <Link 
              href="/gallery"
              className="inline-flex items-center space-x-2 text-white font-bold text-sm tracking-wider uppercase hover:text-[#FBBF24] transition-colors group"
            >
              <span>See the work</span>
              <ArrowUpRight className="w-4 h-4 text-[#FBBF24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
