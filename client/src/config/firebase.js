
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyACiUh-Ium3gu9OUVa9UD5jorWU_gs0lSY",
  authDomain: "gdsc-management-portal.firebaseapp.com",
  projectId: "gdsc-management-portal",
  storageBucket: "gdsc-management-portal.appspot.com",
  messagingSenderId: "817760700274",
  appId: "1:817760700274:web:a71b8b556b6b87e0897feb",
  measurementId: "G-QBBYL7VDCV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 
const storage = getStorage(app); 
const auth = getAuth(app);
export { auth, db, storage };

