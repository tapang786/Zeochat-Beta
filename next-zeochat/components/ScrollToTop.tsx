'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="js-gotop js-top"
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        backgroundColor: '#000',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.8'
        e.currentTarget.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      <i className="icon-arrow-up2" style={{ color: '#fff', fontSize: '20px' }}></i>
    </button>
  )
}

