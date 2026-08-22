'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL, trackFormSubmit, trackWhatsApp, trackCall } from '@/lib/utils'

const projectOptions = [
  'Twin Towers by Trogon',
  'Wave by Shivalik',
  'Brillia by Pravish',
  'Upcoming New Launch by Divyam Procon',
  'The Prospera by Keshar',
  'Tremont Tower by Tremont',
  'Marvel by Times',
  'Centroid by Sanghvi',
  'Brillia NXT by Pravish',
  'Centrica by Shilp',
  'Regalia 2 by Nakshatra',
  'The Identity by Dobaria-Rashmi',
  'Curv by Shivalik',
  'The Citadel',
  'Upcoming Launch at SBR',
]

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  interest: z.array(z.string()).optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const WA_MESSAGE = "Hi, I'm interested in commercial properties in Ahmedabad. Please share pricing and details."

const DEFAULT_ACCESS_KEY = '032af630-8802-48d4-9ee6-476a774f5304'

interface LeadFormProps {
  waNumber: string
  phone: string
  source?: string
  showConnectFooter?: boolean
  accessKey?: string
  fixedProject?: string
}

export default function LeadForm({ waNumber, phone, source = 'callback_form', showConnectFooter = false, accessKey = DEFAULT_ACCESS_KEY, fixedProject }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    const interest = fixedProject ? [fixedProject] : (data.interest ?? [])
    if (!fixedProject && interest.length === 0) {
      setError('interest', { type: 'manual', message: 'Please select at least one project' })
      return
    }
    try {
      const payload = {
        access_key: accessKey,
        subject: `New Lead: ${data.name} — Commercial Property Ahmedabad`,
        from_name: 'Commercial Properties Ahmedabad',
        to: 'info@slabsandbeams.com,contact@coldscale.in',
        name: data.name,
        phone: data.phone,
        interest: interest.join(', '),
        message: data.message || '',
        botcheck: '',
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()
      if (result.success) {
        trackFormSubmit(source)
        setSubmitted(true)
      } else {
        throw new Error(result.message)
      }
    } catch {
      trackFormSubmit(source)
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-green-600" />
          </div>
          <h3 className="font-playfair text-dark-text text-xl font-bold mb-2">Request Received!</h3>
          <p className="text-gray-500 text-sm mt-2">Our advisor will be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input type="hidden" name="botcheck" />

          <div>
            <label className="block text-sm font-semibold text-dark-text mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('name')}
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-dark-text mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              required
              placeholder="10-digit mobile number"
              className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {fixedProject ? (
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-1">
                Message <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea
                {...register('message')}
                rows={3}
                placeholder="Any specific requirements or questions?"
                className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                Project Interest <span className="text-red-500">*</span>
              </label>
              <div className="border border-border-gray rounded-lg px-4 py-3 grid grid-cols-1 gap-2 max-h-52 overflow-y-auto">
                {projectOptions.map((project) => (
                  <label key={project} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-gold transition-colors">
                    <input
                      type="checkbox"
                      value={project}
                      {...register('interest')}
                      className="accent-gold w-4 h-4 rounded"
                    />
                    {project}
                  </label>
                ))}
              </div>
              {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
            </div>
          )}

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

      {showConnectFooter && (
        <div className="mt-5 pt-5 border-t border-border-gray">
          <p className="text-gray-500 text-xs text-center mb-3">Or connect instantly:</p>
          <div className="flex gap-3">
            <a
              href={getWhatsAppURL(waNumber, WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(`${source}_bottom`)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`tel:+${phone}`}
              onClick={() => trackCall(`${source}_bottom`)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-navy/80 transition-colors"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
