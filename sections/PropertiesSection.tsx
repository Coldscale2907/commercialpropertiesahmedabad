'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Phone, Download } from 'lucide-react'
import { properties } from '@/data/properties'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface PropertiesSectionProps {
  waNumber: string
  phone: string
}

export default function PropertiesSection({ waNumber, phone }: PropertiesSectionProps) {
  return (
    <section id="properties" className="py-20 px-4 md:px-8 lg:px-16 bg-soft-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">OUR PORTFOLIO</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-4">
            Premium Commercial Properties in Ahmedabad
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Carefully selected commercial projects with high investment potential across prime Ahmedabad locations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  width={600}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                {/* Builder Badge */}
                <span className="absolute top-3 right-3 bg-charcoal/80 text-white text-xs px-2 py-1 rounded-full">
                  {property.builder}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="font-playfair font-semibold text-dark-text text-lg mb-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin size={13} className="text-gold" />
                  <span>{property.location}</span>
                </div>
                <div className="text-xl font-bold text-gold font-playfair mb-1">Price on Request</div>
                <div className="text-sm text-gray-500 mb-1">{property.sqftRange}</div>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-dark-text">Possession:</span> {property.possession}
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsAppURL(waNumber, `Hi, I'm interested in ${property.title} at ${property.location}. Please share pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`card_${property.id}`)}
                    className="flex items-center justify-center gap-1 bg-[#25D366] text-white text-sm py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={14} /> Get Price
                  </a>
                  <a
                    href={`tel:+${phone}`}
                    onClick={() => trackCall(`card_${property.id}`)}
                    className="flex items-center justify-center gap-1 bg-navy text-white text-sm py-2 rounded-lg hover:bg-navy/80 transition-colors"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                  <a
                    href={getWhatsAppURL(waNumber, `Hi, I'd like to download the brochure for ${property.title} at ${property.location}. Please share it.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`brochure_${property.id}`)}
                    className="col-span-2 flex items-center justify-center gap-1 border border-gold text-gold text-sm py-2 rounded-lg hover:bg-gold hover:text-white transition-colors"
                  >
                    <Download size={14} /> Download Brochure
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('properties_bottom')}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            <MessageCircle size={20} /> Get All Property Details on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
