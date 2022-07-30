import { useState } from 'react';
import Coincard from '../components/Coincard'
import Exchange from '../components/Exchange'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Switcher() {
  const [slide, setSlide] = useState(false)
  
  const switchCoins = "w-[6rem] h-[2.5rem] m-1 bg-gray-800 text-white rounded-full transition-all duration-500 flex items-center justify-center z-0"
  const switchMarket = "w-[6rem] h-[2.5rem] m-1 bg-gray-800 text-white rounded-full transition-all duration-500 translate-x-[5.5rem] flex items-center justify-center z-0"
  
  return (
    <div>
    <div className="my-7 w-[100%] h-[3rem] flex justify-center items-center font-bold font-DM z-0">
   <div className="relative w-[12rem] h-[3rem]  bg-white shadow-md flex items-center rounded-full z-0" onClick={() => setSlide(!slide)}>
   <div className={slide ? switchMarket : switchCoins}>
   {slide ? <i className="bi bi-shop-window"></i> : <i className="bi bi-currency-bitcoin"></i>}
   </div>
   </div>
   </div>
   {slide ? <Exchange /> : <Coincard />}
   </div>
  )
}
