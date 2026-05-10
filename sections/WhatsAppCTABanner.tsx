'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

interface WhatsAppCTABannerProps {
  heading?: string
  subtext?: string
}

export default function WhatsAppCTABanner({
  heading = 'Need Instant Property Details?',
  subtext = 'Our advisors are available to help you find the right commercial space.',
}: WhatsAppCTABannerProps) {
  return (
    <section className="bg-navy py-16 px-4 md:px-8 lg:px-16">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-[#25D366]" />
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-3">{heading}</h2>
          <p className="text-white/70 text-base max-w-lg mb-8">{subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('cta_banner')}
              className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#22c55e] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              onClick={() => trackCall('cta_banner')}
              className="flex items-center gap-3 border-2 border-gold text-gold font-bold px-8 py-4 rounded-full hover:bg-gold hover:text-charcoal transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
