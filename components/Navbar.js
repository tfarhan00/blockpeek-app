import { useState, useEffect } from 'react';
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar({title}) {
  const [open, setOpen] = useState(false)
  const [slide, setSlide] = useState(false)
  
 const lightMode = 'w-[1.5rem] h-[1.5rem]  bg-[#1a1a1a] text-white shadow-md flex justify-center items-center rounded-full text-[8px] transition-all duration-500'
 const darkMode = 'w-[1.5rem] h-[1.5rem]  bg-white shadow-md text-black flex justify-center items-center rounded-full text-[8px] translate-x-[2rem] transition-all duration-500'
 
 
  let burgerOne, burgerTwo;
  let oneClicked, twoClicked;
  burgerOne = burgerTwo = 'bg-black block h-[4px] w-[35px] transition-all duration-500';
  oneClicked = 'bg-black block h-[4px] w-[35px] transition-all duration-500 -rotate-45 translate-y-[6px]';
  twoClicked = 'bg-black block h-[4px] w-[35px] transition-all duration-500 rotate-45 translate-y-[-6px]';
  
  let showMenu = 'fixed w-[100%] h-[100vh] bg-white transition-all duration-500 translate-x-0 z-20'
  let hideMenu = 'fixed w-[100%] h-[100vh] bg-white transition-all duration-500 -translate-x-full z-20'
  
  
  function openNav() {
    setOpen(!open)
  }
  
useEffect(() => {
  (open) ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
}, [open])

  return (
    <div>
    <div className={open ? showMenu : hideMenu}>
    <div className=" flex flex-col w-[100%] h-[100%] justify-center items-end text-[2rem] font-DM">
    <ul className="text-end w-[100%] px-10">
    <Link href="/manifesto">
    <li className="origin-right transition-all duration-500 hover:scale-[1.1]"><a>Manifesto</a></li>
    </Link>
    <a href="https://github.com/tengkufarhan00">
    <li className="origin-right transition-all duration-500 hover:scale-[1.1]"><i className="w-[2rem] h-[2rem] bi bi-github mx-2"></i>GitHub</li>
    </a>
    </ul>
    </div>
    </div>
    
   <nav className="w-100 h-[40px] px-5 flex justify-between items-center font-DM text-[20px] text-black z-20">
   <Link href="/">
    <div id="logo" className="h-[20px] flex items-center">
    <h1>{title}</h1>
    </div>
    </Link>
    
    <div id="dark-toggle" className="w-[110px] flex items-center justify-between h-[90%]">
    <div onClick={() => setSlide(!slide)} className="relative w-[3rem] h-[1.5rem] border-2 border-black flex items-center rounded-full">
    <div className={slide ? darkMode : lightMode}>
    {slide ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-brightness-high-fill"></i>}
    </div>
    </div>
    
    <div id="menu" onClick={openNav} className="h-[17px] flex flex-col justify-between items-center z-30">
      <span className={open ? oneClicked : burgerOne}></span>
      <span className={open ? twoClicked : burgerTwo}></span>
    </div>
    
    </div>
    
   </nav>
   </div>
  )
}
