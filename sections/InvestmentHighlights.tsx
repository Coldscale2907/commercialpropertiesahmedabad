'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

const bullets = [
  'Fastest growing Tier-1 commercial market in India',
  'GIFT City driving massive commercial demand and institutional investment',
  'SG Highway — India\'s premium commercial corridor with 50,000+ daily footfall',
  'Metro connectivity boosting commercial values across all zones',
  'Strong rental yields — 6–9% annually, outperforming residential',
  'Rising HNI and institutional investment confidence in Ahmedabad',
]

const stats = [
  { value: '6–9%', label: 'Rental Yield' },
  { value: '15–25%', label: 'Appreciation Potential' },
  { value: '₹500Cr+', label: 'Annual Commercial Transactions' },
  { value: '40+', label: 'Premium Commercial Zones' },
]

export default function InvestmentHighlights() {
  return (
    <section id="investment" className="section-padding bg-soft-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Investment Case</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Ahmedabad is India&apos;s Next Commercial Investment Hub
            </h2>
            <div className="gold-line mb-6" />

            <ul className="space-y-4 mb-8">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-dark-text/80 text-sm md:text-base leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#properties"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
            >
              Explore Investment Opportunities →
            </a>
          </motion.div>

          {/* Right: stats + image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Ahmedabad Commercial Real Estate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
            </div>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-charcoal rounded-xl p-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-gold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
