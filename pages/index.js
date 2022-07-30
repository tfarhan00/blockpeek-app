import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Switcher from '../components/Switcher'

export default function Home() {
  return (
   <div className="bg-gradient-to-b from-slate-100 via-blue-100 to-gray-50">
   <Navbar title="blockpeek" />
   <Switcher />
   <Footer />
   </div>
  )
}
