import React from 'react'
import {Link} from "react-scroll";
export default function Navbar() {
  return (
    <div className="pt-8 mx-auto text-lg font-bold text-[#dde3fe] flex gap-20 ">
          <Link to="about" className='cursor-pointer hover:text-white'>Home</Link>
          <Link to="about" className='cursor-pointer hover:text-white'>About</Link>
          <Link to="about" className='cursor-pointer hover:text-white'>Projects</Link>
          <Link to="about" className='cursor-pointer hover:text-white'>Contact</Link>
          <Link to="about" className='cursor-pointer hover:text-white'>Sign In</Link>
        </div>
  )
}
