"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate frontend only processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="bg-white py-32 relative z-10" id="contact">
      {/* Animated gradient bg effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-muted/50 to-white/0 -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy-900 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <div className="w-20 h-1.5 bg-gold-500 mb-6"></div>
          <p className="text-navy-900/70 font-sans text-lg max-w-2xl">
            Reach out for project inquiries, subcontracting opportunities, or partnership discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-navy-900/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-heading font-bold text-navy-900 text-sm">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-muted border border-transparent focus:border-gold-500 focus:bg-white text-navy-900 rounded p-4 outline-none transition-all font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading font-bold text-navy-900 text-sm">Company Name</label>
                    <input type="text" placeholder="Acme Corp" className="w-full bg-muted border border-transparent focus:border-gold-500 focus:bg-white text-navy-900 rounded p-4 outline-none transition-all font-sans" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-heading font-bold text-navy-900 text-sm">Phone Number</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full bg-muted border border-transparent focus:border-gold-500 focus:bg-white text-navy-900 rounded p-4 outline-none transition-all font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading font-bold text-navy-900 text-sm">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full bg-muted border border-transparent focus:border-gold-500 focus:bg-white text-navy-900 rounded p-4 outline-none transition-all font-sans" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-heading font-bold text-navy-900 text-sm">Project Type</label>
                  <select required className="w-full bg-muted border border-transparent focus:border-gold-500 focus:bg-white text-navy-900 rounded p-4 outline-none transition-all font-sans appearance-none">
                    <option value="" disabled selected>Select an option</option>
                    <option value="PEB Structure">PEB Structure</option>
                    <option value="Warehouse Shed">Warehouse &amp; Shed</option>
                    <option value="Road Works">Road Works</option>
                    <option value="Earthwork">Earthwork</option>
                    <option value="Other">Other Civil Works</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-heading font-bold text-navy-900 text-sm">Project Details</label>
                  <textarea required rows={4} placeholder="Tell us about your requirements..." className="w-full bg-muted border border-transparent focus:border-gold-500 focus:bg-white text-navy-900 rounded p-4 outline-none transition-all font-sans resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-lg py-4 rounded flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Inquiry <Send size={20} /></>
                  )}
                </button>

                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 border border-green-200 rounded text-center font-heading font-semibold text-sm"
                  >
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Details / Maps */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="space-y-8 mb-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-lg flex-shrink-0 bg-navy-900 text-gold-500 flex items-center justify-center shadow-lg border-2 border-transparent hover:border-gold-500 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-navy-900 mb-1">Headquarters</h4>
                  <p className="text-navy-900/70 font-sans">Hospet, Bellary District<br />Karnataka, India</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-lg flex-shrink-0 bg-navy-900 text-gold-500 flex items-center justify-center shadow-lg border-2 border-transparent hover:border-gold-500 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-navy-900 mb-1">Phone</h4>
                  <p className="text-navy-900/70 font-sans">+91 8804888801<br />+91 8884944408</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-lg flex-shrink-0 bg-navy-900 text-gold-500 flex items-center justify-center shadow-lg border-2 border-transparent hover:border-gold-500 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-navy-900 mb-1">Email</h4>
                  <p className="text-navy-900/70 font-sans">dahabconstruction.hpt@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex-grow w-full min-h-[250px] bg-muted rounded-xl overflow-hidden shadow-inner relative group">
              {/* Replace with an actual Maps integration or Image, using an iframe for demo */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123018.78457784349!2d76.3129188049071!3d15.268571583091936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77ea107b34e1b%3A0xe54e2ee2a101f3e7!2sHosapete%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
