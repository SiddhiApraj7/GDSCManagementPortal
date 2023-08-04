import React from 'react';


import { useEffect } from 'react';
const JoinProjectForm = () => {
 
  return (
    <div className='bg-gradient-to-b h-full from-[#9fa0a9] to-white'>
      <iframe className='mx-auto pt-4 w-full' src="https://docs.google.com/forms/d/e/1FAIpQLSdLY00poFAM3bWHZv9H3p9EoOLbnL0TlPbeJkey6w2BWpmaLA/viewform?embedded=true" width="640" height="5000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
};

export default JoinProjectForm;

// import React from 'react'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// export default function JoinProjectForm() {
  

//     const validationSchema = Yup.object().shape({
//         fullName: Yup.string().required('Full name is required'),
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         contactNumber: Yup.string().required('Contact number is required'),
//         linkedin: Yup.string().required('LinkedIn is required'),
//         github: Yup.string().required('GitHub is required'),
//         hoursPerWeek: Yup.number()
//           .typeError('Please enter a valid number')
//           .required('Hours per week is required'),
//         resume: Yup.mixed().optional(),
//         reasonToJoin: Yup.string().required('Reason to join is required'),
//       });
//       const formik = useFormik({
//         initialValues: {
//           fullName: '',
//           email: '',
//           contactNumber: '',
//           linkedin: '',
//           github: '',
//           hoursPerWeek: '',
//           resume: null,
//           reasonToJoin: '',
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values) => {
            
//           // Handle form submission here
//           console.log(values);
//         },
//       });
//     return (
//         <div className=''>
//             <img src="https://source.unsplash.com/random?wallpapers" className='h-96 absolute w-full'></img>
//             <div className=' w-full lg:w-[50%] h-auto pt-6 pb-6 top-52 rounded-md relative bg-gray-200 z-50 mx-auto'>
//                 <h1 className='text-5xl  text-center'>Register as a Collaborator</h1>
//                <h1 className='text-center mt-4'>Fill in the form below to register for the project</h1>
//               <div className='mt-24 p-4'>
//               <form onSubmit={formik.handleSubmit}>
//             {/* Full Name */}
//             <div className="mb-4">
//               <label htmlFor="fullName">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.fullName}
//               />
//               {formik.touched.fullName && formik.errors.fullName ? (
//                 <div className="text-red-500">{formik.errors.fullName}</div>
//               ) : null}
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//               />
//               {formik.touched.email && formik.errors.email ? (
//                 <div className="text-red-500">{formik.errors.email}</div>
//               ) : null}
//             </div>

//             {/* Contact Number */}
//             <div className="mb-4">
//               <label htmlFor="contactNumber">Contact Number</label>
//               <input
//                 type="text"
//                 id="contactNumber"
//                 name="contactNumber"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.contactNumber}
//               />
//               {formik.touched.contactNumber && formik.errors.contactNumber ? (
//                 <div className="text-red-500">{formik.errors.contactNumber}</div>
//               ) : null}
//             </div>

//             {/* LinkedIn */}
//             <div className="mb-4">
//               <label htmlFor="linkedin">LinkedIn</label>
//               <input
//                 type="text"
//                 id="linkedin"
//                 name="linkedin"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.linkedin}
//               />
//               {formik.touched.linkedin && formik.errors.linkedin ? (
//                 <div className="text-red-500">{formik.errors.linkedin}</div>
//               ) : null}
//             </div>

//             {/* GitHub */}
//             <div className="mb-4">
//               <label htmlFor="github">GitHub</label>
//               <input
//                 type="text"
//                 id="github"
//                 name="github"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.github}
//               />
//               {formik.touched.github && formik.errors.github ? (
//                 <div className="text-red-500">{formik.errors.github}</div>
//               ) : null}
//             </div>

//             {/* Hours Per Week */}
//             <div className="mb-4">
//               <label htmlFor="hoursPerWeek">How many hours per week (including the weekend) can you contribute to the challenge?</label>
//               <input
//                 type="number"
//                 id="hoursPerWeek"
//                 name="hoursPerWeek"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.hoursPerWeek}
//               />
//               {formik.touched.hoursPerWeek && formik.errors.hoursPerWeek ? (
//                 <div className="text-red-500">{formik.errors.hoursPerWeek}</div>
//               ) : null}
//             </div>

//             {/* Resume */}
//             <div className="mb-4">
//               <label htmlFor="resume">Resume</label>
//               <input
//                 type="file"
//                 id="resume"
//                 name="resume"
//                 className="w-full border-gray-300"
//                 onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files[0])}
//               />
//               {formik.touched.resume && formik.errors.resume ? (
//                 <div className="text-red-500">{formik.errors.resume}</div>
//               ) : null}
//             </div>

//             {/* Reason to Join */}
//             <div className="mb-4">
//               <label htmlFor="reasonToJoin">Why do you want to join the project?</label>
//               <textarea
//                 id="reasonToJoin"
//                 name="reasonToJoin"
//                 className="w-full rounded-md border-gray-300 p-2"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.reasonToJoin}
//               />
//               {formik.touched.reasonToJoin && formik.errors.reasonToJoin ? (
//                 <div className="text-red-500">{formik.errors.reasonToJoin}</div>
//               ) : null}
//             </div>

//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Submit
//             </button>
//           </form>
         
//               </div>
//             </div>
//         </div>

//     )
// }
