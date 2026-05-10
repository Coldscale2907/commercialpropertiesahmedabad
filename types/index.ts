export interface Property {
  id: string
  title: string
  location: string
  area: string
  category: 'Office Space' | 'Retail Shop' | 'Showroom' | 'Commercial Hub'
  status: 'Available' | 'Limited Units' | 'Selling Fast'
  priceRange: string
  priceOnRequest: boolean
  images: string[]
  highlights: string[]
  amenities: string[]
  investmentTags: string[]
  brochureAvailable: boolean
  featured: boolean
  sqftRange: string
  possession: string
}
