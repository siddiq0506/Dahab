"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeaturedProject() {
  return (
    <section className="relative py-32 z-10" id="projects">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3"
          alt="Railway infrastructure FOB project by Dahab Construction in Karnataka"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80 grain-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block bg-gold-500 text-navy-900 px-4 py-1 font-heading font-bold uppercase tracking-wider text-sm rounded mb-4 shadow-sm">
            Ongoing Project
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Foot Over Bridge Construction
          </h2>
          <h3 className="font-heading font-semibold text-2xl text-gold-400">
            South Western Railway | Hubballi Division
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 glassmorphism p-8 md:p-10 rounded-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <dt className="text-gold-500 font-heading font-bold text-sm uppercase mb-1 tracking-wider">Role</dt>
                <dd className="text-white font-sans text-lg font-medium">Civil Subcontractor</dd>
              </div>
              <div>
                <dt className="text-gold-500 font-heading font-bold text-sm uppercase mb-1 tracking-wider">Project Value</dt>
                <dd className="text-white font-sans text-lg font-bold">₹400 Lakhs+</dd>
              </div>
              <div>
                <dt className="text-gold-500 font-heading font-bold text-sm uppercase mb-1 tracking-wider">Structure Type</dt>
                <dd className="text-white font-sans text-lg font-medium">3 Metre Wide Foot Over Bridge (FOB)</dd>
              </div>
              <div>
                <dt className="text-gold-500 font-heading font-bold text-sm uppercase mb-1 tracking-wider">Division</dt>
                <dd className="text-white font-sans text-lg font-medium">Hubballi, South Western Railway</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-gold-500 font-heading font-bold text-sm uppercase mb-1 tracking-wider">Locations</dt>
                <dd className="text-white font-sans text-lg font-medium">Halligudi Yard (SW-I) &amp; Hitnal Yard (SW-II), GDG HPT Corridor</dd>
              </div>
              <div className="sm:col-span-2 pt-4 border-t border-white/10 mt-2">
                <dt className="text-gold-500 font-heading font-bold text-sm uppercase mb-1 tracking-wider">Status</dt>
                <dd className="text-gold-400 font-heading text-xl font-bold uppercase tracking-wider animate-pulse">Under Execution</dd>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-navy-900/90 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5 border-l-4 border-l-gold-500 shadow-2xl">
              <p className="text-white/90 font-sans leading-relaxed mb-6 text-lg">
                Dahab Construction is currently executing construction of two 3 metre wide Foot Over Bridges for two track crossing at Halligudi and Hitnal yards on the Gadag Hospet rail corridor, under the Hubballi Division of South Western Railway.
              </p>
              <p className="text-white/90 font-sans leading-relaxed text-lg">
                This project is being executed as civil subcontractor and reflects our capability to deliver Railway grade structural works within live rail environments, with strict adherence to safety protocols, Railway specifications, and schedule compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
