'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface WhatsAppCTABannerProps {
  heading: string
  subtext: string
  darkBg: boolean
  waNumber: string
  phone: string
}

export default function WhatsAppCTABanner({ heading, subtext, darkBg, waNumber, phone }: WhatsAppCTABannerProps) {
  return (
    <section className={`${darkBg ? 'bg-charcoal' : 'bg-navy'} py-16 px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Icon */}
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
          <MessageCircle size={32} className="text-white" />
        </div>

        <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl mb-3">
          {heading}
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8">{subtext}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            <MessageCircle size={20} /> 💬 Chat on WhatsApp
          </a>
          <a
            href={`tel:+${phone}`}
            className="flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-white transition-colors"
          >
            <Phone size={20} /> 📞 Call Now
          </a>
        </div>
      </motion.div>
    </section>
  )
}
