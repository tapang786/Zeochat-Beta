'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/index-content.html')
        const html = await response.text()
        
        if (containerRef.current) {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
          const bodyContent = bodyMatch ? bodyMatch[1] : html
          containerRef.current.innerHTML = bodyContent
        }
      } catch (error) {
        console.error('Error loading content:', error)
      }
    }
    
    loadContent()
  }, [])

  return (
    <div id="page" style={{ minHeight: '100vh' }}>
      <div ref={containerRef}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Loading Zeochat...</h2>
        </div>
      </div>
    </div>
  )
}
