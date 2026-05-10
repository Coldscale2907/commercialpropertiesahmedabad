'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Calendar } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."
const WA_VISIT = "Hi, I'd like to schedule a site visit for commercial properties in Ahmedabad."

interface ScrollTriggerCTAProps {
  waNumber: string
  phone: string
}

export default function ScrollTriggerCTA({ waNumber }: ScrollTriggerCTAProps) {
  const progress = useScrollProgress()
  const [dismissed, setDismissed] = useState(false)

  return (
    <AnimatePresence>
      {progress > 30 && !dismissed && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="fixed bottom-24 right-4 z-40 md:bottom-6 bg-navy text-white rounded-xl p-4 shadow-xl max-w-xs w-[280px]"
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
          <p className="text-sm font-semibold mb-3 pr-4">
            ⚡ Limited inventory in premium Ahmedabad locations
          </p>
          <div className="flex gap-2">
            <a
              href={getWhatsAppURL(waNumber, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('scroll_trigger')}
              className="flex-1 flex items-center justify-center gap-1 bg-gold text-charcoal text-xs font-bold py-2 rounded-lg hover:bg-gold/90 transition-colors"
            >
              <MessageCircle size={14} /> Get Pricing
            </a>
            <a
              href={getWhatsAppURL(waNumber, WA_VISIT)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('scroll_trigger_visit')}
              className="flex-1 flex items-center justify-center gap-1 border border-white text-white text-xs font-semibold py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Calendar size={14} /> Schedule Visit
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
