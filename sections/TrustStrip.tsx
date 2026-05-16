'use client'
import { motion } from 'framer-motion'
import { MapPin, TrendingUp, ShieldCheck, Headphones } from 'lucide-react'

const stats = [
  { icon: MapPin, label: 'Prime Commercial Locations' },
  { icon: TrendingUp, label: 'High ROI Investment Opportunities' },
  { icon: ShieldCheck, label: 'Verified Property Listings' },
  { icon: Headphones, label: 'End-to-End Assistance' },
]

export default function TrustStrip() {
  return (
    <section className="bg-navy py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
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
    </section>
  )
}
