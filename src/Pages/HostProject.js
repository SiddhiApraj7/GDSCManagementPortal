import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function HostProject() {


  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    linkedin: Yup.string().required('LinkedIn is required'),
    github: Yup.string().required('GitHub is required'),
    resume: Yup.string().required('Resume is required'),
    projectName: Yup.string().required("Project Name is required"),
    techStack: Yup.string().required('Tech stack is required'),
    githubProject : Yup.string().required('Github Link of Project is required'),
    slack : Yup.string().required('Slack Link of Project is required'),
    projectOverview : Yup.string().required('Overview of Project is required'),
    problemStatement : Yup.string().required('Problem Statement is required'),
    prerequisites : Yup.string().required('Prerequisites are required'),
  });
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      contactNumber: '',
      linkedin: '',
      github: '',
      resume: '',
      projectName: '',
      techStack: '',
      slack : '',
      projectOverview : '',
      problemStatement : '',
      prerequisites : '',
      githubProject : ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      // Handle form submission here
      console.log(values);
    },
  });
  return (
    <div className=''>
      <img src="https://source.unsplash.com/random?wallpapers" className='h-96 absolute w-full'></img>
      <div className=' w-full lg:w-[50%] h-auto pt-6 pb-6 top-52 rounded-md relative bg-gray-200 z-50 mx-auto'>
        <h1 className='text-5xl  text-center'>Register as a Project Manager</h1>
        <h1 className='text-center mt-4'>Fill in the form below to host a project</h1>
        <div className='mt-24 p-4'>
          <form onSubmit={formik.handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <h1 className='mb-2 text-3xl'>Basic Details</h1>
              <div className='h-1 mb-6  bg-gray-300'></div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500">{formik.errors.fullName}</div>
              ) : null}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Contact Number */}
            <div className="mb-4">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNumber}
              />
              {formik.touched.contactNumber && formik.errors.contactNumber ? (
                <div className="text-red-500">{formik.errors.contactNumber}</div>
              ) : null}
            </div>

            {/* LinkedIn */}
            <div className="mb-4">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkedin}
              />
              {formik.touched.linkedin && formik.errors.linkedin ? (
                <div className="text-red-500">{formik.errors.linkedin}</div>
              ) : null}
            </div>

            {/* GitHub */}
            <div className="mb-4">
              <label htmlFor="github">GitHub</label>
              <input
                type="text"
                id="github"
                name="github"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.github}
              />
              {formik.touched.github && formik.errors.github ? (
                <div className="text-red-500">{formik.errors.github}</div>
              ) : null}
            </div>

            <div className="mb-4">
              
             
              <label htmlFor="resume">Drive Link for resume</label>
              <input
                type="text"
                id="resume"
                name="resume"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.resume}
              />
              {formik.touched.resume && formik.errors.resume ? (
                <div className="text-red-500">{formik.errors.resume}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <h1 className='mb-2 text-3xl'>Project Details</h1>
              <div className='h-1 mb-6  bg-gray-300'></div>
              <label htmlFor="projectDetails">Project Name</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.projectName}
              />
              {formik.touched.projectName && formik.errors.projectName ? (
                <div className="text-red-500">{formik.errors.projectName}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="techStack">Tech Stack (comma-separated)</label>
              <input
                type="text"
                id="techStack"
                name="techStack"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.techStack}
              />
              {formik.touched.techStack && formik.errors.techStack ? (
                <div className="text-red-500">{formik.errors.techStack}</div>
              ) : null}
            </div>
            

            <div className="mb-4">
              <label htmlFor="githubProject">GitHub Link for Project</label>
              <input
                type="text"
                id="githubProject"
                name="githubProject"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.githubProject}
              />
              {formik.touched.githubProject && formik.errors.githubProject ? (
                <div className="text-red-500">{formik.errors.githubProject}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="slack">Slack Link for Project</label>
              <input
                type="text"
                id="slack"
                name="slack"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.slack}
              />
              {formik.touched.slack && formik.errors.slack ? (
                <div className="text-red-500">{formik.errors.slack}</div>
              ) : null}
            </div>


            {/* Reason to Join */}
            <div className="mb-4">
              <label htmlFor="projectOverview">Project Overview</label>
              <textarea
                id="projectOverview"
                name="projectOverview"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.projectOverview}
              />
              {formik.touched.projectOverview && formik.errors.projectOverview ? (
                <div className="text-red-500">{formik.errors.projectOverview}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="problemStatement">Problem Statement</label>
              <textarea
                id="problemStatement"
                name="problemStatement"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.problemStatement}
              />
              {formik.touched.problemStatement && formik.errors.problemStatement ? (
                <div className="text-red-500">{formik.errors.problemStatement}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="prerequisites">Prerequisites</label>
              <textarea
                id="prerequisites"
                name="prerequisites"
                className="w-full rounded-md border-gray-300 p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prerequisites}
              />
              {formik.touched.prerequisites && formik.errors.prerequisites ? (
                <div className="text-red-500">{formik.errors.prerequisites}</div>
              ) : null}
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>

  )
}
