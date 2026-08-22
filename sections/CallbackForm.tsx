'use client'
import { motion } from 'framer-motion'
import LeadForm from '@/components/LeadForm'

interface CallbackFormProps {
  waNumber: string
  phone: string
  accessKey?: string
}

export default function CallbackForm({ waNumber, phone, accessKey }: CallbackFormProps) {
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
            Our advisor calls you back shortly.
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
          className="mt-8 lg:mt-0"
        >
          <LeadForm waNumber={waNumber} phone={phone} source="callback_form" showConnectFooter accessKey={accessKey} />
        </motion.div>
      </div>
    </section>
  )
}
