'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle } from 'lucide-react'
import { useExitIntent } from '@/hooks/useExitIntent'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

export default function ExitIntentPopup() {
  const { show, dismiss } = useExitIntent()

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-charcoal rounded-2xl w-full max-w-md overflow-hidden"
          >
            {/* Gold top border */}
            <div className="h-1 bg-gold w-full" />

            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>

              <h2 className="text-2xl font-playfair font-bold text-white text-center mb-3">
                WAIT! Get Latest Price & Brochure Instantly
              </h2>
              <p className="text-white/70 text-center mb-8">
                Connect directly with our commercial property advisors.
              </p>

              <div className="space-y-3">
                <a
                  href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { trackWhatsApp('exit_intent'); dismiss() }}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 rounded-xl hover:bg-[#22c55e] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  onClick={() => { trackCall('exit_intent'); dismiss() }}
                  className="w-full flex items-center justify-center gap-3 border-2 border-gold text-gold font-semibold py-4 rounded-xl hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
