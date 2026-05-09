import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FeaturedProject from '@/components/FeaturedProject'
import WhyChooseUs from '@/components/WhyChooseUs'
import Credentials from '@/components/Credentials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-800 flex flex-col relative w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <FeaturedProject />
      <WhyChooseUs />
      <Credentials />
      <Contact />
    </main>
  )
}
