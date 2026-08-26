'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone, FileText } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle. Please share pricing and details."
const WA_BROCHURE = "Hi, please send me the brochure for the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle."

interface DivyamHeroProps {
  waNumber: string
  phone: string
}

export default function DivyamHero({ waNumber, phone }: DivyamHeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/properties/divyam-hero-bg.png"
        alt="Upcoming New Launch by Divyam Procon - Vaishnodevi Circle, Ahmedabad"
        fill
        priority
        className="object-cover object-center"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs md:text-sm font-semibold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-6"
        >
          Pre-Launch &middot; Booking Open
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-playfair font-bold text-white text-4xl md:text-6xl leading-tight mb-4"
        >
          Upcoming Prime Commercial Project in Ahmedabad : New Launch by Divyam Procon
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="w-20 h-0.5 bg-gold mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gold text-xl font-semibold mb-3"
        >
          An Iconic G+32 Commercial Tower at Vaishnodevi Circle, SG Highway
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Premium offices &amp; showrooms with contemporary architecture, luxury corporate infrastructure and a prestigious business address, at the intersection of SG Highway &amp; SP Ring Road.
        </motion.p>

        {/* Info Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm md:text-base font-semibold">
            1,110 sq.ft Onwards
          </span>
          <span className="bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm md:text-base font-semibold">
            Possession: Dec 2029
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 bg-gold text-charcoal font-bold text-sm md:text-base px-6 py-2.5 rounded-full shadow-lg shadow-gold/30 tracking-wide uppercase">
            ✦ Zero Brokerage Deals
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_hero')}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all"
          >
            <MessageCircle size={22} /> Get Price on WhatsApp
          </a>
          <a
            href={`tel:+${phone}`}
            onClick={() => trackCall('divyam_hero')}
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
          >
            <Phone size={20} /> Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 flex justify-center"
        >
          <a
            href={getWhatsAppURL(waNumber, WA_BROCHURE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_hero_brochure')}
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm font-medium underline underline-offset-4 transition-colors"
          >
            <FileText size={14} /> Request Brochure
          </a>
        </motion.div>
      </div>

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
