'use client'

import mediumZoom from 'medium-zoom'
import { useEffect } from 'react'

export const useMediumZoom = () => {
  useEffect(() => {
    const zoom = mediumZoom('.tiptap img', {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.8)',
    })

    return () => {
      zoom.detach()
    }
  }, [])
}
