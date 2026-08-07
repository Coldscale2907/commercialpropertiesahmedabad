'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Business Owner',
    city: 'Ahmedabad',
    initial: 'R',
    stars: 5,
    text: 'Slabs and Beams helped me find the perfect office space in Centroid. Their knowledge of Ahmedabad\'s commercial market is unmatched. Highly professional and transparent.',
  },
  {
    name: 'Priya Shah',
    role: 'Retail Customer',
    city: 'Surat',
    initial: 'P',
    stars: 5,
    text: 'I purchased a showroom unit at Twin Towers on their recommendation. The growth potential is exceptional. The team made the entire process seamless.',
  },
  {
    name: 'Amit Patel',
    role: 'HNI Customer',
    city: 'Vadodara',
    initial: 'A',
    stars: 5,
    text: 'Their transparent advisory and deep market knowledge made my commercial property decision easy and confident. Best commercial real estate advisors in Ahmedabad.',
  },
]

const trustMetrics = [
  '500+ Happy Customers',
  '100% Verified Listings',
  '5-Star Rated Advisory',
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" style={{ background: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">TESTIMONIALS</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-3">
            Trusted by Customers Across Gujarat
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold text-base">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-dark-text text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}, {t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {trustMetrics.map((metric) => (
            <div key={metric} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow text-sm font-semibold text-dark-text">
              <span className="text-gold">✓</span> {metric}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
