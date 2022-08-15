import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Switcher from '../components/Switcher'

export default function Home() {
  return (
   <>
   <div>
   <Navbar title="blockpeek" />
   <Hero />
   <Switcher />
   <Footer />
   </div>
   </>
  )
}
