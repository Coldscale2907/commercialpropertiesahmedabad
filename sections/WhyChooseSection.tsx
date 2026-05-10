'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, TrendingUp, MapPin, Users, Zap, Award } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: 'Verified Commercial Listings', desc: 'Every project is thoroughly verified for legal compliance, builder credibility, and investment potential.' },
  { icon: TrendingUp, title: 'Market-Leading ROI Advisory', desc: 'Our advisors identify high-yield commercial properties with the best capital appreciation in Ahmedabad.' },
  { icon: MapPin, title: 'Deep Ahmedabad Market Knowledge', desc: 'Years of expertise across prime Ahmedabad corridors — Vaishnodevi, SG Highway, Iskon-Ambli and beyond.' },
  { icon: Users, title: 'Personalized Investment Guidance', desc: 'One-on-one advisory tailored to your budget, investment goals, and risk profile.' },
  { icon: Zap, title: 'Fast & Transparent Process', desc: 'Zero hidden charges, transparent documentation, and quick turnaround from inquiry to booking.' },
  { icon: Award, title: 'Trusted by 500+ Investors', desc: 'Over 500 investors and businesses trust Slabs and Beams Realty for their commercial property decisions.' },
]

export default function WhyChooseSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">OUR ADVANTAGE</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-3">
            Why Choose Slabs and Beams Realty
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-border-gray rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <reason.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-dark-text text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
