import { useEffect } from 'react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import EditorialAbout from '../components/EditorialAbout'
import ServiceGrid from '../components/ServiceGrid'
import WorkGallery from '../components/WorkGallery'
import BookingJourney from '../components/BookingJourney'
import ServiceArea from '../components/ServiceArea'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import ClosingCTA from '../components/ClosingCTA'

export default function Home() {
  useEffect(() => {
    document.title = 'EstatePros Carpet Cleaning Calgary | Beautiful Spaces, Brilliantly Cared For'
  }, [])

  return (
    <>
      <Hero />
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
