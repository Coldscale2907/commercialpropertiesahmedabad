'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'

const urgencyCards = [
  {
    location: 'SG Highway',
    tag: 'High Demand Zone',
    message: 'Only 3 units left in this premium corridor',
    pulse: 'bg-red-500',
    waText: 'Hi, I\'m interested in SG Highway commercial properties. Please share details urgently.',
  },
  {
    location: 'GIFT City Commercial Tower',
    tag: 'Pre-Launch Pricing',
    message: 'Pre-launch pricing closing soon — limited allocation',
    pulse: 'bg-amber-500',
    waText: 'Hi, I\'m interested in GIFT City Commercial Tower. Please share pre-launch pricing before it closes.',
  },
  {
    location: 'Prahlad Nagar Retail Strip',
    tag: 'Limited Ground Floor',
    message: 'Limited ground floor units remaining',
    pulse: 'bg-red-500',
    waText: 'Hi, I\'m interested in Prahlad Nagar Retail Strip ground floor units. Please share details.',
  },
]

export default function UrgencySection() {
  return (
    <section className="bg-navy section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Act Fast</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Commercial Spaces Moving Fast
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {urgencyCards.map((card, i) => (
            <motion.div
              key={card.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-charcoal rounded-2xl p-6 border border-white/10 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className={`w-3 h-3 ${card.pulse} rounded-full`} />
                  <div className={`absolute inset-0 ${card.pulse} rounded-full animate-ping opacity-75`} />
                </div>
                <span className="text-gold text-xs font-bold uppercase tracking-wider">{card.tag}</span>
              </div>
              <h3 className="font-playfair font-bold text-xl text-white mb-2">{card.location}</h3>
              <p className="text-white/60 text-sm mb-5">{card.message}</p>
              <a
                href={getWhatsAppURL(WA_NUMBER, card.waText)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('urgency_card')}
                className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#22c55e] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Get Details →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <p className="text-white/80 text-lg font-semibold mb-5">
            Don&apos;t Miss Out — Talk to Our Advisor Now
          </p>
          <a
            href={getWhatsAppURL(WA_NUMBER, "Hi, I don't want to miss out on prime commercial properties in Ahmedabad. Please share available options.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('urgency_cta')}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#22c55e] transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            Connect with Advisor on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
