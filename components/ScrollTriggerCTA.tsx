'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, MessageCircle, Calendar } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing details."
const WA_VISIT = "Hi, I'd like to schedule a site visit for commercial properties in Ahmedabad."

export default function ScrollTriggerCTA() {
  const progress = useScrollProgress()
  const [dismissed, setDismissed] = useState(false)
  const visible = progress > 30 && progress < 95 && !dismissed

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="hidden md:block fixed bottom-32 right-6 z-40 w-72"
        >
          <div className="bg-navy text-white rounded-xl p-4 shadow-2xl border border-white/10">
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-gold flex-shrink-0" />
              <p className="text-sm font-semibold text-gold">Limited inventory in premium locations</p>
            </div>
            <p className="text-xs text-white/70 mb-4">Act fast — high-demand zones filling up quickly.</p>

            <div className="flex gap-2">
              <a
                href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('scroll_trigger')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#22c55e] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                Get Pricing
              </a>
              <a
                href={getWhatsAppURL(WA_NUMBER, WA_VISIT)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('scroll_trigger_visit')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-gold/20 border border-gold text-gold text-xs font-semibold py-2 rounded-lg hover:bg-gold hover:text-charcoal transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Schedule Visit
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
