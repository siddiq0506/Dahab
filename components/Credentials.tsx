"use client";

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const credentials = [
  "Active Railway Infrastructure Contractor",
  "DPIIT Registered MSME",
  "LLP Registered Ministry of Corporate Affairs",
  "Karnataka Based Operations",
  "GST Registered",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function Credentials() {
  return (
    <section className="bg-gold-500 py-16 relative overflow-hidden z-10 diagonal-cut-bottom" style={{ paddingBottom: 'calc(4vw + 2rem)' }}>
      {/* Subtle texture for gold background */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <h2 className="font-heading font-extrabold text-3xl text-navy-900 md:text-left text-center">
              Our Credentials
            </h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-2/3 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {credentials.map((cred) => (
              <motion.div 
                key={cred}
                variants={badgeVariants}
                className="bg-navy-900 text-white font-heading font-semibold text-sm py-3 px-5 rounded-full flex items-center gap-2 shadow-lg"
              >
                <ShieldCheck className="text-gold-500" size={18} />
                <span>{cred}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
