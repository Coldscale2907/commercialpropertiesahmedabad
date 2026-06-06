'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface HeroSectionProps {
  waNumber: string
  phone: string
}

export default function HeroSection({ waNumber, phone }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/properties/hero-bg.jpg"
        alt="Premium Commercial Properties Ahmedabad"
        fill
        priority
        className="object-cover object-center"
        unoptimized
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs md:text-sm font-semibold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-6"
        >
          AHMEDABAD&apos;S PREMIER COMMERCIAL REAL ESTATE ADVISORY
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-playfair font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4"
        >
          Premium Commercial Properties in Ahmedabad
        </motion.h1>

        {/* Gold Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="w-20 h-0.5 bg-gold mx-auto my-6"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gold text-xl font-semibold mb-3"
        >
          High-Growth Commercial Spaces for Investors, Businesses &amp; Brands.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Discover premium commercial projects across Vaishnodevi, SG Highway, Iskon-Ambli, Hebatpur &amp; more, with expert guidance from Slabs and Beams Realty.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('hero')}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all"
          >
            <MessageCircle size={22} /> Get Price on WhatsApp
          </a>
          <a
            href={`tel:+${phone}`}
            onClick={() => trackCall('hero')}
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
          >
            <Phone size={20} /> Call Now
          </a>
        </motion.div>

        {/* Trust Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="hidden"
        >
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
