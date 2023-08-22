import React from 'react'
import NavbarProjects from '../Components/NavbarProjects'
export default function Team() {
    const team = [
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQHpJw9Zl0eAiQ/profile-displayphoto-shrink_400_400/0/1686758831660?e=1697673600&v=beta&t=G-9X1PYOI6i2NRgmVyFdQTCEb_tMCxPKwKxDfg_YNzE",
            name: "Subham Subhasis Sahoo",
            title: "GDSC Lead",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQELrdDpcvOqCg/profile-displayphoto-shrink_100_100/0/1691665167495?e=1697673600&v=beta&t=1KSyAdA2Quivbd--lgpfo4_Z_lvyTwqR_rcgP8dXXPQ",
            name: "Ojassvi Kumar",
            title: "GDSC Tech Lead",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/C4D03AQHXk6yA-QRRXA/profile-displayphoto-shrink_100_100/0/1650529888623?e=1697673600&v=beta&t=lKxKUS7KHFbl3a7W25Qpv2vZzqfUB1wh5MGwi-oY3Uc",
            name: "Kartik Tiwari",
            title: "Community Manager",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D5603AQFHQkjRy7Bt3Q/profile-displayphoto-shrink_400_400/0/1689233468517?e=1697673600&v=beta&t=9F65517OMtijkkctUDHsFgMEO3kYFv2XfuzdsLSaDRk",
            name: "Anushtha Prakash",
            title: "Technical Team",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQEKEk_j5eC2Fw/profile-displayphoto-shrink_400_400/0/1682919765937?e=1697673600&v=beta&t=fZeyiOF-UvOe9soKesuhecvRrIGUwZnN2dkeBkLGra8",
            name: "Tanisha Daharwal",
            title: "Technical Team",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQEj8vfYnL_Ipg/profile-displayphoto-shrink_100_100/0/1676569541914?e=1697673600&v=beta&t=umLPSk__24WNyy9Kkf6SzELKirCB78OkDa6uraKUlCE",
            name: "Siddhi Apraj",
            title: "Technical Team",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/C4D03AQF7iz1t5Q9ppQ/profile-displayphoto-shrink_100_100/0/1658914628858?e=1697673600&v=beta&t=bpgL15UEuf5TkksIyj86eNoMTw6DvvVhJMGATBfWAPg",
            name: "Sahil Mangla",
            title: "Technical Team",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQEXZCAxMJdjSQ/profile-displayphoto-shrink_100_100/0/1688927037849?e=1697673600&v=beta&t=qDVoMX5TW7tcLwmvn6tcNPjK6fTQ2nR2tLXhZ_vqVwk",
            name: "Siddhant Verma",
            title: "Event Manager",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQFoGWubRqpdsw/profile-displayphoto-shrink_100_100/0/1665607071308?e=1697673600&v=beta&t=uoeVht7yZO2WDtNOEftO4P-LsVXOcoepQTdoo74f_Ik",
            name: "Yashasv Prajapati",
            title: "Program Manager",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D4D03AQGF1GCvt6wFFQ/profile-displayphoto-shrink_100_100/0/1669097162703?e=1697673600&v=beta&t=ap6J6-nlhC6crD-W3Hd3ZRAWyP0MXMOLDzycRdkw_ZA",
            name: "Alankrit Kadian",
            title: "Program Manager",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
        {
            avatar: "https://media.licdn.com/dms/image/D5603AQHkC3IY04zbKw/profile-displayphoto-shrink_100_100/0/1668488104370?e=1697673600&v=beta&t=PFUsDh_MloqRmCAlzUmXXzlAcdeK45VQaX1tiDc_8Cw",
            name: "Ajay Athwal",
            title: "Design Lead",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)",
        },
    ]
    

    return (
        <section className=" bg-[#f2f0f0] h-full py-4">
            <NavbarProjects />
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                
                <div className="max-w-xl mt-20 mx-auto">
                    
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-500  text-lg leading-8 mt-5">
                    Behind every line of code and every creative endeavor, there's a dedicated team of visionaries who make it all possible. Allow us to introduce the brilliant minds that drive GDSC IIT Ropar forward.</p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt="Team"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            <a href={item.github}>
                                            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-8 h-8 duration-150 hover:text-gray-500"  fill="currentColor"

            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg> </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
  )
}
