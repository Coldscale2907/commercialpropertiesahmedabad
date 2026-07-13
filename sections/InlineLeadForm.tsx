'use client'
import { motion } from 'framer-motion'
import LeadForm from '@/components/LeadForm'

interface InlineLeadFormProps {
  waNumber: string
  phone: string
}

export default function InlineLeadForm({ waNumber, phone }: InlineLeadFormProps) {
  return (
    <section className="bg-soft-white py-16 px-4 md:px-8 lg:px-16 border-b border-border-gray">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="font-playfair font-bold text-dark-text text-2xl md:text-3xl lg:text-4xl leading-snug">
            Looking for a commercial space in Ahmedabad? Talk to our experts now.
          </h2>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 lg:mt-0"
        >
          <LeadForm waNumber={waNumber} phone={phone} source="inline_lead_form" />
        </motion.div>
      </div>
    </section>
  )
}
