import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import open from '../assets/images/icon-menu.svg';
import close from '../assets/images/icon-menu-close.svg'

const Navbar = () => {
  const [active, setActive] = useState(false);

  function openBtn(){
    setActive(true)
  }

  function closeBtn(){
    setActive(false)
  }

  return (
    <>
        <nav className="w-full px-4 py-8 flex justify-between items-center sm:col-span-6">
        <img src={logo} alt="" />
        <ul className="hidden sm:flex *:ml-4 md:*:ml-6">
            <li className="hover:text-[#f15e50]"><a href="#">Home</a></li>
            <li className="hover:text-[#f15e50]"><a href="#">New</a></li>
            <li className="hover:text-[#f15e50]"><a href="#">Popular</a></li>
            <li className="hover:text-[#f15e50]"><a href="#">Trending</a></li>
            <li className="hover:text-[#f15e50]"><a href="#">Categories</a></li>
        </ul>
        <button id="slider" className="block sm:hidden" onClick={openBtn}>
            <img src={open} alt="" />
        </button>

        </nav>
        <div id="menu" className={`flex h-screen w-9/12 bg-white fixed ${active ? 'right-0' : '-right-full'} top-0 flex-col justify-center items-center *:my-4 hover:*:text-[#f15e50] transition-all duration-300`}>
            <a href="#" id="close" className="absolute top-12 right-8" onClick={closeBtn}><img src={close} alt="" /></a>
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </div>
    </>
  )
}

export default Navbar