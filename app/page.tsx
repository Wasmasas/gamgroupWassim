import { Hero } from '@/components/home/hero'
import { LogoMarquee } from '@/components/home/logo-marquee'
import { StatsSection } from '@/components/home/stats-section'
import { ServicesSection } from '@/components/home/services-section'
import { IndustriesSection } from '@/components/home/industries-section'
import { AboutPreview } from '@/components/home/about-preview'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesSection />
      <StatsSection />
      <IndustriesSection />
      <AboutPreview />
      <CtaBanner />
    </>
  )
}
