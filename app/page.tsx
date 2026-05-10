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
import UrgencySection from '@/sections/UrgencySection'
import SocialProof from '@/sections/SocialProof'
import WhyChooseSection from '@/sections/WhyChooseSection'
import CallbackForm from '@/sections/CallbackForm'
import AboutSection from '@/sections/AboutSection'

export default function Home() {
  return (
    <main className="pb-14 md:pb-0">
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <PropertiesSection />
      <WhatsAppCTABanner
        heading="Need Instant Property Details?"
        subtext="Our advisors are available to help you find the right commercial space."
      />
      <InvestmentHighlights />
      <UrgencySection />
      <SocialProof />
      <WhyChooseSection />
      <CallbackForm />
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
      <ExitIntentPopup />
      <ScrollTriggerCTA />
    </main>
  )
}
