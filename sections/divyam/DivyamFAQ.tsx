'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'
import { divyamFaqs } from '@/data/divyamFaqs'

const WA_MESSAGE = "Hi, I have a question about the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle."

interface DivyamFAQProps {
  waNumber: string
}

export default function DivyamFAQ({ waNumber }: DivyamFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-soft-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="space-y-3 mb-10">
          {divyamFaqs.map((faq, i) => (
            <div key={faq.q} className="bg-white border border-border-gray rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="font-semibold text-dark-text text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gold shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Still have questions? Our advisors are here to help.</p>
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_faq')}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} /> Chat With an Advisor
          </a>
        </div>
      </div>
    </section>
  )
}
