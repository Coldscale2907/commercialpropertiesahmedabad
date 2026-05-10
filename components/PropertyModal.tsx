'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Check, MessageCircle, Phone, FileText } from 'lucide-react'
import Image from 'next/image'
import { Property } from '@/types'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

interface PropertyModalProps {
  property: Property | null
  onClose: () => void
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  if (!property) return null

  const waMessage = `Hi, I'm interested in ${property.title} in ${property.location}. Please share details and pricing.`
  const waBrochure = `Hi, please share the brochure for ${property.title} in ${property.location}.`

  const statusColor = {
    'Available': 'bg-green-500',
    'Limited Units': 'bg-amber-500',
    'Selling Fast': 'bg-red-500',
  }[property.status]

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-[80] flex items-end md:items-center justify-center p-0 md:p-4"
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="relative bg-white rounded-t-2xl md:rounded-2xl w-full md:max-w-2xl max-h-[92vh] md:max-h-[85vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>

            {/* Image */}
            <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-t-2xl md:rounded-t-2xl">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`${statusColor} text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}>
                  {property.status}
                </span>
                <span className="bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {property.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Title & Location */}
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-2">{property.title}</h2>
              <div className="flex items-center gap-1.5 text-navy/70 mb-4">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{property.location}</span>
              </div>

              {/* Price */}
              <div className="bg-beige rounded-xl p-4 mb-5">
                <p className="text-xs text-navy/60 uppercase tracking-wider mb-1">Price Range</p>
                <p className="text-2xl font-bold text-gold">{property.priceRange}</p>
                <p className="text-sm text-navy/60 mt-1">{property.sqftRange} · {property.possession}</p>
              </div>

              {/* Investment Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {property.investmentTags.map((tag) => (
                  <span key={tag} className="bg-gold/10 border border-gold text-gold text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-5">
                <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {property.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-dark-text">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div className="mb-24">
                <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-dark-text bg-soft-white rounded-lg px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky bottom bar */}
            <div className="sticky bottom-0 bg-white border-t border-border-gray p-4 flex gap-2">
              <a
                href={getWhatsAppURL(WA_NUMBER, waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('property_modal')}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#22c55e] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp
              </a>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                onClick={() => trackCall('property_modal')}
                className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3 rounded-xl text-sm hover:bg-charcoal transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              {property.brochureAvailable && (
                <a
                  href={getWhatsAppURL(WA_NUMBER, waBrochure)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp('brochure_modal')}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-gold text-gold font-semibold py-3 rounded-xl text-sm hover:bg-gold hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Brochure
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
