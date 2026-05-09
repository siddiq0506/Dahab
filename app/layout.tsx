import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['400', '500', '600', '700', '800'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Dahab Construction LLP | PEB Structures | Industrial Warehouses | Road Construction | Earthwork Contractors | Hospet Karnataka',
  description: 'Dahab Construction LLP is a DPIIT registered MSME civil contractor based in Hospet Karnataka specialising in PEB structures, industrial warehouse and shed construction, road construction, earthwork and excavation, and Railway infrastructure works across the Hospet Bellary Gadag belt in northern Karnataka.',
  keywords: 'PEB structures Hospet, PEB contractor Karnataka, industrial warehouse construction Hospet, shed construction Bellary, earthwork contractors Hospet, road construction Karnataka, civil contractor Hospet, Railway contractor Karnataka, steel structure contractor, industrial shed construction northern Karnataka, MSME civil contractor Karnataka, warehouse builder Hospet, PEB erection contractor, earthwork excavation contractor Karnataka, construction company Hospet',
  alternates: {
    canonical: 'https://www.dahabconstruction.com',
  },
  openGraph: {
    title: 'Dahab Construction LLP | Industrial and Railway Civil Contractor | Hospet Karnataka',
    description: 'Railway grade civil execution for PEB structures, industrial warehouses, road construction and earthwork across northern Karnataka. DPIIT registered MSME.',
    url: 'https://www.dahabconstruction.com',
    siteName: 'Dahab Construction',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dahab Construction LLP",
    "description": "DPIIT registered MSME civil contractor specialising in PEB structures, industrial warehouses, road construction and earthwork in Hospet Karnataka",
    "additionalType": "https://schema.org/GeneralContractor",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hospet",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": ["Hospet", "Bellary", "Gadag", "Koppal", "Hubballi", "Karnataka"],
    "knowsAbout": ["PEB Structures", "Industrial Warehouses", "Road Construction", "Earthwork", "Railway Infrastructure"],
    "foundingDate": "2024",
    "legalName": "Dahab Construction LLP",
    "numberOfEmployees": "10-50"
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-navy-800 text-white selection:bg-gold-500 selection:text-navy-900 overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
