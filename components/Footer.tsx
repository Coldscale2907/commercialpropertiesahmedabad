import { MessageCircle, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'
import { getWhatsAppURL } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface FooterProps {
  waNumber: string
  phone: string
}

export default function Footer({ waNumber, phone }: FooterProps) {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Logo & Tagline */}
        <div className="mb-12 text-center lg:text-left">
          <div className="font-playfair font-bold text-2xl text-white mb-1">
            Commercial Properties <span className="text-gold">Ahmedabad</span>
          </div>
          <div className="text-gray-400 text-sm">Powered by Slabs and Beams Realty</div>
          <p className="text-gray-400 text-sm mt-3 max-w-md lg:max-w-xs">
            Ahmedabad&apos;s premier commercial real estate advisory, connecting investors and businesses with prime commercial spaces.
          </p>
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4 text-base">About Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Slabs and Beams Realty is a trusted commercial real estate advisory firm specializing in office spaces, showrooms, and retail shops across Ahmedabad&apos;s prime corridors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#' },
                { label: 'All Properties', href: '#properties' },
                { label: 'Investment Guide', href: '#investment' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4 text-base">Property Types</h4>
            <ul className="space-y-2">
              {[
                'Office Spaces',
                'Showrooms',
                'Retail Shops',
                'Commercial Hubs',
              ].map((type) => (
                <li key={type}>
                  <a href="#properties" className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4 text-base">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-gold shrink-0" />
                <a href={`tel:+${phone}`} className="hover:text-gold transition-colors">
                  +{phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:info@slabsandbeams.com" className="hover:text-gold transition-colors break-all">
                  info@slabsandbeams.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
            <a
              href={getWhatsAppURL(waNumber, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors w-fit"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=61558677813758"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/slabsandbeams.realty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/slabs-and-beams-realty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Gold Separator */}
        <div className="h-px bg-gold/30 mb-6" />

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs leading-relaxed text-center mb-6 max-w-4xl mx-auto">
          <strong className="text-gray-400">Disclaimer:</strong> Slabs and Beams Realty is not marketing these real estate projects (&ldquo;Projects&rdquo;) and is not acting on behalf of the developer of these projects. The projects have been displayed for information purposes only. The information and data published herein with respect to the project are collected from publicly available sources.
        </p>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>&#169; 2026 Slabs and Beams Realty. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
