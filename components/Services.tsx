"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Factory, Construction, Map, Route, Building } from 'lucide-react';

const services = [
  {
    title: 'PEB Structures',
    description: 'Design coordinated erection of Pre Engineered Buildings for industrial, warehousing, and logistics applications. Fast construction, high structural integrity, cost efficient.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    alt: 'PEB structure construction by Dahab Construction in Hospet Karnataka',
    Icon: Factory,
  },
  {
    title: 'Industrial Warehouses & Sheds',
    description: 'RCC and conventional construction of factory sheds, storage units, and industrial buildings. Tailored to client specifications with full civil scope delivery.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    alt: 'Industrial warehouse and shed construction Bellary Karnataka',
    Icon: Construction,
  },
  {
    title: 'Road Works',
    description: 'Private and industrial internal road construction including haul roads, yard roads, stormwater drainage, and annual maintenance contracts for industrial estates and mining zones.',
    image: 'https://images.unsplash.com/photo-1464618663641-bbdd760ae84a',
    alt: 'Industrial road construction contractor in Karnataka',
    Icon: Route,
  },
  {
    title: 'Earthwork & Excavation',
    description: 'Bulk earthwork, site grading, formation filling, and excavation services. In house machinery capability for faster mobilization and cost control.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    alt: 'Earthwork and excavation contractor machinery Hospet',
    Icon: Map,
  },
  {
    title: 'Commercial Buildings',
    description: 'Turnkey structural civil execution for multi-story commercial complexes, office spaces, and institutional infrastructure.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    alt: 'Commercial building construction contractor in Karnataka',
    Icon: Building,
  }
];

export default function Services() {
  return (
    <section className="bg-navy-900 py-32 relative z-20 diagonal-cut-top diagonal-cut-bottom object-cover w-full" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Our Core Expertise
          </h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-white/70 font-sans text-lg max-w-2xl mx-auto">
            Delivering comprehensive civil engineering solutions across diverse infrastructure sectors with Railway grade precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group h-[400px] rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/85 group-hover:bg-navy-900/75 transition-colors duration-500" />
                </div>
                
                <div className="relative z-10 p-10 h-full flex flex-col justify-end glassmorphism opacity-100 border border-white/5 group-hover:border-gold-500/50 transition-colors duration-500">
                  <div className="mb-auto">
                    <Icon className="text-gold-500" size={56} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-3xl text-white mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 relative top-4 group-hover:top-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
