import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Manager() {
    return (
        <div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <div className="flex">
                        <div align="left" className="m-3">
                            <img className="w-22 h-22 rounded-full mx-auto" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />

                        </div>
                        <div className="m-3">
                            <h7 class="mb-2 text-xl font-semibold tracking-tight text-[#05276a] dark:text-white">Yash Rai</h7>
                            <p class="my-1 text-sm font-normal text-gray-700 dark:text-gray-400">Projects Managed: 5</p>
                            <p class="my-1 text-sm font-normal text-gray-700 dark:text-gray-400">Skills: ML, CAD, Blockchain</p>

                        </div>
                    </div>
                    <div>
                        <div className="flex gap-7">
                            <div>
                                <a href="#" class="mb-3 ml-7 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Demote
                                </a>
                            </div>
                            <div>
                                <div className='flex gap-2 my-1 ml-3'>
                                    <GitHubIcon className='h-6 w-8' />
                                    <WhatsAppIcon className='h-6 w-8' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
