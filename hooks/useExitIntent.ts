'use client'
import { useState, useEffect } from 'react'

export function useExitIntent() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 10 && !dismissed) setShow(true)
    }
    document.addEventListener('mouseleave', handler)
    return () => document.removeEventListener('mouseleave', handler)
  }, [dismissed])

  const dismiss = () => { setShow(false); setDismissed(true) }
  return { show, dismiss }
}
