"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Sparkles, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

const countryCodes = [
  { code: '+61', country: 'AU (+61)' },
  { code: '+1', country: 'US/CA (+1)' },
  { code: '+44', country: 'UK (+44)' },
  { code: '+91', country: 'IN (+91)' },
  { code: '+64', country: 'NZ (+64)' },
  { code: '+49', country: 'DE (+49)' },
  { code: '+81', country: 'JP (+81)' },
];

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      countryCode: '+61',
    }
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    const payload = {
      ...data,
      phone: `${data.countryCode} ${data.phone}`,
    };

    try {
      const response = await axios.post('/api/contact', payload);
      if (response.data.success) {
        setStatusMessage({
          type: 'success',
          text: response.data.message || 'Message sent successfully! We will be in touch shortly.',
        });
        reset();
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Network error. Please check your connection or call us directly.';
      setStatusMessage({ type: 'error', text: errorMsg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Request A <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Free Quote</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-12 backdrop-blur-sm shadow-2xl">
          
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Lux Customs</h3>
              
              <div className="space-y-4">
                <a href="tel:0468317131" className="flex items-center space-x-4 text-zinc-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Call Us</p>
                    <p className="font-semibold text-white">0468 317 131</p>
                  </div>
                </a>

                <a href="mailto:luxcustoms.au@gmail.com" className="flex items-center space-x-4 text-zinc-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</p>
                    <p className="font-semibold text-white truncate">luxcustoms.au@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-white">85 Kennington Park Dr, Springvale VIC 3802, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-lg h-72 w-full relative">
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

          <motion.div 
            className="lg:col-span-7 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-10 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            {statusMessage.type === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start space-x-3 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </motion.div>
            )}

            {statusMessage.type === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-start space-x-3 text-sm"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text"
                  placeholder="John Smith"
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                />
                {errors.fullName && <p className="text-rose-500 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", { 
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address format"
                    }
                  })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                />
                {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Phone Number *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <select
                    {...register("countryCode")}
                    className="sm:col-span-4 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm cursor-pointer"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code} className="bg-zinc-900 text-white">
                        {item.country}
                      </option>
                    ))}
                  </select>

                  <input 
                    type="tel"
                    placeholder="4xx xxx xxx"
                    {...register("phone", { required: "Phone number is required" })}
                    className="sm:col-span-8 w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                  />
                </div>
                {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Short message about your needs *
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your vehicle and services needed..."
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                />
                {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <div>
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox"
                    id="terms-section"
                    {...register("terms", { required: "You must agree to the terms and conditions" })}
                    className="mt-1 w-4 h-4 rounded bg-zinc-900 border-zinc-700 text-blue-600 focus:ring-blue-500 cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="terms-section" className="text-xs text-zinc-400 leading-relaxed cursor-pointer">
                    I agree to <a href="/terms" className="text-blue-400 underline">terms & conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </label>
                </div>
                {errors.terms && <p className="text-rose-500 text-xs mt-1">{errors.terms.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={submitting}
                className="w-full group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 disabled:opacity-75 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.01] cursor-pointer disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="inline-flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>SENDING MESSAGE...</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-2">
                    <span>SEND</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
