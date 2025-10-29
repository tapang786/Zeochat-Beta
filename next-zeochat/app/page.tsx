'use client'

import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SearchNow from '@/components/SearchNow'
import UserTypeSelect from '@/components/UserTypeSelect'
import Services from '@/components/Services'
import ExploreWorld from '@/components/ExploreWorld'
import CounterSection from '@/components/CounterSection'
import Testimonials from '@/components/Testimonials'
import ExperienceGrid from '@/components/ExperienceGrid'
import Marketplace from '@/components/Marketplace'
import Guides from '@/components/Guides'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import ProfileSelectModal from '@/components/ProfileSelectModal'
import IntroProfileSelectModal from '@/components/IntroProfileSelectModal'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false)

  const handleProfileSelect = (profile: 'guide' | 'explorer') => {
    console.log('Selected profile:', profile)
    // Handle profile selection logic here
  }

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/index-content.html')
        let html = await response.text()

        // Strip hero, search, and user type select sections to avoid duplication
        html = html
          .replace(/<aside id="zeochat-hero">[\s\S]*?<\/aside>/i, '')
          .replace(/<div id="search-now"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i, '')
          .replace(/<div id="user-type-select">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="services">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="explore-world">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-counter">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-testimony">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-campuses">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-event">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-trainers">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-guides">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-subscribe">[\s\S]*?<\/div>\s*<\/div>/i, '')
          .replace(/<div id="zeochat-footer">[\s\S]*?<\/div>\s*<\/div>/i, '')
        if (containerRef.current) {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
          const bodyContent = bodyMatch ? bodyMatch[1] : html
          containerRef.current.innerHTML = bodyContent
        }
        
        // Show modal after content is loaded
        setTimeout(() => {
          console.log('Content loaded, opening intro modal...')
          setIsIntroModalOpen(true)
        }, 3000) // 2 second delay after content loads
      } catch (error) {
        console.error('Error loading content:', error)
      }
    }

    loadContent()
  }, [])

  return (
    <div id="page" style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <SearchNow />
      <UserTypeSelect />
      <Services />
      <ExploreWorld />
      <CounterSection />
      <Testimonials />
      <ExperienceGrid />
      <Marketplace />
      <Guides />
      <Subscribe />
      <Footer />
      <ProfileSelectModal />
      <IntroProfileSelectModal 
        isOpen={isIntroModalOpen}
        onClose={() => setIsIntroModalOpen(false)}
        onProfileSelect={handleProfileSelect}
      />
      <div ref={containerRef} style={{ display: 'none' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Loading Zeochat...</h2>
          <button 
            onClick={() => setIsIntroModalOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Test Modal (Click to Open)
          </button>
          <p>Modal Status: {isIntroModalOpen ? 'OPEN' : 'CLOSED'}</p>
        </div>
      </div>
    </div>
  )
}
