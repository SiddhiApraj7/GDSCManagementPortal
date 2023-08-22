import React from 'react'
import user from '../media/user.png'

export default function Manager({key,name,projects,pic,email}) {

    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <div className="flex">
                        <div align="left" className="m-3">
                            {pic? <img className="w-18 h-18 rounded-full mx-auto" src={pic} alt="user photo" /> : <img className="w-14 h-14 rounded-full mx-auto" src={user} alt="user photo" />}

                        </div>
                        <div className="m-3">
                            <h7 class="mb-2 text-xl font-semibold tracking-tight text-[#05276a] dark:text-white">{name}</h7>
                            <p class="my-1 text-sm font-normal text-gray-700 dark:text-gray-400">Projects Managed: {projects}</p>

                        </div>
                    </div>
                    <div>
                        <div className="flex gap-10">
                            <div>
                                <a href="/" class="mb-3 ml-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Demote
                                </a>
                            </div>
                            <div>
                                <a href={`mailto:${email}`} class="mb-3 ml-7 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#05276a] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Contact
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
