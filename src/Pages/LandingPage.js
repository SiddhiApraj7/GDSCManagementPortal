import React from 'react'
import Navbar from '../Components/Navbar'

export default function LandingPage() {
  return (
    <div className="bg-[#7a8aff] h-full flex flex-col justify-center items-center" >
     <Navbar />
        
      
      <div className="flex justify-between">
        <div className="my-auto p-6">
          <h1 className="text-6xl font-bold text-[#dde3fe] ml-8">GDSC Management Portal</h1>
          <div className="mt-6 ml-8 flex gap-2">
            <button className="bg-[#dde3fe] rounded-3xl font-medium px-4 py-2 border-[#3142c0] text-[#3142c0] border-2">Join a Project</button>
            <button className="bg-[#dde3fe] rounded-3xl font-medium px-4 py-2 border-[#3142c0] text-[#3142c0] border-2">Host a project</button>
          </div>
        </div>
      <img src="new_illus.png" className="h-1/3 w-[63%]"></img>
      </div>

      
    </div>
  )
}
