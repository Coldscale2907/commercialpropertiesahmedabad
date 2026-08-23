'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle. Please share pricing and details."

interface DivyamNavProps {
  waNumber: string
  phone: string
}

export default function DivyamNav({ waNumber, phone }: DivyamNavProps) {
  const scrolled = useScrolled(50)

  return (
    <nav className={`sticky top-0 z-50 bg-charcoal border-b border-white/10 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-playfair font-bold text-white text-sm md:text-lg tracking-tight">
            Upcoming New Launch
          </span>
          <span className="text-gold text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase">
            by Divyam Procon &nbsp;·&nbsp; Vaishnodevi
          </span>
        </div>

        {/* CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:+${phone}`}
            onClick={() => trackCall('divyam_nav')}
            className="border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5"
          >
            <Phone size={14} /> Call
          </a>
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('divyam_nav')}
            className="bg-[#25D366] text-white hover:bg-green-600 transition-all px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>

        {/* Mobile compact CTA */}
        <a
          href={getWhatsAppURL(waNumber, WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp('divyam_nav_mobile')}
          className="sm:hidden bg-[#25D366] text-white p-2 rounded-full"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </nav>
  )
}
