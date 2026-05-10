'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href={`tel:+${PHONE_NUMBER}`}
        onClick={() => trackCall('mobile_sticky_bar')}
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-semibold text-base h-14 active:opacity-90 transition-opacity"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp('mobile_sticky_bar')}
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-base h-14 active:opacity-90 transition-opacity"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        WhatsApp
      </a>
    </div>
  )
}
