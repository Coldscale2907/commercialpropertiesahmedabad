'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface MobileStickyBarProps {
  waNumber: string
  phone: string
}

export default function MobileStickyBar({ waNumber, phone }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.15)] flex h-14">
      <a
        href={`tel:+${phone}`}
        onClick={() => trackCall('mobile_sticky')}
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-semibold text-sm"
      >
        <Phone size={18} /> Call Now
      </a>
      <a
        href={getWhatsAppURL(waNumber, WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp('mobile_sticky')}
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  )
}
