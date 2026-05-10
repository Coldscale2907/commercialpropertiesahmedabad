'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

const navLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Investment', href: '#investment' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal shadow-xl' : 'bg-transparent'}`}>
      <div className="container-max flex items-center justify-between px-4 md:px-8 lg:px-16 h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <div className="font-playfair font-bold text-lg md:text-xl text-white leading-tight">
            Commercial Properties
          </div>
          <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
            AHMEDABAD
          </div>
          <div className="text-white/50 text-[10px] tracking-wide">
            Slabs and Beams Realty
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-gold text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-gold text-gold text-sm font-semibold px-5 py-2 rounded-full hover:bg-gold hover:text-charcoal transition-colors"
          >
            Get Price →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-charcoal overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/80 hover:text-gold font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  onClick={() => { trackCall('mobile_nav'); setMobileOpen(false) }}
                  className="flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3 rounded-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { trackWhatsApp('mobile_nav'); setMobileOpen(false) }}
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
