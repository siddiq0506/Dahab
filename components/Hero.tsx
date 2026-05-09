"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Counter Hook
function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 1000;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return count;
}

export default function Hero() {
  const valueCount = useCounter(400, 2);
  const structuresCount = useCounter(2, 2);
  const servicesCount = useCounter(5, 2);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="Dahab Construction Heavy Infrastructure Work"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/70 to-navy-900/40 grain-overlay z-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col justify-center h-full pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-heading font-extrabold text-[40px] md:text-[72px] text-white leading-[1.1] tracking-tight mb-6">
            Building Infrastructure That Moves India
          </h1>
          <p className="text-white/90 text-[16px] md:text-[20px] max-w-2xl font-sans leading-[1.7] mb-10">
            Dahab Construction LLP &mdash; DPIIT Registered MSME | Hospet Karnataka | Railway Grade Civil Execution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projects"
              className="bg-gold-500 hover:bg-transparent border-2 border-gold-500 text-navy-900 hover:text-gold-500 px-8 py-4 font-heading font-bold rounded text-center transition-all duration-300"
            >
              View Our Projects
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent hover:bg-white border-2 border-white text-white hover:text-navy-900 px-8 py-4 font-heading font-bold rounded text-center transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated Floating Stat Counters */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-0 w-full z-30 bg-navy-900/80 backdrop-blur-md border-t border-gold-500/50"
      >
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-heading font-bold text-4xl text-gold-500 mb-2 whitespace-nowrap">
                <span className="text-3xl">₹</span>{valueCount}<span className="text-2xl">Lakhs+</span>
              </h3>
              <p className="text-white/70 font-heading text-xs uppercase tracking-wider font-semibold">Active Project Value</p>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-bold text-4xl text-gold-500 mb-2">
                {structuresCount}+
              </h3>
              <p className="text-white/70 font-heading text-xs uppercase tracking-wider font-semibold">Railway Structures</p>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-bold text-4xl text-gold-500 mb-2">
                {servicesCount}
              </h3>
              <p className="text-white/70 font-heading text-xs uppercase tracking-wider font-semibold">Core Service Verticals</p>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-bold text-3xl text-gold-500 mb-2 flex justify-center items-center h-[40px]">
                MSME
              </h3>
              <p className="text-white/70 font-heading text-xs uppercase tracking-wider font-semibold">DPIIT Registered</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
