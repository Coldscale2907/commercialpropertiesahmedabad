'use client'
import { motion } from 'framer-motion'
import {
  Building2, Users, UtensilsCrossed, Award, ArrowUpDown, Car, ShieldCheck, Zap, MessageCircle,
} from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_MESSAGE = "Hi, please share the full amenities list for the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle."

const amenities = [
  { icon: Building2, label: 'Grand Business Lobby' },
  { icon: Users, label: 'Reception & Waiting Lounge' },
  { icon: UtensilsCrossed, label: 'In-House Multi-Cuisine Restaurant' },
  { icon: Award, label: 'Premium Banquet Hall' },
  { icon: ArrowUpDown, label: 'High-Speed Elevators' },
  { icon: Car, label: 'Visitor Parking' },
  { icon: ShieldCheck, label: '24×7 Security' },
  { icon: Zap, label: 'Power Backup' },
]

interface DivyamAmenitiesProps {
  waNumber: string
}

export default function DivyamAmenities({ waNumber }: DivyamAmenitiesProps) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-soft-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">AMENITIES</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-3">
            World-Class Business Infrastructure
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-white border border-border-gray rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow"
            >
              <div className="w-11 h-11 bg-gold/10 rounded-full flex items-center justify-center">
                <a.icon size={20} className="text-gold" />
              </div>
              <span className="text-dark-text text-sm font-medium leading-snug">{a.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_amenities')}
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
          >
            <MessageCircle size={18} /> Ask About Full Amenities List
          </a>
        </div>
      </div>
    </section>
  )
}
