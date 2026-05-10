'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about-company" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                alt="Slabs and Beams Realty"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-4 bg-gold text-white p-5 rounded-xl shadow-xl max-w-xs">
              <div className="text-2xl font-playfair font-bold mb-1">10+ Years</div>
              <div className="text-white/80 text-sm">Serving Ahmedabad&apos;s Commercial Property Market</div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="pt-6 lg:pt-0"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
              About Slabs and Beams Realty
            </h2>
            <div className="gold-line mb-6" />

            <div className="space-y-4 text-dark-text/80 leading-relaxed">
              <p>
                Slabs and Beams Realty is Ahmedabad&apos;s trusted commercial real estate advisory, specializing in helping investors, entrepreneurs, and businesses find the right commercial space across Gujarat&apos;s most dynamic city.
              </p>
              <p>
                With over a decade of deep market expertise, we have guided 500+ clients through successful commercial property transactions — from first-time retail investors to high-net-worth individuals building diversified commercial portfolios.
              </p>
              <p>
                Our focus spans prime commercial destinations including SG Highway, GIFT City, Prahlad Nagar, Satellite, Navrangpura, and emerging zones like Bopal — ensuring our clients access the best opportunities before they sell out.
              </p>
              <p>
                We believe in transparent advisory, verified listings, and long-term relationships. When you work with us, you get a dedicated advisor who understands your goals and helps you make informed decisions backed by real market data.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
