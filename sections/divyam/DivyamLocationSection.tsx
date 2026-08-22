'use client'
import { motion } from 'framer-motion'
import { MapPin, Navigation as NavigationIcon, ExternalLink, MessageCircle, Calendar } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'

const MAP_QUERY = 'Divyam Commercial Tower, Vaishnodevi Circle, SG Highway, Ahmedabad'
const WA_DIRECTIONS = "Hi, please share the exact location and directions for the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle."
const WA_VISIT = "Hi, I'd like to schedule a site visit for the Upcoming New Launch by Divyam Procon at Vaishnodevi Circle."

const nearby = [
  { name: 'Vaishnodevi Circle', distance: '0.2 km' },
  { name: 'KD Hospital', distance: '2 km' },
  { name: 'Adani Shantigram', distance: '3 km' },
  { name: 'GIFT City', distance: '18 km' },
  { name: 'Sabarmati Railway Station', distance: '10 km' },
  { name: 'Sardar Vallabhbhai Patel International Airport', distance: '13 km' },
]

interface DivyamLocationSectionProps {
  waNumber: string
}

export default function DivyamLocationSection({ waNumber }: DivyamLocationSectionProps) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">LOCATION</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-4">
            Prime Address at Vaishnodevi Circle
          </h2>
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
            <MapPin size={14} className="text-gold" />
            <span>Vaishnodevi Circle, SG Highway, Ahmedabad</span>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            Strategically located at the intersection of SG Highway and SP Ring Road, offering excellent connectivity to Ahmedabad, Gandhinagar and major commercial hubs.
          </p>
          <div className="w-full h-72 rounded-xl overflow-hidden mb-3 border border-border-gray">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Divyam Commercial Tower location map"
            />
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(MAP_QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gold font-medium hover:underline"
          >
            Open in Google Maps <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Right — Nearby + CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 lg:mt-0"
        >
          <div className="bg-soft-white border border-border-gray rounded-2xl p-6 md:p-8">
            <h3 className="font-playfair font-semibold text-dark-text text-lg mb-4">Key Landmarks</h3>
            <div className="space-y-2 mb-8">
              {nearby.map((n) => (
                <div key={n.name} className="flex items-center justify-between gap-3 text-sm text-gray-600 border-b border-border-gray/60 pb-2 last:border-0">
                  <span className="flex items-center gap-2">
                    <NavigationIcon size={13} className="text-gold shrink-0" />
                    {n.name}
                  </span>
                  <span className="text-dark-text font-medium whitespace-nowrap">{n.distance}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppURL(waNumber, WA_DIRECTIONS)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('divyam_directions')}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={16} /> Get Directions
              </a>
              <a
                href={getWhatsAppURL(waNumber, WA_VISIT)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('divyam_schedule_visit')}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-gold text-gold py-3 rounded-lg text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
              >
                <Calendar size={16} /> Schedule Site Visit
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
