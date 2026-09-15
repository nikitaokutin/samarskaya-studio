import { Header } from '@/components/site/Header'
import { Hero } from '@/components/site/Hero'
import { ServiceTabs } from '@/components/site/ServiceTabs'
import { Masters } from '@/components/site/Masters'
import { Gallery } from '@/components/site/Gallery'
import { Process } from '@/components/site/Process'
import { Reviews } from '@/components/site/Reviews'
import { Training } from '@/components/site/Training'
import { FAQSection } from '@/components/site/FAQSection'
import { Contacts } from '@/components/site/Contacts'
import { Footer } from '@/components/site/Footer'
import { StickyCTA } from '@/components/site/StickyCTA'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceTabs />
        <Masters />
        <Gallery />
        <Process />
        <Reviews />
        <Training />
        <FAQSection />
        <Contacts />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
