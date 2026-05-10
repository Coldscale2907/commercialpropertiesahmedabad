'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    title: 'Business Owner, Ahmedabad',
    quote: 'Found the perfect Grade-A office space in Prahlad Nagar through Slabs and Beams Realty. The team was knowledgeable, transparent, and made the entire process seamless. Excellent ROI from day one.',
    stars: 5,
  },
  {
    name: 'Priya Shah',
    title: 'Retail Investor, Surat',
    quote: 'I was looking for retail investment in Ahmedabad and their advisor guided me to SG Highway — the rental income has been outstanding. Professional team with deep market insights.',
    stars: 5,
  },
  {
    name: 'Amit Patel',
    title: 'HNI Investor, Vadodara',
    quote: 'Invested in GIFT City commercial space based on their recommendation. Already seeing 18% appreciation in 18 months. These guys really know the Ahmedabad commercial market.',
    stars: 5,
  },
]

export default function SocialProof() {
  return (
    <section className="section-padding bg-beige/40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Trusted by Investors Across Gujarat
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gold/20 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-dark-text/80 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border-gray">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                  <div className="text-dark-text/50 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 bg-charcoal rounded-2xl py-5 px-6"
        >
          {['500+ Happy Investors', '100% Verified Listings', '5-Star Rated Advisory'].map((m) => (
            <div key={m} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-white text-sm font-semibold">{m}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
