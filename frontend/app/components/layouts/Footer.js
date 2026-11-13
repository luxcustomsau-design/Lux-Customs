"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import Instagram from '../icons/InstagramIcon'; 
import Facebook from '../icons/FacebookIcon';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 relative overflow-hidden border-t border-zinc-900 selection:bg-[#FBBF24] selection:text-zinc-950">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#FBBF24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16 relative z-10">

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >

          {/* Column 1: Logo & Company Bio (Span 5) */}
          <motion.div variants={fadeInFromBottom} custom={0} className="lg:col-span-5 space-y-6 text-left">
            {/* Desktop Logo (Left Aligned) */}
            <div className="hidden md:flex flex-shrink-0">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/Requirements/newLogo.png"
                  alt="Lux Customs Logo"
                  width={160}
                  height={140}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Mobile Logo (Centered) */}
            <div className="flex md:hidden justify-center flex-shrink-0">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/Requirements/newLogo.png"
                  alt="Lux Customs Logo"
                  width={200}
                  height={160}
                  className="object-contain w-[180px] h-auto"
                  priority
                />
              </Link>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed pr-2 max-w-md">
              Springvale' studio for window tinting, detailing, paint correction and paint protection. Precision in every panel.
            </p>
          </motion.div>

          {/* Column 2: Services Links (Span 3) */}
          <motion.div variants={fadeInFromBottom} custom={0.2} className="lg:col-span-3 space-y-4 text-left">
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#FBBF24] transition-colors">
                  Window Tinting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FBBF24] transition-colors">
                  Tint Removal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FBBF24] transition-colors">
                  Detailing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FBBF24] transition-colors">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FBBF24] transition-colors">
                  Paint Protection
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Get In Touch & Socials (Span 4) */}
          <motion.div variants={fadeInFromBottom} custom={0.4} className="lg:col-span-4 space-y-4 text-left">
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="tel:0468317131" className="flex items-center space-x-3 hover:text-[#FBBF24] transition-colors">
                <Phone className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
                <span>0468 317 131</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#FBBF24] flex-shrink-0 mt-0.5" />
                <span>Springvale, VIC 3171</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
                <span>Mon – Sat · 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Social Media Icon Links placed directly under Get In Touch */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a 
                href="https://www.instagram.com/luxcustoms.au/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(225,48,108,0.25)] hover:border-pink-500/30 group"
              >
                <Instagram className="w-5 h-5 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61593129088390&ref=PROFILE_EDIT_xav_ig_profile_page_web#" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(24,119,242,0.25)] hover:border-blue-500/30 group"
              >
                <Facebook className="w-5 h-5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar: Copyright & Location Indicator */}
        <div className="mt-16 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 text-center sm:text-left">
          <p>© {currentYear} LUXCUSTOMS. All rights reserved.</p>
          <p className="tracking-[0.2em] text-zinc-600 uppercase mt-2 sm:mt-0">
            Springvale · VIC
          </p>
        </div>

      </div>
    </footer>
  );
}
