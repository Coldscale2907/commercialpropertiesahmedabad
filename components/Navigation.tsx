'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Properties', href: '#properties' },
  { label: 'Why Ahmedabad', href: '#why-choose-ahmedabad' },
  { label: 'Locations', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface NavigationProps {
  waNumber: string
  phone: string
}

export default function Navigation({ waNumber, phone }: NavigationProps) {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-charcoal shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-playfair font-bold text-white text-base md:text-lg tracking-tight">
            Commercial Properties
          </span>
          <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">
            Ahmedabad &nbsp;·&nbsp; Slabs and Beams Realty
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/75 hover:text-gold text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+${phone}`}
            onClick={() => trackCall('nav')}
            className="border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all px-5 py-2 rounded-full text-sm font-semibold"
          >
            Get Price →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-charcoal border-t border-white/10 px-4 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-gold text-base font-medium py-2 border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:+${phone}`}
              onClick={() => { trackCall('mobile_nav'); setMenuOpen(false) }}
              className="flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-xl font-semibold mt-2"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href={getWhatsAppURL(waNumber, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { trackWhatsApp('mobile_nav'); setMenuOpen(false) }}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
