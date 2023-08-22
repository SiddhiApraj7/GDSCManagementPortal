import React from 'react';
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
const JoinProjectForm = () => {
  const { projectId } = useParams();
  useEffect(() => {
    let load = 0;

    const handleFormLoad = () => {
      load++;
      if (load >= 2) {

        window.location.href = `http://localhost:3001/confirm-join-project/${projectId}`; 
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
      <iframe  id='gform' className='mx-auto pt-4 w-full' src="https://docs.google.com/forms/d/e/1FAIpQLSdLY00poFAM3bWHZv9H3p9EoOLbnL0TlPbeJkey6w2BWpmaLA/viewform?embedded=true" width="640" height="5000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
};

export default JoinProjectForm;


