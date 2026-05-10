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

export const metadata: Metadata = {
  title: 'Commercial Properties Ahmedabad | Office Spaces, Retail Shops & Showrooms | Slabs and Beams Realty',
  description:
    'Discover premium commercial properties in Ahmedabad — office spaces, retail shops, and showrooms across Vaishnodevi, Iskon-Ambli, Hebatpur & more. Expert advisory by Slabs and Beams Realty. High ROI, verified listings, 10+ prime locations.',
  keywords:
    'commercial properties Ahmedabad, office space Ahmedabad, retail shop Ahmedabad, showroom Ahmedabad, commercial real estate Ahmedabad, SG Highway office, Vaishnodevi commercial, Iskon-Ambli showroom, Hebatpur office, Slabs and Beams Realty',
  authors: [{ name: 'Slabs and Beams Realty' }],
  creator: 'Slabs and Beams Realty',
  publisher: 'Slabs and Beams Realty',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://commercialpropertiesahmedabad.in',
    siteName: 'Commercial Properties Ahmedabad',
    title: 'Commercial Properties Ahmedabad | Premium Office & Showroom Spaces',
    description:
      'Discover premium commercial properties in Ahmedabad. Office spaces, showrooms & retail shops with high ROI potential. Expert advisory by Slabs and Beams Realty.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Commercial Properties Ahmedabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Properties Ahmedabad | Slabs and Beams Realty',
    description:
      'Premium commercial properties in Ahmedabad — offices, showrooms, retail. High ROI, verified listings.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'],
  },
}

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Slabs and Beams Realty — Commercial Properties Ahmedabad',
  description:
    'Expert commercial real estate advisory for office spaces, showrooms, and retail shops in Ahmedabad.',
  url: 'https://commercialpropertiesahmedabad.in',
  telephone: '+919898989898',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  areaServed: 'Ahmedabad, Gujarat, India',
  priceRange: '₹₹₹',
  openingHours: 'Mo-Sa 09:00-19:00',
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best locations for commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prime locations include Vaishnodevi, Iskon-Ambli, SG Highway, Hebatpur, Gota, and Umiya Dham Road. These corridors offer strong rental yields and capital appreciation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price range for commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commercial properties in Ahmedabad range from ₹40 Lac for compact office units to ₹3 Cr+ for premium showrooms. BSP ranges from ₹4,750 to ₹8,900 per sq.ft depending on location and floor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rental yield on commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commercial properties in Ahmedabad typically offer 6–9% annual rental yields, significantly higher than residential properties. Prime corridors like Vaishnodevi and SG Highway see the strongest yields.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment plans are available for commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most projects offer 60-40 or 70-30 payment plans. Some projects like Keshar offer 50-50 plans. Down-payment options are available with discounted BSP at select projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I invest in commercial properties in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact Slabs and Beams Realty for expert advisory. We help investors identify high-ROI commercial opportunities, handle documentation, and ensure transparent transactions across all premium Ahmedabad locations.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
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
      <body className="font-inter text-dark-text bg-soft-white antialiased">
        {children}
      </body>
    </html>
  )
}
