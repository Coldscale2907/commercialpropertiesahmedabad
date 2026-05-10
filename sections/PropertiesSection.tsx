'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { properties } from '@/data/properties'
import { Property } from '@/types'
import PropertyModal from '@/components/PropertyModal'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

const categories = ['All', 'Office Space', 'Retail Shop', 'Showroom', 'Commercial Hub'] as const

export default function PropertiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const filtered = activeCategory === 'All'
    ? properties
    : properties.filter(p => p.category === activeCategory)

  const statusStyle = {
    'Available': { bg: 'bg-green-500', text: 'AVAILABLE' },
    'Limited Units': { bg: 'bg-amber-500', text: 'LIMITED UNITS' },
    'Selling Fast': { bg: 'bg-red-500', text: 'SELLING FAST' },
  }

  return (
    <>
      <section id="properties" className="section-padding bg-soft-white">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Listings</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Featured Commercial Properties in Ahmedabad
            </h2>
            <div className="gold-line mx-auto mb-4" />
            <p className="text-dark-text/70 max-w-xl mx-auto">
              Carefully selected commercial projects with high investment potential.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-white border border-border-gray text-dark-text hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((property, i) => {
              const status = statusStyle[property.status]
              const waMsg = `Hi, I'm interested in ${property.title}. Please share details.`
              return (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border-gray"
                  onClick={() => setSelectedProperty(property)}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`${status.bg} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}>
                        {status.text}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-gold text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {property.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-playfair font-bold text-lg text-charcoal mb-1.5">{property.title}</h3>
                    <div className="flex items-center gap-1.5 text-dark-text/60 text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {property.location}
                    </div>
                    <p className="text-dark-text/60 text-xs mb-3">{property.sqftRange}</p>

                    <div className="text-2xl font-bold text-gold mb-3">{property.priceRange}</div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {property.investmentTags.map((tag) => (
                        <span key={tag} className="bg-gold/10 text-gold text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA row */}
                    <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedProperty(property)}
                        className="flex-1 text-xs font-semibold border border-gold text-gold py-2 rounded-lg hover:bg-gold hover:text-white transition-colors"
                      >
                        Get Price
                      </button>
                      <a
                        href={getWhatsAppURL(WA_NUMBER, waMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsApp('property_card')}
                        className="flex items-center justify-center w-10 h-8 bg-[#25D366] rounded-lg hover:bg-[#22c55e] transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-white fill-white" />
                      </a>
                      <a
                        href={`tel:+${PHONE_NUMBER}`}
                        onClick={() => trackCall('property_card')}
                        className="flex items-center justify-center w-10 h-8 bg-navy rounded-lg hover:bg-charcoal transition-colors"
                        aria-label="Call"
                      >
                        <Phone className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom link */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
            >
              Can&apos;t find what you&apos;re looking for? Talk to our advisors →
            </a>
          </div>
        </div>
      </section>

      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </>
  )
}
