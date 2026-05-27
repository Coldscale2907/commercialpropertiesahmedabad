'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL, trackFormSubmit, trackWhatsApp, trackCall } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  interest: z.string().min(1, 'Please select a property type'),
})

type FormData = z.infer<typeof schema>

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

interface CallbackFormProps {
  waNumber: string
  phone: string
}

export default function CallbackForm({ waNumber, phone }: CallbackFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData()
      formData.append('form-name', 'callback-lead')
      formData.append('name', data.name)
      formData.append('phone', data.phone)
      formData.append('interest', data.interest)

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      trackFormSubmit()
      setSubmitted(true)
    } catch {
      trackFormSubmit()
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="bg-charcoal py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">GET IN TOUCH</span>
          <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl mt-2 mb-3">
            Get Instant Property Details
          </h2>
          <p className="text-gold text-base mb-6 font-semibold">
            Our advisor calls you within 10 minutes.
          </p>
          <div className="space-y-3 mb-8">
            {[
              '✓ Free consultation with our expert advisors',
              '✓ Latest pricing & floor plans shared instantly',
              '✓ Site visit arranged within 24 hours',
              '✓ Zero brokerage, direct builder pricing',
            ].map((point) => (
              <div key={point} className="text-gray-300 text-sm">{point}</div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-2xl mt-8 lg:mt-0"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="font-playfair text-dark-text text-xl font-bold mb-2">Request Received!</h3>
              <p className="text-green-600 font-semibold text-base">Our advisor will call you shortly!</p>
              <p className="text-gray-500 text-sm mt-2">Usually within 10 minutes during business hours.</p>
            </div>
          ) : (
            <form
              name="callback-lead"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="callback-lead" />

              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1">Your Name</label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1">Mobile Number</label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="10-digit mobile number"
                  className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1">Property Interest</label>
                <select
                  {...register('interest')}
                  className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white"
                >
                  <option value="">Select property type</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Showroom & Office">Showroom &amp; Office</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="Commercial Investment">Commercial Investment</option>
                  <option value="All Properties">All Properties</option>
                </select>
                {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-charcoal font-bold py-3 rounded-lg hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 text-base"
              >
                {isSubmitting ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  'Request Callback →'
                )}
              </button>
            </form>
          )}

          {/* Or connect instantly */}
          <div className="mt-5 pt-5 border-t border-border-gray">
            <p className="text-gray-500 text-xs text-center mb-3">Or connect instantly:</p>
            <div className="flex gap-3">
              <a
                href={getWhatsAppURL(waNumber, WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('form_bottom')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={`tel:+${phone}`}
                onClick={() => trackCall('form_bottom')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-navy/80 transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
