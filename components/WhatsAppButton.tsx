'use client'

import { MessageCircle } from 'lucide-react'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20commercial%20properties.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5C] transition-colors duration-300"
      aria-label="Chat on WhatsApp"
      style={{ borderRadius: '50%' }}
    >
      <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <MessageCircle size={28} className="relative z-10" />
    </a>
  )
}
