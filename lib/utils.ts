import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackWhatsApp(source: string) {
  if (typeof window === 'undefined') return
  if ((window as any).gtag) (window as any).gtag('event', 'whatsapp_click', { event_category: 'conversion', event_label: source })
  if ((window as any).fbq) (window as any).fbq('track', 'Contact', { content_name: source })
}

export function trackCall(source: string) {
  if (typeof window === 'undefined') return
  if ((window as any).gtag) (window as any).gtag('event', 'phone_call', { event_category: 'conversion', event_label: source })
}

export function trackFormSubmit() {
  if (typeof window === 'undefined') return
  if ((window as any).gtag) (window as any).gtag('event', 'form_submit', { event_category: 'lead', event_label: 'callback_form' })
  if ((window as any).fbq) (window as any).fbq('track', 'Lead')
}

export function getWhatsAppURL(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
