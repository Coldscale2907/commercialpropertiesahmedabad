'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'Fastest growing Tier-1 commercial market in India',
  'GIFT City driving massive commercial and office demand',
  'SG Highway: India\'s premium commercial corridor',
  'Metro connectivity boosting commercial property values',
  'Strong rental yields of 6-9% annually on commercial spaces',
  'Rising HNI, institutional and NRI investment',
]

const stats = [
  { value: '6–9%', label: 'Annual Rental Yield' },
  { value: '15–25%', label: 'Capital Appreciation' },
  { value: '10+', label: 'Premium Ahmedabad Zones' },
  { value: '100+', label: 'Happy Investors' },
]

export default function InvestmentHighlights() {
  return (
    <section id="investment" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">WHY INVEST IN AHMEDABAD</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-6">
            Why Ahmedabad is India&apos;s Next Commercial Investment Hub
          </h2>
          <div className="space-y-4 mb-8">
            {bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-gold mt-0.5 shrink-0" />
                <span className="text-gray-600 text-base">{bullet}</span>
              </div>
            ))}
          </div>
          <a
            href="#properties"
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
          >
            Explore All Properties →
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-0 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-charcoal text-white rounded-xl p-6 text-center shadow-lg">
              <div className="font-playfair font-bold text-gold text-2xl md:text-3xl mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
