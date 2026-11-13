"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      service: 'General Enquiry',
    }
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await axios.post('/api/contact', data);
      if (response.data.success) {
        setStatusMessage({
          type: 'success',
          text: response.data.message || 'Your quote request has been sent successfully! We will contact you soon.',
        });
        reset();
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Failed to send message. Please try calling us directly at 0468 317 131.';
      setStatusMessage({ type: 'error', text: errorMsg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
            <span className="w-8 h-[1px] bg-[#FBBF24]" />
            <span>Send An Enquiry</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Get an <span className="text-[#FBBF24]">honest quote.</span>
          </h1>
        </div>

        {/* Main Grid: Form on Left, Info Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (Span 7) */}
          <motion.div 
            className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Success Banner */}
            {statusMessage.type === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* Error Banner */}
            {statusMessage.type === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-start space-x-3 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Row 1: Name & Email Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    Name *
                  </label>
                  <input 
                    type="text"
                    placeholder="Your name"
                    {...register("fullName", { required: "Name is required" })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FBBF24] transition-colors text-sm"
                  />
                  {errors.fullName && <p className="text-rose-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    Email *
                  </label>
                  <input 
                    type="email"
                    placeholder="you@email.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email format"
                      }
                    })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FBBF24] transition-colors text-sm"
                  />
                  {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Row 2: Phone & Service Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    Phone
                  </label>
                  <input 
                    type="tel"
                    placeholder="04xx xxx xxx"
                    {...register("phone", { required: "Phone number is required" })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FBBF24] transition-colors text-sm"
                  />
                  {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    Service
                  </label>
                  <select
                    {...register("service")}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-[#FBBF24] transition-colors text-sm cursor-pointer"
                  >
                    <option value="General Enquiry" className="bg-zinc-950 text-white">General Enquiry</option>
                    <option value="Window Tinting" className="bg-zinc-950 text-white">Window Tinting</option>
                    <option value="Tint Removal" className="bg-zinc-950 text-white">Tint Removal</option>
                    <option value="Detailing" className="bg-zinc-950 text-white">Detailing</option>
                    <option value="Paint Correction" className="bg-zinc-950 text-white">Paint Correction</option>
                    <option value="Paint Protection" className="bg-zinc-950 text-white">Paint Protection</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-widest text-zinc-400 uppercase">
                  Message *
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your car and what you'd like done..."
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FBBF24] transition-colors resize-none text-sm"
                />
                {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button (Fixed sizing with inline-flex & padding instead of w-full) */}
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center space-x-2 bg-[#FBBF24] text-zinc-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#f5b316] shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] cursor-pointer disabled:opacity-75"
                >
                  {submitting ? (
                    <span className="inline-flex items-center space-x-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>SENDING...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </span>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

          {/* Right Column: Contact Cards & Google Map */}
          <motion.div 
            className="lg:col-span-5 space-y-6 order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <a 
              href="tel:0468317131"
              className="flex items-center space-x-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:border-[#FBBF24] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#FBBF24] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold">Call The Studio</p>
                <p className="text-lg font-extrabold text-white">0468 317 131</p>
              </div>
            </a>

            <div className="flex items-center space-x-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#FBBF24] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold">Visit Us</p>
                <p className="text-base font-bold text-white">Springvale, VIC 3802</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#FBBF24] flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold">Hours</p>
                <p className="text-sm font-bold text-white">Mon – Sat · 9:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-lg h-64 w-full">
              <iframe
                title="Lux Customs Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197.523999641186!2d145.2457621602237!3d-37.96760401638324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6177515a192fb%3A0xc47c1a9724f24199!2sLux%20Customs!5e0!3m2!1sen!2sin!4v1789288494459!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
