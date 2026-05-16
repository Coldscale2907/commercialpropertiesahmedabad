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

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898989898'
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

export default function Home() {
  return (
    <>
      <Navigation waNumber={waNumber} phone={phone} />
      <main className="pb-16 md:pb-0">
        <HeroSection waNumber={waNumber} phone={phone} />
        <TrustStrip />

        {/* Jump tag CTA after proof points */}
        <div className="bg-soft-white py-8 px-4 text-center border-b border-border-gray">
          <p className="text-gray-500 text-sm mb-3">Looking for a commercial space in Ahmedabad?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-8 py-3 rounded-full hover:bg-gold/90 transition-colors shadow-md"
          >
            Explore Properties &amp; Get a Callback →
          </a>
        </div>

        <PropertiesSection waNumber={waNumber} phone={phone} />
        <WhatsAppCTABanner
          heading="Need Instant Property Details?"
          subtext="Our advisors are available now."
          darkBg={false}
          waNumber={waNumber}
          phone={phone}
        />
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
