import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react'
import { getWhatsAppURL } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="h-px bg-gold/30 w-full" />
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="font-playfair font-bold text-xl text-white mb-1">Commercial Properties</div>
            <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">AHMEDABAD</div>
            <div className="text-white/40 text-xs mb-4">Powered by Slabs and Beams Realty</div>
            <div className="gold-line mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Ahmedabad&apos;s premier commercial real estate advisory. Helping investors and businesses find the right commercial space since 2015.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <div className="gold-line mb-4" />
            <ul className="space-y-2.5">
              {['Home', 'Featured Properties', 'Investment Highlights', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Property Types</h3>
            <div className="gold-line mb-4" />
            <ul className="space-y-2.5">
              {['Office Spaces', 'Retail Shops', 'Showrooms', 'Commercial Hubs', 'GIFT City Offices', 'SG Highway Retail'].map((type) => (
                <li key={type}>
                  <a href="#properties" className="text-white/60 hover:text-gold text-sm transition-colors">{type}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <div className="gold-line mb-4" />
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a href={`tel:+${PHONE_NUMBER}`} className="text-white/60 hover:text-gold text-sm transition-colors">+{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:info@commercialpropertiesahmedabad.in" className="text-white/60 hover:text-gold text-sm transition-colors">info@commercialpropertiesahmedabad.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">Prahlad Nagar, Ahmedabad, Gujarat — 380015</span>
              </li>
            </ul>
            <a
              href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-[#22c55e] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-gold/20 w-full" />
      <div className="container-max px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs text-center md:text-left">
          © 2025 Commercial Properties Ahmedabad. Powered by Slabs and Beams Realty. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">
          commercialpropertiesahmedabad.in
        </p>
      </div>
    </footer>
  )
}
