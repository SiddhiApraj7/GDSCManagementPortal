import React from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export default function ConfirmHostProject() {

    const { currentUser } = useAuth(); // Assuming useAuth() gives you access to the current user
    //const [loading, setLoading] = useState(false);

    
  
    const handleClick = async () => {
      try {
        //setLoading(true);
  
        if (currentUser) {
          const email = currentUser.email;
            console.log(email);
          const response = await axios.post(
            'http://localhost:3000/requests/create-project-request',
            {
              email: email,
            }
          );
  
          if (response.status === 200) {
            // API call successful
            console.log("API call successful");
          } else {
            // API call failed
            console.error("API call failed");
          }
        }
      } catch (error) {
        console.error("Error calling API:", error);
      } finally {
        //setLoading(false);
      }
    };


  return (
    <div align="center" className="mt-16">
        
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Confirm Hosting</h5>
        
        <div className="my-12 mx-2">
            <h6>Your request to host this project will be sent to the admin for approval.</h6>
        </div>
        <button type="button" onClick={handleClick} class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Done</button>
    </div>

    </div>
  )
}
