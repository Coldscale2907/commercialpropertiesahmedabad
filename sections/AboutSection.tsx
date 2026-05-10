'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getWhatsAppURL } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface AboutSectionProps {
  waNumber: string
}

export default function AboutSection({ waNumber }: AboutSectionProps) {
  return (
    <section id="about-us" className="py-20 px-4 md:px-8 lg:px-16 bg-soft-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
            alt="Slabs and Beams Realty"
            width={800}
            height={400}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 lg:mt-0"
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">ABOUT US</span>
          <h2 className="font-playfair font-bold text-dark-text text-3xl md:text-4xl mt-2 mb-6">
            About Slabs and Beams Realty
          </h2>

          {/* Gold Accent Box */}
          <div className="border-l-4 border-gold bg-beige pl-5 py-3 rounded-r-lg mb-6">
            <p className="text-dark-text text-base font-semibold italic">
              &ldquo;Ahmedabad&apos;s most trusted name in commercial real estate advisory — connecting investors and businesses with premium properties since 2014.&rdquo;
            </p>
          </div>

          <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
            <p>
              Slabs and Beams Realty is a specialized commercial real estate advisory firm based in Ahmedabad, Gujarat. We focus exclusively on commercial properties — office spaces, showrooms, and retail shops — across Ahmedabad&apos;s fastest-growing corridors.
            </p>
            <p>
              Our team of experienced advisors provides unbiased, data-driven investment guidance to HNI investors, business owners, and retail investors looking to capitalize on Ahmedabad&apos;s booming commercial real estate market.
            </p>
            <p>
              With over 500 successful investor connections and a portfolio of 10+ premium projects, we are committed to transparent, ethical, and result-oriented real estate advisory.
            </p>
          </div>

          <a
            href={getWhatsAppURL(waNumber, WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors shadow-md"
          >
            <MessageCircle size={18} /> Talk to an Advisor
          </a>
        </motion.div>
      </div>
    </section>
  )
}
