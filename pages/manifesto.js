import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <>
     <Head>
        <title>manifesto</title>
        <meta name="description" content="manifesto" />
      </Head>
    <nav className="w-100 h-[40px] px-5 flex justify-between items-center font-DM text-[20px] z-2">
   <Link href="/">
    <div id="logo" className="h-[20px] flex items-center">
    <h1 className="text-black">Go Back</h1>
    </div>
    </Link>
    </nav>
    
   <div className="w-[22rem] min-h-[80vh] p-5 flex flex-col justify-center font-DM md:w-[70%]">
   <h1 className="text-[3rem] font-bold">Welcome</h1>
   <p className="font-normal text-[1rem]">BLOCKPEEK is a tiny personal project that provides real-time data, charts and information related to cryptocurrencies including price, supply, market cap, etc.<br/>
     Powered By CoinGecko API</p>
     <p className="font-bold">Hit a follow, would be nice :)</p>
     <div className="w-[22rem] h-[15rem] mt-5 rounded-md flex flex-col items-start">
     
     
     <a href="https://instagram.com/ryhan.web?igshid=YmMyMTA2M2Y=">
     <div className="flex justify-between items-center">
     <i className="text-[2rem] bi bi-instagram"></i>
     <p className="text-[1.3rem] mx-3 transition-all duration-500 underline-offset-auto hover:underline">ryhan.web</p>
     </div>
     </a>
     
     
     <a href="https://twitter.com/strnumtrue?t=UuiX-zMH1GPR5c6EHalPcA&s=09">
     <div className="flex justify-between items-center">
     <i className="text-[2rem] bi bi-twitter"></i>
     <p className="text-[1.3rem] mx-3 transition-all duration-500 underline-offset-auto hover:underline">@strnumtrue</p>
     </div>
     </a>
     
     </div>
     
   </div>
   </>
  )
}
