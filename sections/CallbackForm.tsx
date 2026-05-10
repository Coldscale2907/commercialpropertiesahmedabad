'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2, MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall, trackFormSubmit } from '@/lib/utils'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'
const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share details and pricing."

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  interest: z.string().min(1, 'Please select a property type'),
})

type FormData = z.infer<typeof schema>

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    trackFormSubmit()
    // Netlify form submission
    try {
      const formData = new FormData()
      formData.append('form-name', 'callback-lead')
      formData.append('name', data.name)
      formData.append('phone', data.phone)
      formData.append('interest', data.interest)
      await fetch('/', { method: 'POST', body: formData })
    } catch {
      // fallthrough — still show success
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-beige/40">
      <div className="container-max">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Quick Callback</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Get Instant Property Details
            </h2>
            <div className="gold-line mx-auto mb-4" />
            <p className="text-dark-text/70">
              Leave your number — our advisor will call you within 10 minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-border-gray"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="font-playfair font-bold text-xl text-charcoal mb-2">Request Received!</h3>
                  <p className="text-dark-text/70 text-center">Our advisor will call you shortly!</p>
                </motion.div>
              ) : (
                <motion.div key="form">
                  {/* Netlify hidden form */}
                  <form name="callback-lead" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="text" name="phone" />
                    <select name="interest" />
                  </form>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="hidden" name="bot-field" />

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-1.5">Your Name</label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full border border-border-gray rounded-xl px-4 py-3 text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-1.5">Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="e.g. 9898989898"
                        className="w-full border border-border-gray rounded-xl px-4 py-3 text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-1.5">Property Interest</label>
                      <select
                        {...register('interest')}
                        className="w-full border border-border-gray rounded-xl px-4 py-3 text-dark-text focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white"
                      >
                        <option value="">Select property type...</option>
                        <option value="Office Space">Office Space</option>
                        <option value="Retail Shop">Retail Shop</option>
                        <option value="Showroom">Showroom</option>
                        <option value="Commercial Investment">Commercial Investment</option>
                      </select>
                      {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-gold text-white font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors disabled:opacity-70"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                      Request Callback →
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Alternative CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-center mt-8"
          >
            <p className="text-dark-text/60 text-sm mb-4">Or connect instantly:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppURL(WA_NUMBER, WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('callback_form_alt')}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#22c55e] transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                WhatsApp Us
              </a>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                onClick={() => trackCall('callback_form_alt')}
                className="flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
