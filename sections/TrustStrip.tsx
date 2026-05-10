'use client'
import { motion } from 'framer-motion'
import { Users, Building2, LayoutGrid, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Investor Inquiries' },
  { icon: Building2, value: '100+', label: 'Site Visits' },
  { icon: LayoutGrid, value: '50+', label: 'Premium Listings' },
  { icon: Award, value: '10+', label: 'Years Expertise' },
]

export default function TrustStrip() {
  return (
    <section className="bg-navy py-12 px-4 md:px-8 lg:px-16">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
