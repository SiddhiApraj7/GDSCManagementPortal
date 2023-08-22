import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { toast } from "react-toastify";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, serverTimestamp  } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const navigate = useNavigate(); 
  const notifyError = (message) => {
    toast.error(message);
  };
  const [currentUser, setCurrentUser] = useState();
 
  

  async function signup(email, password, username) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });
      localStorage.setItem("user", JSON.stringify({ name: currentUser.displayName, email: currentUser.email, profilePic:currentUser.photoURL }));
      
      
      const colRef = collection(db, "Client");
      
      await addDoc(colRef, {
        email: email,
        name: username,
        uid: user.uid,
        isCollaborator: false,
        profilepic : currentUser.photoURL,
        isAdmin: false,
        isProjectManager: false,
        projectHosted: [], 
        projectCollaborated: [], 
        joinDate:  serverTimestamp(), 
      })
        .then(() => {
           ("User data stored successfully");
          return user;
        })
        .catch((error) => {
          console.error("Error storing user data:", error);
          notifyError("Error storing user data");
        });
    } catch (error) {
      console.error("Error signing up:", error.message);
      notifyError("Error storing user data");
      throw error; 
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const clientRef = collection(db, "Client");
      const q = query(clientRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const clientDoc = querySnapshot.docs[0];
        const clientData = clientDoc.data();
        const clientName = clientData.name;

        
        await updateProfile(auth.currentUser, {
          displayName: clientName,
        });
        localStorage.setItem("user", JSON.stringify({ name: clientName, email, profilePic:null }));
        return ;
      } else {
        throw new Error("Client data not found.");
      }
    } catch (error) {
      throw error;
    }
  }

  const signInWithGoogle = async (e) => {
    try {
      const googleauthprovider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleauthprovider);
      const user = result.user;
      

      const colRef = collection(db, "Client");
      const querySnapshot = await getDocs(
        query(colRef, where("email", "==", user.email))
      );

      if (querySnapshot.size === 0) {
        await addDoc(colRef, {
          email: user.email,
          name: user.displayName,
          uid: user.uid,
          isCollaborator: false,
          profilepic : currentUser.photoURL,
          isAdmin: false,
          isProjectManager: false,
          projectHosted: [], 
          projectCollaborated: [], 
          joinDate: serverTimestamp(), 
        });
        
        localStorage.setItem("user", JSON.stringify({ name: currentUser.displayName, email: currentUser.email, profilePic:currentUser.photoURL }));
        return user;
      } else {
        
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      notifyError("Error signing in or storing user data");
      throw error;
    }
  };
  const signInWithGithub = async () => {
    try {
      const githubProvider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      
      const colRef = collection(db, "Client");
      const querySnapshot = await getDocs(
        query(colRef, where("email", "==", user.email))
      );
      if (querySnapshot.size === 0) {
        await addDoc(colRef, {
          email: user.email,
          name: user.displayName,
          uid: user.uid,
          isCollaborator: false,
          profilepic : currentUser.photoURL,
          isAdmin: false,
          isProjectManager: false,
          projectHosted: [], 
          projectCollaborated: [], 
          joinDate: serverTimestamp(), 
        })
          .then(() => {
             ("User data stored successfully");
            localStorage.setItem("user", JSON.stringify({ name: currentUser.displayName, email: currentUser.email, profilePic:currentUser.photoURL }));
            return user;
          })
          .catch((error) => {
            console.error("Error storing user data:", error);
            notifyError("Error storing user data");
          });
      }
    } catch (error) {
      console.error("Github Sign-In Error:", error);
      notifyError("Error storing user data");
      throw error;
    }
  };

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
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
      
      if (user) {
        
        const { displayName, email, photoURL } = user;
        localStorage.setItem(
          "user",
          JSON.stringify({ name: displayName, email, profilePic: photoURL })
        );
      } else {
        
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
      
      {children}
    </AuthContext.Provider>
  );
}
