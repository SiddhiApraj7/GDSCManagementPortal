import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import { useTypewriter } from 'react-simple-typewriter';
export default function LandingPage() {
    const [text] = useTypewriter({
        words: ['< GDSC Management Portal />'],
        loop: 0
      })
  return (
    <div className="bg-[#7a8aff] h-full flex flex-col justify-center items-center" >
     <Navbar />
        
      
      <div className="mt-2 flex justify-between">
        <div className="my-auto p-6">
            <div className='h-12'>
            <h1 className="text-5xl mt-10 font-bold text-[#dde3fe] ml-8">{text}</h1>
            </div>
          
          <div className="mt-36 ml-8 flex gap-2">
            <button className="bg-[#dde3fe] rounded-3xl font-medium px-4 py-2 border-[#3142c0] text-[#3142c0] border-2">Join a Project</button>
            <button className="bg-[#dde3fe] rounded-3xl font-medium px-4 py-2 border-[#3142c0] text-[#3142c0] border-2">Host a project</button>
          </div>
          
        </div>
      <img src="new_illus.png" className="h-2/3 w-[59%]"></img>
      </div>
      <About />

      
    </div>
  )
}
