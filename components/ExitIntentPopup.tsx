'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle } from 'lucide-react'
import { useExitIntent } from '@/hooks/useExitIntent'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface ExitIntentPopupProps {
  waNumber: string
  phone: string
}

export default function ExitIntentPopup({ waNumber, phone }: ExitIntentPopupProps) {
  const { show, dismiss } = useExitIntent()

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-charcoal border-t-4 border-gold rounded-xl p-8 max-w-md w-full relative shadow-2xl"
          >
            {/* X button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="text-center">
              <span className="inline-block text-gold font-bold text-sm tracking-widest uppercase mb-3">
                WAIT!
              </span>
              <h2 className="font-playfair text-white text-2xl font-bold mb-2">
                Get Latest Price &amp; Brochure Instantly
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Our commercial property advisors are available right now. Don&apos;t miss the best deals in Ahmedabad.
              </p>

              <a
                href={getWhatsAppURL(waNumber, WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackWhatsApp('exit_intent'); dismiss() }}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3 rounded-lg font-semibold text-base mb-3 hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} /> 💬 Chat on WhatsApp
              </a>

              <a
                href={`tel:+${phone}`}
                onClick={() => { trackCall('exit_intent'); dismiss() }}
                className="flex items-center justify-center gap-2 border-2 border-gold text-gold w-full py-3 rounded-lg font-semibold text-base hover:bg-gold hover:text-charcoal transition-colors"
              >
                <Phone size={20} /> 📞 Call Now
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
