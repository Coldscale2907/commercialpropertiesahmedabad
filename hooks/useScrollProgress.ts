'use client'
import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement
      const pct = el.scrollHeight - el.clientHeight
      setProgress(pct > 0 ? (el.scrollTop / pct) * 100 : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return progress
}
