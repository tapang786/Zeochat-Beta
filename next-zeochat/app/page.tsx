'use client'

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

export default function Home() {
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
    </div>
  )
}
