'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: string[]
  alt: string
  heightClass?: string
}

export default function ImageSlider({ images, alt, heightClass = 'h-[280px]' }: ImageSliderProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const goTo = (i: number) => setIndex((i + images.length) % images.length)

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden`}>
      {images.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt={`${alt} — photo ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          unoptimized
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gold' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
