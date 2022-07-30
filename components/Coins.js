// This component is built for layouting the API result, so it doesn't get bloated on the Coincard.js
// Execute any function in Coincard.js
// This component will loop according to API data length 
// Don't put anything here unless you want to include it as an item in coin card

import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Coins({id, name, price, image, rank, market, priceMove}) {
  
 let greenPrice = "text-[20px] font-bold text-green-500";
 let redPrice = "text-[20px] font-bold text-red-500";
  
  return (
    <>
  
    
    <div className="w-[22rem] h-[8rem] shadow-lg rounded-xl mt-5 flex-col bg-white flex justify-center items-end md:w-[70%] font-DM transition-all duration-500 hover:shadow-md">
    <div className="h-[4rem] flex items-center justify-between py-2 px-3 w-[100%]">
    <div className="w-[2rem]">
     #{rank}
    </div>
 
   <div className="w-[32px] h-[32px]">
    <Image
      src={image}
      alt={name}
      width='32px'
      height='32px'
      layout="fixed"
      objectFit="contain"
      />
    </div>
      
    <div className="flex justify-center items-center mx-1 text-center w-[90px]">
     {name}
    </div>
    
    <div className="text-center w-[130px]">

     <p className={priceMove < 0 ? redPrice : greenPrice}>${(price < 1) ? price.toFixed(5) : price.toLocaleString()}</p>
     
     <p className="text-[13px] whitespace-nowrap"><i className="bi bi-bank"></i>&nbsp;${market.toLocaleString()}</p>
    </div>
    </div>
    
     <div className="w-[100%] mt-2 h-[2rem] flex items-center justify-between">
     <div className="px-2 border-2 border-gray-700 rounded-full bg-gray-700 text-white mx-5">
   <i className="bi bi-currency-exchange"></i> Trade </div>
   
   <Link href={`/detail/${id}`}>
     <div className="px-2 border-2 border-black rounded-full text-black mx-5">
   <i className="bi bi-arrow-right"></i> Read More 
   </div>
   </Link>
   
   </div>
   
   
   </div>


   </>
  )
}
