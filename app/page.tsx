import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import ScrollTriggerCTA from '@/components/ScrollTriggerCTA'
import HeroSection from '@/sections/HeroSection'
import TrustStrip from '@/sections/TrustStrip'
import InlineLeadForm from '@/sections/InlineLeadForm'
import PropertiesSection from '@/sections/PropertiesSection'
import WhatsAppCTABanner from '@/sections/WhatsAppCTABanner'
import InvestmentHighlights from '@/sections/InvestmentHighlights'
import WhyChooseSection from '@/sections/WhyChooseSection'
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

        <InlineLeadForm waNumber={waNumber} phone={phone} />

        <PropertiesSection waNumber={waNumber} phone={phone} />
        <InvestmentHighlights />
        <WhyChooseSection />
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
