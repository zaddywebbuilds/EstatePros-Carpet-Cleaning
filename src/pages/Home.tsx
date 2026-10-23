import { useEffect } from 'react'
import Hero from '../components/Hero'
import ServiceMarquee from '../components/ServiceMarquee'
import TrustBar from '../components/TrustBar'
import EditorialAbout from '../components/EditorialAbout'
import ServiceGrid from '../components/ServiceGrid'
import WorkGallery from '../components/WorkGallery'
import BookingJourney from '../components/BookingJourney'
import ServiceArea from '../components/ServiceArea'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import ClosingCTA from '../components/ClosingCTA'
import { business } from '../config/business'

export default function Home() {
  useEffect(() => {
    document.title = `${business.name} | Carpet & Deep Cleaning in North York, Toronto`
  }, [])

  return (
    <>
      <Hero />
      <ServiceMarquee />
      <TrustBar />
      <EditorialAbout />
      <ServiceGrid />
      <WorkGallery />
      <BookingJourney />
      <ServiceArea />
      <TestimonialsSection />
      <FAQSection />
      <ClosingCTA />
    </>
  )
}
