import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { toast } from 'react-toastify';
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc , where, query} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  
  const notifyError = (message) => {
    toast.error(message);
  };
  const [currentUser, setCurrentUser] = useState();
  // const [loading, setLoading] = useState(true)

  async function signup(email, password, username) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const colRef = collection(db, "Client");
      const existingUserQuery = query(colRef, where("email", "==", user.email));
      
      await addDoc(colRef, {
        email: email,
        name: username,
        uid: user.uid,
      })
        .then(() => {
          console.log("User data stored successfully");
          
          return user;
        })
        .catch((error) => {
          console.error("Error storing user data:", error);
          notifyError('Error storing user data');
        });
      
    } catch (error) {
      console.error("Error signing up:", error.message);
      notifyError('Error storing user data');
      throw error; // Rethrow the error to be caught by the caller
      
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }

    const signInWithGoogle = async (e) => {
      try {
        const googleauthprovider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, googleauthprovider);
        const user = result.user;
        console.log("Logged in with Google:", user);
        const colRef = collection(db, "Client");
        const existingUserQuery = query(colRef, where("email", "==", user.email));
        if (existingUserQuery.empty) {
          await addDoc(colRef, {
            email: user.email,
            name: user.displayName,
            uid: user.uid,
          })
            .then(() => {
              console.log("User data stored successfully");
              return user;
            })
            .catch((error) => {
              console.error("Error storing user data:", error);
              notifyError('Error storing user data');
              
            });
          
        }
       
      } catch (error) {
        console.error("Google Sign-In Error:", error);
        notifyError('Error storing user data');
        throw error; 
      }
    };

  const signInWithGithub = async (e) => {
    try {
      const githubProvider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      console.log("Logged in with Github:", user);
      const colRef = collection(db, "Client");
      const existingUserQuery = query(colRef, where("email", "==", user.email));
      if (existingUserQuery.empty) {
        await addDoc(colRef, {
          email: user.email,
          name: user.displayName,
          uid: user.uid,
        })
          .then(() => {
            console.log("User data stored successfully");
            return user;
          })
          .catch((error) => {
            console.error("Error storing user data:", error);
            notifyError('Error storing user data');
            
          });
        
      }
    } catch (error) {
      console.error("Github Sign-In Error:", error);
      notifyError('Error storing user data');
      throw error;
    }
  };

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // setLoading(false)
      if (user) {
        // Update local storage with user data when user is authenticated
        const { displayName, email, photoURL } = user;
        localStorage.setItem("user", JSON.stringify({ name: displayName, email, profilePic: photoURL }));
      } else {
        // Clear local storage when user is not authenticated
        localStorage.removeItem("user");
      }

    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  );
}
