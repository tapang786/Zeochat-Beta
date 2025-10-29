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
import CampusSelectModal from '@/components/CampusSelectModal'
import LiveChatLearnModal from '@/components/LiveChatLearnModal'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false)

  const handleProfileSelect = (profile: 'guide' | 'explorer') => {
    console.log('Selected profile:', profile)
    // Handle profile selection logic here
  }

  useEffect(() => {
    // Show intro modal after page loads
    setTimeout(() => {
      console.log('Content loaded, opening intro modal...')
      setIsIntroModalOpen(true)
    }, 3000)
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
      <ScrollToTop />
      <ProfileSelectModal />
      <CampusSelectModal />
      <LiveChatLearnModal />
      <IntroProfileSelectModal 
        isOpen={isIntroModalOpen}
        onClose={() => setIsIntroModalOpen(false)}
        onProfileSelect={handleProfileSelect}
      />
    </div>
  )
}
