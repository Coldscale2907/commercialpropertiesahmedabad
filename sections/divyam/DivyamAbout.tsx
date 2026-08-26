'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, FileText } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle. Please share pricing and details."
const WA_BROCHURE = "Hi, please send me the brochure for the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle."

const highlights = [
  'G+32 iconic commercial tower',
  'Approx. 123-meter landmark structure',
  'Designed by renowned architect Mansi Shah',
  'Premium offices & showrooms',
  '15 high-speed elevators',
  '1,400+ car parking spaces',
  'Grand double-height entrance lobby',
  '100% Vastu-compliant office planning',
  'Terrace & duplex office options',
]

const specs = [
  { label: 'Size', value: '1,110 sq.ft Onwards' },
  { label: 'Category', value: 'Showroom & Office' },
  { label: 'Possession', value: 'Dec 2029' },
  { label: 'Booking Amount', value: '10%' },
  { label: 'Payment Terms', value: 'On Request' },
]

interface DivyamAboutProps {
  waNumber: string
}

export default function DivyamAbout({ waNumber }: DivyamAboutProps) {
  return (
    <section id="about-project" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — About + Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">ABOUT THE COMMERCIAL PROPERTY</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-4">
            Divyam Commercial Tower, Vaishnodevi
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Divyam Commercial Tower is an upcoming premium commercial project in Ahmedabad at Vaishnodevi Circle. One of the Prime Commercial Property in Ahmedabad, strategically located with seamless connectivity to SG Highway and SP Ring Road. Designed as an Iconic G+32 Commercial Tower, offering premium commercial office space in Ahmedabad. A Prestigious and upcoming commercial project in Ahmedabad that showcases Showrooms with contemporary architecture, luxury corporate infrastructure.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-gray-600 text-sm md:text-base">{h}</span>
              </div>
            ))}
          </div>

          <a
            href={getWhatsAppURL(waNumber, WA_BROCHURE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_about_brochure')}
            className="inline-flex items-center gap-2 border-2 border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-white transition-colors"
          >
            <FileText size={18} /> Request Brochure on WhatsApp
          </a>
        </motion.div>

        {/* Right — Specs Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-0"
        >
          <div className="bg-soft-white border border-border-gray rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-playfair font-semibold text-dark-text text-xl mb-5">Project Specifications</h3>
            <div className="divide-y divide-border-gray">
              {specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between py-3">
                  <span className="text-gray-500 text-sm">{s.label}</span>
                  <span className="text-dark-text font-semibold text-sm md:text-base">{s.value}</span>
                </div>
              ))}
            </div>
            <a
              href={getWhatsAppURL(waNumber, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('divyam_specs_card')}
              className="mt-6 flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3.5 rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} /> Get Latest Price List
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
