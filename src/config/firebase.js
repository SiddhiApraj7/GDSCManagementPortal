// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACiUh-Ium3gu9OUVa9UD5jorWU_gs0lSY",
  authDomain: "gdsc-management-portal.firebaseapp.com",
  projectId: "gdsc-management-portal",
  storageBucket: "gdsc-management-portal.appspot.com",
  messagingSenderId: "817760700274",
  appId: "1:817760700274:web:a71b8b556b6b87e0897feb",
  measurementId: "G-QBBYL7VDCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
