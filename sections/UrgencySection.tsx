'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppURL } from '@/lib/utils'

const urgencyCards = [
  {
    title: 'Twin Towers — Vaishnodevi',
    subtitle: 'Possession Mar 2025 — Ready to Move',
    price: '₹81 Lacs Onwards',
    dotColor: 'bg-red-500',
    waMsg: "Hi, I'm interested in Twin Towers at Vaishnodevi. Please share details.",
  },
  {
    title: 'Centroid — Iskon-Ambli',
    subtitle: 'Only Limited Units Remaining',
    price: '₹3 Cr Onwards',
    dotColor: 'bg-amber-500',
    waMsg: "Hi, I'm interested in Centroid at Iskon-Ambli. Please share details.",
  },
  {
    title: 'Marvel — Hebatpur',
    subtitle: 'High Demand Offices — 191 Units Only',
    price: '₹2 Cr Onwards',
    dotColor: 'bg-red-500',
    waMsg: "Hi, I'm interested in Marvel at Hebatpur. Please share details.",
  },
]

interface UrgencySectionProps {
  waNumber: string
  phone: string
}

export default function UrgencySection({ waNumber }: UrgencySectionProps) {
  return (
    <section className="bg-navy py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl mb-3">
            Premium Commercial Spaces Moving Fast
          </h2>
          <p className="text-gold text-base md:text-lg">
            High-demand Ahmedabad locations with limited availability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {urgencyCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-charcoal rounded-xl p-6 border-l-4 border-gold relative overflow-hidden"
            >
              {/* Pulse dot */}
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${card.dotColor} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${card.dotColor}`} />
                </span>
                <span className="text-white/60 text-xs uppercase tracking-wide font-semibold">Live Activity</span>
              </div>
              <h3 className="font-playfair text-white text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{card.subtitle}</p>
              <p className="text-gold font-bold text-xl mb-4">{card.price}</p>
              <a
                href={getWhatsAppURL(waNumber, card.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-gold text-gold text-sm px-4 py-2 rounded-lg hover:bg-gold hover:text-white transition-colors"
              >
                <MessageCircle size={14} /> Get Details →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/80 text-lg mb-4 font-semibold">
            Don&apos;t Miss Out — Talk to Our Advisor Now
          </p>
          <a
            href={getWhatsAppURL(waNumber, "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            <MessageCircle size={20} /> 💬 Chat on WhatsApp Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
