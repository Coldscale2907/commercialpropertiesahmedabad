'use client'
import { motion } from 'framer-motion'
import { Shield, TrendingUp, MapPin, Users, Zap, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Verified Commercial Listings',
    text: 'Every property is personally verified by our experts. No misleading listings, no hidden surprises.',
  },
  {
    icon: TrendingUp,
    title: 'Market-Leading ROI Advisory',
    text: 'Data-driven investment recommendations based on market trends, rental yields, and growth projections.',
  },
  {
    icon: MapPin,
    title: 'Deep Ahmedabad Market Knowledge',
    text: 'Over a decade of presence in the Ahmedabad commercial market. We know every micro-market intimately.',
  },
  {
    icon: Users,
    title: 'Personalized Investment Guidance',
    text: 'One-on-one advisor assigned to every client. Your goals, budget, and timeline drive our recommendations.',
  },
  {
    icon: Zap,
    title: 'Fast & Transparent Process',
    text: 'Quick responses, clear pricing, zero brokerage surprises. We respect your time and trust.',
  },
  {
    icon: Award,
    title: 'Trusted by 500+ Investors',
    text: 'A growing community of investors and businesses who have found their ideal commercial space with us.',
  },
]

export default function WhyChooseSection() {
  return (
    <section id="about" className="section-padding bg-soft-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Why Choose Slabs and Beams Realty
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-border-gray hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-charcoal mb-2">{feature.title}</h3>
              <p className="text-dark-text/70 text-sm leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
