'use client'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface FloatingWhatsAppProps {
  waNumber: string
}

export default function FloatingWhatsApp({ waNumber }: FloatingWhatsAppProps) {
  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-charcoal text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with Advisor
      </span>
      {/* Button */}
      <button
        onClick={() => {
          trackWhatsApp('floating')
          window.open(getWhatsAppURL(waNumber, WA_MESSAGE), '_blank')
        }}
        className="relative w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-green-600 transition-colors wa-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}
