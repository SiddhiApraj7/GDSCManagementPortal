import React from 'react';
import { useEffect } from 'react';
const HostProject = () => {

  useEffect(() => {
    let load = 0;

    const handleFormLoad = () => {
     
      load++;
      if (load >= 2) {
       
        window.location.href = `http://localhost:3001/confirm-host-project/`; 
      }
    };

   
    const iframe = document.getElementById('gform');
    if (iframe) {
      iframe.onload = handleFormLoad;
    }

   
    return () => {
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, []);
 

  return (
    <div className='bg-gradient-to-b from-[#9fa0a9] to-white'>
      <iframe
        id="gform"
        className='mx-auto pt-4 w-full'
        src="https://docs.google.com/forms/d/e/1FAIpQLSekmjdfAmX0CPsvBK3bqGg8Zs7uAQnes_b66Ce11DDQU77WVg/viewform?embedded=true"
        width="640"
        height="5000"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default HostProject;


