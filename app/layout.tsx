import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://commercialpropertiesahmedabad.in'

export const metadata: Metadata = {
  title: 'Commercial Properties Ahmedabad | Premium Office & Retail Spaces | Slabs and Beams Realty',
  description: 'Discover premium commercial properties in Ahmedabad. Office spaces, retail shops, showrooms & investment opportunities across SG Highway, GIFT City, Prahlad Nagar & more. Call or WhatsApp for instant pricing.',
  keywords: 'commercial properties ahmedabad, office space ahmedabad, retail shop ahmedabad, showroom ahmedabad, GIFT city commercial, SG highway commercial, commercial investment ahmedabad, slabs and beams realty',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Commercial Properties Ahmedabad | Premium Office & Retail Spaces',
    description: 'Discover premium commercial properties in Ahmedabad. Office spaces, retail shops, showrooms & investment opportunities with high ROI.',
    url: siteUrl,
    siteName: 'Commercial Properties Ahmedabad',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Commercial Properties Ahmedabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Properties Ahmedabad | Premium Office & Retail Spaces',
    description: 'Premium commercial properties in Ahmedabad — office spaces, retail shops, showrooms. High ROI investment opportunities.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Slabs and Beams Realty — Commercial Properties Ahmedabad',
  url: siteUrl,
  telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  description: 'Premium commercial property advisory in Ahmedabad — office spaces, retail shops, showrooms and investment opportunities.',
  areaServed: 'Ahmedabad',
  serviceType: 'Commercial Real Estate Advisory',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of commercial properties are available in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer premium office spaces, retail shops, showrooms, and mixed-use commercial hubs across prime locations including SG Highway, GIFT City, Prahlad Nagar, Satellite, and Navrangpura.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price range for commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commercial property prices in Ahmedabad range from ₹35 Lakhs for smaller retail units to ₹8 Crores for premium office spaces in GIFT City. Pricing varies by location, size, and type.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rental yield on commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commercial properties in Ahmedabad typically yield 6–9% annual rental returns, significantly higher than residential properties. Locations like GIFT City and SG Highway offer the strongest rental demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GIFT City a good investment for commercial property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GIFT City is India\'s first operational smart city and IFSC hub, with 300+ global companies present. It offers SEZ tax benefits, world-class infrastructure, and strong rental demand, making it one of India\'s best commercial investment destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I schedule a site visit for commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can schedule a site visit by calling us, messaging on WhatsApp, or filling out our callback form. Our advisors will arrange a personalized tour within 24 hours.',
      },
    },
  ],
}

const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `}
            </Script>
          </>
        )}
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className="font-inter text-dark-text bg-soft-white">
        {children}
      </body>
    </html>
  )
}
