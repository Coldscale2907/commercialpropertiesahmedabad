'use client'
import { motion } from 'framer-motion'
import { Building2, Ruler, Car, ArrowUpDown, MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle. Please share pricing and details."

const stats = [
  { icon: Building2, label: 'G+32 Iconic Commercial Tower' },
  { icon: Ruler, label: 'Approx. 123-Meter Landmark Structure' },
  { icon: ArrowUpDown, label: '15 High-Speed Elevators' },
  { icon: Car, label: '1,400+ Car Parking Spaces' },
]

interface DivyamHighlightsProps {
  waNumber: string
}

export default function DivyamHighlights({ waNumber }: DivyamHighlightsProps) {
  return (
    <section className="bg-navy py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center border-b-2 border-gold pb-4"
            >
              <stat.icon size={28} className="text-gold mb-3" />
              <div className="text-white text-sm font-semibold text-center leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_highlights')}
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gold/90 transition-colors"
          >
            <MessageCircle size={18} /> Ask About Availability
          </a>
        </div>
      </div>
    </section>
  )
}
