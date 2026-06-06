'use client'

import { motion } from 'framer-motion'
import { Train, Building2, TrendingUp, Cpu, Car, MapPin } from 'lucide-react'

const locations = [
  {
    icon: Train,
    title: 'Metro Connectivity',
    description: 'Properties situated within walking distance of metro stations for maximum accessibility.',
    highlights: [
      'Direct metro access within 500m',
      'Multiple transit options nearby',
      'Reduced commute for employees & clients',
    ],
  },
  {
    icon: Building2,
    title: 'Prime Business Districts',
    description: 'Strategically located in established commercial hubs with high footfall and visibility.',
    highlights: [
      'Surrounded by Fortune 500 offices',
      'High brand visibility & walk-in traffic',
      'Premium address for your business',
    ],
  },
  {
    icon: TrendingUp,
    title: 'High-Growth Zones',
    description: 'Positioned in corridors with the highest projected appreciation over the next decade.',
    highlights: [
      'Government-identified growth zones',
      'Upcoming infrastructure investments',
      'Long-term value appreciation',
    ],
  },
  {
    icon: Cpu,
    title: 'Smart City Infrastructure',
    description: 'Located in smart city project areas with world-class digital and civic infrastructure.',
    highlights: [
      'High-speed fibre connectivity',
      'Smart parking & surveillance systems',
      'Uninterrupted power supply',
    ],
  },
  {
    icon: Car,
    title: 'Road & Highway Access',
    description: 'Direct access to national highways and expressways ensuring seamless logistics.',
    highlights: [
      'NH & expressway proximity',
      'Ample surface & basement parking',
      'Easy last-mile delivery access',
    ],
  },
  {
    icon: MapPin,
    title: 'Pan-India Coverage',
    description: 'Portfolio spanning key commercial micro-markets across major Indian cities.',
    highlights: [
      'Presence in Tier-1 & Tier-2 cities',
      'Diversified location risk',
      'Consistent rental yield across markets',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function LocationSection() {
  return (
    <section
      id="locations"
      className="relative bg-charcoal py-20 px-4 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-inter text-sm uppercase tracking-widest mb-3">
            Location Advantage
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Strategically Positioned Properties
          </h2>
          <p className="text-gray-400 font-inter text-base max-w-2xl mx-auto">
            Every property in our portfolio is chosen for its location superiority — connecting your
            business to the city&apos;s most dynamic commercial corridors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => {
            const Icon = loc.icon
            return (
              <motion.div
                key={loc.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group relative rounded-md border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-gold/50 hover:bg-white/8 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-inter font-semibold text-white text-base">{loc.title}</h3>
                </div>
                <p className="text-gray-400 font-inter text-sm mb-4 leading-relaxed">
                  {loc.description}
                </p>
                <ul className="space-y-1.5">
                  {loc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-300 text-sm font-inter">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
