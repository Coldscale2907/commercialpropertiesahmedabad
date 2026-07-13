export interface Property {
  id: string
  title: string
  builder: string
  location: string
  area: string
  category: 'Office Space' | 'Retail Shop' | 'Showroom & Office' | 'Commercial Hub'
  status: 'Available' | 'Limited Units' | 'Selling Fast' | 'Pre-Launch' | 'Ready to Move'
  priceRange: string
  priceOnRequest: boolean
  bspPerSqft: string
  sqftRange: string
  totalFloors: number
  towers: number
  totalUnits: number | null
  possession: string
  paymentTerms: string
  bookingPercent: number
  images: string[]
  highlights: string[]
  amenities: string[]
  investmentTags: string[]
  remarks: string
  featured: boolean
  urgencyLabel?: string
  description?: string
  nearby?: { name: string; distance: string }[]
}

export interface TestimonialType {
  name: string
  city: string
  role: string
  stars: number
  text: string
}
