"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white py-24 relative z-10" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1.5 bg-gold-500 mb-8"></div>
            <div className="space-y-6 text-navy-900/80 font-sans text-lg">
              <p>
                <strong className="text-navy-900">Dahab Construction LLP</strong> is a DPIIT registered MSME construction firm headquartered in Hospet Karnataka. Founded with a commitment to precision, safety, and timely delivery, we operate at the intersection of Railway infrastructure and private industrial construction.
              </p>
              <p>
                From Foot Over Bridges on live Railway corridors to industrial warehouses and earthwork for private developers, we execute with Railway grade discipline in every project we take on.
              </p>
              <p>
                Our work is concentrated in the Hospet Bellary Gadag construction belt, one of Karnataka&apos;s most active infrastructure and industrial zones. We are positioned as a full scope civil contractor capable of handling earthwork, structural construction, road works, and Pre Engineered Building (PEB) erection under one roof.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1590496793929-36417d3117de"
              alt="Dahab Construction site overview in Hospet Karnataka"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-700"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-md p-6 border-l-4 border-gold-500 rounded">
              <h3 className="font-heading font-bold text-white text-xl mb-2">Our Story</h3>
              <p className="text-white/80 font-sans text-sm">
                Rooted in Hospet and built on the discipline of Railway contracting, Dahab Construction was established to bring structured, accountable, and high quality civil execution to both public infrastructure and private development projects.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Partners */}
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl md:text-3xl text-navy-900 mb-10 text-center"
          >
            Our Core Leadership
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted p-8 rounded-xl border border-navy-900/5 hover:border-gold-500/30 transition-colors shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold-500 to-gold-400 p-1">
                  <div className="w-full h-full bg-navy-900 rounded-full flex items-center justify-center">
                    <User className="text-gold-500" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-navy-900">Mohammed Ryhan</h3>
                  <span className="inline-block bg-navy-900 text-gold-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-1">
                    Designated Partner
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-navy-900" size={18} />
                <span className="font-heading font-semibold text-sm text-navy-900">Bachelor of Commerce | Site Operations & Supervision</span>
              </div>
              <p className="text-navy-900/70 font-sans leading-relaxed">
                Mohammed Ryhan brings sharp commercial acumen and hands on site supervision capabilities to every project. With a strong grip on procurement, vendor coordination, and on ground execution management, he ensures that project timelines, material flow, and labour productivity stay on track. His presence on site is the operational backbone of Dahab Construction&apos;s delivery capability.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-muted p-8 rounded-xl border border-navy-900/5 hover:border-gold-500/30 transition-colors shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold-500 to-gold-400 p-1">
                  <div className="w-full h-full bg-navy-900 rounded-full flex items-center justify-center">
                    <User className="text-gold-500" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-navy-900">Abubacker Siddique</h3>
                  <span className="inline-block bg-navy-900 text-gold-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-1">
                    Designated Partner
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-navy-900" size={18} />
                <span className="font-heading font-semibold text-sm text-navy-900">Civil Engineering | Execution Strategy & Project Planning</span>
              </div>
              <p className="text-navy-900/70 font-sans leading-relaxed">
                Abubacker Siddique leads Dahab Construction&apos;s technical direction and project execution strategy. With a foundation in Civil Engineering and deep domain knowledge across Railway infrastructure, industrial construction, and real estate development, he architects the end to end execution approach for every project from tendering and planning to structural delivery and handover.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
