'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

const trustItems = [
  '✓ Verified Projects',
  '✓ Prime Locations',
  '✓ High ROI Potential',
  '✓ Expert Guidance',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Commercial Properties Ahmedabad"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 lg:px-16 py-24 pt-36 md:pt-40 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="inline-block text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 border border-gold/40 px-4 py-1.5 rounded-full">
              AHMEDABAD&apos;S PREMIER COMMERCIAL REAL ESTATE ADVISORY
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Premium Commercial Properties in Ahmedabad
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gold text-lg md:text-xl font-semibold mb-4"
          >
            High-Growth Commercial Spaces for Investors, Businesses &amp; Brands.
          </motion.p>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10"
          >
            Explore premium office spaces, retail shops, showrooms, and investment opportunities across Ahmedabad&apos;s fastest-growing commercial destinations.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('hero')}
              className="flex items-center gap-3 bg-[#25D366] text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-2xl hover:bg-[#22c55e] transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Get Price on WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              onClick={() => trackCall('hero')}
              className="flex items-center gap-3 border-2 border-white/60 text-white font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {trustItems.map((item) => (
              <span
                key={item}
                className="text-white/80 text-xs md:text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  )
}
