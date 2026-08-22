import type { Metadata } from 'next'
import DivyamNav from '@/components/DivyamNav'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import ScrollTriggerCTA from '@/components/ScrollTriggerCTA'
import DivyamHero from '@/sections/divyam/DivyamHero'
import DivyamHighlights from '@/sections/divyam/DivyamHighlights'
import DivyamAbout from '@/sections/divyam/DivyamAbout'
import DivyamAmenities from '@/sections/divyam/DivyamAmenities'
import DivyamLocationSection from '@/sections/divyam/DivyamLocationSection'
import DivyamFAQ from '@/sections/divyam/DivyamFAQ'
import { divyamFaqs } from '@/data/divyamFaqs'
import InlineLeadForm from '@/sections/InlineLeadForm'
import CallbackForm from '@/sections/CallbackForm'
import WhatsAppCTABanner from '@/sections/WhatsAppCTABanner'
import WhyChooseSection from '@/sections/WhyChooseSection'
import SocialProof from '@/sections/SocialProof'

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

export const metadata: Metadata = {
  title: 'Upcoming New Launch by Divyam Procon | Vaishnodevi, Ahmedabad',
  description:
    'Upcoming New Launch by Divyam Procon at Vaishnodevi Circle, Ahmedabad. Iconic G+32 commercial tower with premium offices & showrooms. Expert advisory by Slabs and Beams Realty.',
  alternates: {
    canonical: 'https://commercialpropertiesahmedabad.in/divyamnewlaunch/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://commercialpropertiesahmedabad.in/divyamnewlaunch',
    siteName: 'Commercial Properties Ahmedabad',
    title: 'Upcoming New Launch by Divyam Procon | Vaishnodevi, Ahmedabad',
    description:
      'Iconic G+32 commercial tower at Vaishnodevi Circle, Ahmedabad. Premium offices & showrooms. Expert advisory by Slabs and Beams Realty.',
    images: [
      {
        url: 'https://commercialpropertiesahmedabad.in/properties/Divyam.jpg',
        width: 1200,
        height: 630,
        alt: 'Upcoming New Launch by Divyam Procon - Vaishnodevi Circle, Ahmedabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming New Launch by Divyam Procon | Vaishnodevi, Ahmedabad',
    description:
      'Iconic G+32 commercial tower at Vaishnodevi Circle, Ahmedabad. Premium offices & showrooms.',
    images: ['https://commercialpropertiesahmedabad.in/properties/Divyam.jpg'],
  },
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: divyamFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function DivyamNewLaunchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <DivyamNav waNumber={waNumber} phone={phone} />
      <main className="pb-16 md:pb-0">
        <DivyamHero waNumber={waNumber} phone={phone} />
        <DivyamHighlights waNumber={waNumber} />
        <InlineLeadForm waNumber={waNumber} phone={phone} />
        <DivyamAbout waNumber={waNumber} />
        <DivyamAmenities waNumber={waNumber} />
        <WhatsAppCTABanner
          heading="Get Live Price & Availability"
          subtext="Talk to our advisors for the latest floor plans, pricing and payment plans."
          darkBg={true}
          waNumber={waNumber}
          phone={phone}
        />
        <DivyamLocationSection waNumber={waNumber} />
        <WhyChooseSection />
        <SocialProof />
        <DivyamFAQ waNumber={waNumber} />
        <CallbackForm waNumber={waNumber} phone={phone} />
      </main>
      <Footer waNumber={waNumber} phone={phone} />
      <FloatingWhatsApp waNumber={waNumber} />
      <MobileStickyBar waNumber={waNumber} phone={phone} />
      <ExitIntentPopup waNumber={waNumber} phone={phone} />
      <ScrollTriggerCTA waNumber={waNumber} phone={phone} />
    </>
  )
}
