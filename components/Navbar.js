import { useState, useEffect } from 'react';
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar({title}) {
  const [open, setOpen] = useState(false)
  
 
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
    <>
    <div className={open ? showMenu : hideMenu}>
    <div className=" flex flex-col w-[100%] h-[100%] justify-center items-end text-[2rem] font-DM">
    <ul className="text-end w-[100%] px-10">
    <Link href="/manifesto">
    <li className="origin-right transition-all duration-500 hover:scale-[1.1]"><a>Manifesto</a></li>
    </Link>
    <a href="https://github.com/tengkufarhan00/blockpeek-app">
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
    
    <div id="menu" onClick={openNav} className="h-[17px] flex flex-col justify-between items-center z-30">
      <span className={open ? oneClicked : burgerOne}></span>
      <span className={open ? twoClicked : burgerTwo}></span>
    </div>
  
   </nav>
   </>
  )
}
