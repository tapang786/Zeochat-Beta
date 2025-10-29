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
  const modalsRef = useRef<HTMLDivElement>(null)
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

        // Keep full HTML content without stripping sections
        html = html

        if (modalsRef.current) {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
          const bodyContent = bodyMatch ? bodyMatch[1] : html

          // Extract only modal elements and inject into visible container
          const temp = document.createElement('div')
          temp.innerHTML = bodyContent
          const wantedIds = ['campus-select', 'profile-select', 'live-chat-learn']
          const fragments: string[] = []
          wantedIds.forEach((id) => {
            const el = temp.querySelector('#' + id)
            if (el) {
              fragments.push(el.outerHTML)
            }
          })
          modalsRef.current.innerHTML = fragments.join('\n')
        }

        // Show modal after content is loaded
        setTimeout(() => {
          console.log('Content loaded, opening intro modal...')
          setIsIntroModalOpen(true)
        }, 3000) // delay after content loads
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

      {/* Legacy modals injected here so data-target="#campus-select" works */}
      <div ref={modalsRef} />

      {/* Hidden legacy content container */}
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
