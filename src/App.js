


function App() {
  return (
    <div className="bg-[#7a8aff] h-full flex flex-col justify-center items-center" >
     
        <div className="mt-8 text-lg font-bold text-[#dde3fe] flex gap-20 ">
          <h1 className="text-center">Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Sign In</h1>
        </div>
      
      <div className="flex justify-between">
        <div className="my-auto p-6">
          <h1 className="text-6xl font-bold text-[#dde3fe] ml-10">GDSC Management Portal</h1>
          <div className="mt-6 ml-10 flex gap-2">
            <button className="bg-[#dde3fe] rounded-3xl font-medium px-4 py-2 border-[#3243c0] border-2">Join a Project</button>
            <button className="bg-[#dde3fe] rounded-3xl font-medium px-4 py-2 border-[#3243c0] border-2">Host a project</button>
          </div>
        </div>
      <img src="illus.jpg" className="h-1/3 w-2/3"></img>
      </div>

      
    </div>
    
  );
}

export default App;
