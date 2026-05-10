'use client'
import { motion } from 'framer-motion'
import { TrendingUp, MapPin, Building2, Award } from 'lucide-react'

const stats = [
  { icon: TrendingUp, number: '500+', label: 'Investor Inquiries' },
  { icon: MapPin, number: '100+', label: 'Site Visits' },
  { icon: Building2, number: '50+', label: 'Premium Listings' },
  { icon: Award, number: '10+', label: 'Years Expertise' },
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
            <stat.icon size={28} className="text-gold mb-2" />
            <div className="font-playfair font-bold text-gold text-3xl md:text-4xl">{stat.number}</div>
            <div className="text-white text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
