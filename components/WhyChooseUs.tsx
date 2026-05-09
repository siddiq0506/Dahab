"use client";

import { motion } from 'framer-motion';
import { Train, Building2, MapPin, Award, Clock, MessageSquare } from 'lucide-react';

const reasons = [
  {
    title: 'Railway Grade Execution Discipline',
    description: 'Every project delivered with the precision and compliance standards demanded by Railway infrastructure work.',
    Icon: Train
  },
  {
    title: 'End to End Civil Capability',
    description: 'Earthwork to structural finish, we handle the full project scope without fragmented subcontracting.',
    Icon: Building2
  },
  {
    title: 'Local Belt Expertise',
    description: 'Deep knowledge of Hospet Bellary Gadag construction environment, soil conditions, material supply chains, and labour.',
    Icon: MapPin
  },
  {
    title: 'MSME Registered',
    description: 'DPIIT registered MSME LLP, eligible for government scheme benefits and formally structured for institutional clients.',
    Icon: Award
  },
  {
    title: 'On Time Delivery Focus',
    description: 'Structured project planning with milestone based execution to ensure timely handover.',
    Icon: Clock
  },
  {
    title: 'Transparent Communication',
    description: 'Clients receive regular progress updates, documentation, and clear scope accountability throughout execution.',
    Icon: MessageSquare
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-32 border-t border-white/5 relative z-10" id="why-us">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-white/70 font-sans text-lg max-w-2xl mx-auto">
            The capability of a large scale contractor paired with the agility of an independent MSME.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.Icon;
            return (
              <motion.div 
                key={reason.title}
                variants={itemVariants}
                className="bg-navy-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors shadow-lg hover:shadow-xl group"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-navy-900 flex items-center justify-center border border-white/10 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-colors">
                    <Icon className="text-gold-500" strokeWidth={1.5} size={28} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-white/70 font-sans leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
