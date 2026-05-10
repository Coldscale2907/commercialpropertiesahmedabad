'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { X, MapPin, Building2, CheckCircle2, MessageCircle, Phone, FileText } from 'lucide-react'
import { Property } from '@/types'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

interface PropertyModalProps {
  property: Property | null
  onClose: () => void
  waNumber: string
  phone: string
}

const statusColors: Record<Property['status'], string> = {
  'Ready to Move': 'bg-red-500',
  'Selling Fast': 'bg-amber-500',
  'Limited Units': 'bg-orange-500',
  Available: 'bg-green-600',
  'Pre-Launch': 'bg-blue-600',
}

export default function PropertyModal({ property, onClose, waNumber, phone }: PropertyModalProps) {
  useEffect(() => {
    if (property) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [property])

  if (!property) return null

  const waMsg = `Hi, I'm interested in ${property.title} at ${property.location}. Please share pricing and details.`
  const brochureMsg = `Hi, please send me the brochure for ${property.title} at ${property.location}.`

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/80 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Hero Image */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-t-2xl">
          <Image
            src={property.images[0]}
            alt={property.title}
            width={800}
            height={280}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-3 mb-4">
            <div className="flex-1">
              <h2 className="font-playfair text-2xl font-bold text-dark-text">{property.title}</h2>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <MapPin size={14} className="text-gold" />
                <span>{property.area}</span>
              </div>
            </div>
            <span className="bg-charcoal text-white text-xs px-3 py-1 rounded-full">
              By {property.builder}
            </span>
          </div>

          {/* Status & Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`${statusColors[property.status]} text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide`}>
              {property.status}
            </span>
            {property.urgencyLabel && (
              <span className="bg-gold/20 text-gold text-xs px-3 py-1 rounded-full font-semibold">
                {property.urgencyLabel}
              </span>
            )}
            {property.investmentTags.map((tag) => (
              <span key={tag} className="border border-gold text-gold text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="bg-soft-white rounded-xl p-4 mb-4">
            <div className="text-3xl font-bold text-gold font-playfair mb-1">
              {property.priceRange}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>BSP: <strong className="text-dark-text">{property.bspPerSqft}</strong></span>
              <span>Size: <strong className="text-dark-text">{property.sqftRange}</strong></span>
              <span>Possession: <strong className="text-dark-text">{property.possession}</strong></span>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="flex gap-4 mb-5 text-sm">
            <div className="flex-1 bg-navy/10 rounded-lg p-3 text-center">
              <div className="font-bold text-navy text-lg">{property.paymentTerms}</div>
              <div className="text-gray-500 text-xs">Payment Plan</div>
            </div>
            <div className="flex-1 bg-navy/10 rounded-lg p-3 text-center">
              <div className="font-bold text-navy text-lg">{property.bookingPercent}%</div>
              <div className="text-gray-500 text-xs">Booking Amount</div>
            </div>
            <div className="flex-1 bg-navy/10 rounded-lg p-3 text-center">
              <div className="font-bold text-navy text-lg">{property.totalFloors}</div>
              <div className="text-gray-500 text-xs">Floors</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-5">
            <h3 className="font-playfair font-semibold text-dark-text mb-3">Highlights</h3>
            <ul className="space-y-2">
              {property.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="mb-5">
            <h3 className="font-playfair font-semibold text-dark-text mb-3">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {property.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 size={14} className="text-gold shrink-0" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Remarks */}
          <details className="mb-4">
            <summary className="cursor-pointer text-sm font-semibold text-gray-500 hover:text-dark-text transition-colors">
              Price Breakdown & Remarks
            </summary>
            <p className="mt-2 text-xs text-gray-500 leading-relaxed bg-gray-50 rounded-lg p-3">
              {property.remarks}
            </p>
          </details>
        </div>

        {/* Sticky Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3 flex gap-2 rounded-b-2xl">
          <a
            href={getWhatsAppURL(waNumber, waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp(`modal_${property.id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={16} /> 💬 WhatsApp
          </a>
          <a
            href={`tel:+${phone}`}
            onClick={() => trackCall(`modal_${property.id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-navy text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-navy/80 transition-colors"
          >
            <Phone size={16} /> 📞 Call Now
          </a>
          <a
            href={getWhatsAppURL(waNumber, brochureMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp(`brochure_${property.id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 border border-gold text-gold py-2.5 rounded-xl text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
          >
            <FileText size={16} /> 📄 Brochure
          </a>
        </div>
      </div>
    </div>
  )
}
