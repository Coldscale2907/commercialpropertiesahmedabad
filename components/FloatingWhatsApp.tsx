'use client'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

export default function FloatingWhatsApp() {
  const handleClick = () => {
    trackWhatsApp('floating_button')
    window.open(getWhatsAppURL(WA_NUMBER, WA_MESSAGE), '_blank')
  }

  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-50">
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-charcoal text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with Advisor
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-charcoal" />
        </div>

        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-[pulse-ring_2s_ease-out_infinite]" />

        {/* Button */}
        <button
          onClick={handleClick}
          className="wa-pulse relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </button>
      </div>
    </div>
  )
}
