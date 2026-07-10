import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import ScrollTriggerCTA from '@/components/ScrollTriggerCTA'
import HeroSection from '@/sections/HeroSection'
import TrustStrip from '@/sections/TrustStrip'
import PropertiesSection from '@/sections/PropertiesSection'
import WhatsAppCTABanner from '@/sections/WhatsAppCTABanner'
import InvestmentHighlights from '@/sections/InvestmentHighlights'
import WhyChooseSection from '@/sections/WhyChooseSection'
import CallbackForm from '@/sections/CallbackForm'
import AboutSection from '@/sections/AboutSection'
import LeadForm from '@/components/LeadForm'

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

export default function Home() {
  return (
    <>
      <Navigation waNumber={waNumber} phone={phone} />
      <main className="pb-16 md:pb-0">
        <HeroSection waNumber={waNumber} phone={phone} />
        <TrustStrip />

        {/* Early callback form after proof points */}
        <div className="bg-soft-white py-12 px-4 border-b border-border-gray">
          <p className="text-gray-500 text-sm text-center mb-6">Looking for a commercial space in Ahmedabad?</p>
          <div className="max-w-md mx-auto">
            <LeadForm waNumber={waNumber} phone={phone} source="top_cta_form" />
          </div>
        </div>

        <PropertiesSection waNumber={waNumber} phone={phone} />
        <InvestmentHighlights />
        <WhyChooseSection />
        <CallbackForm waNumber={waNumber} phone={phone} />
        <WhatsAppCTABanner
          heading="Talk to Our Commercial Property Advisors"
          subtext="Get brochures &amp; site visit details instantly."
          darkBg={true}
          waNumber={waNumber}
          phone={phone}
        />
        <AboutSection waNumber={waNumber} />
      </main>
      <Footer waNumber={waNumber} phone={phone} />
      <FloatingWhatsApp waNumber={waNumber} />
      <MobileStickyBar waNumber={waNumber} phone={phone} />
      <ExitIntentPopup waNumber={waNumber} phone={phone} />
      <ScrollTriggerCTA waNumber={waNumber} phone={phone} />
    </>
  )
}
