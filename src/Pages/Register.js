import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { auth} from "../config/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";

import {useNavigate} from "react-router-dom";
import * as Yup from "yup"; 
import gdsc from "../media/gdsc-logo.png"

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  }); 

  

export default function Register() {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          try {
            const { email, password } = values;
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = userCredential.user;
            navigate('/');
            // Handle your success logic here
          } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle your error logic here
          }
        },
      });
    
      const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("Logged in with Google:", user);
            navigate('/');
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    const signInWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            const user = result.user;
            console.log("Logged in with Github:", user);
            navigate('/');
        } catch (error) {
            console.error("Github Sign-In Error:", error);
        }
    };
    
    return (
        <div className="lg:flex gap-4 h-auto w-full">
            
             
                    <img src="pic5.jpg" className="h-full hidden lg:flex w-[50%]"></img>
             

                <div className="lg:w-[35%] w-[90%] mx-auto ">
                    <div>
                    <a href="/">
                        <img src={gdsc} className="lg:h-24 lg:w-24 h-10 w-10 mx-auto rounded-full"></img>
                    </a>
               
                    </div>
                    <div className="w-full mt-4 border:black border-2 rounded-2xl p-4 bg-white">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                
                                 {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    id='email'
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    id='password'
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    id='password_confirmation'
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password_confirmation}
                                />
                                 {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
                  <div className="text-red-500">{formik.errors.password_confirmation}</div>
                ) : null}
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-[#7a8aff] hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button  type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#7a8aff] rounded-md hover:bg-[#6072ff] focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link to="/login" className="text-purple-600 hover:underline" href="#">
                                Log in
                            </Link>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-4" >
                        <button
                        onClick={signInWithGoogle}
                            aria-label="Login with Google"
                            type="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <button
                            onClick={signInWithGithub}
                            aria-label="Login with GitHub"
                            role="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                            <p>Login with GitHub</p>
                        </button>
                    </div>
               
            </div>
                </div>
                    
                
        </div>
    );
}