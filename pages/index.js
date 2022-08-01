import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Switcher from '../components/Switcher'

export default function Home() {
  return (
   <div className="antialiased bg-white">
   <Navbar title="blockpeek" />
   <Switcher />
   <Footer />
   </div>
  )
}
