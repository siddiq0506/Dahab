"use client";

import Link from 'next/link';
import { HardHat } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-20 pb-10 border-t-2 border-gold-500 relative z-10 diagonal-cut-top" style={{ marginTop: '0' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-white flex items-center gap-3">
                <HardHat className="text-gold-500" size={32} />
                Dahab Construction LLP
              </span>
            </Link>
            <p className="text-gold-500 font-heading font-bold text-lg mb-4">
              &quot;Built on Precision. Driven by Execution.&quot;
            </p>
            <p className="text-white/60 font-sans leading-relaxed max-w-sm">
              A DPIIT Registered MSME delivering Railway grade civil infrastructure and private sector development across northern Karnataka.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Our Services</Link></li>
              <li><Link href="/projects" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Featured Project</Link></li>
              <li><Link href="/why-us" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Why Choose Us</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">PEB Structures</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Industrial Warehouses</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Road Construction</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Earthwork & Excavation</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-gold-500 hover:translate-x-1 inline-block transition-all">Commercial Buildings</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Dahab Construction LLP. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>DPIIT Registered MSME</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Hospet, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
