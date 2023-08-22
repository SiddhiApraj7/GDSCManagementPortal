
<<<<<<< HEAD
import {Routes, Route ,useNavigation} from 'react-router-dom'
import React, { useState, useEffect } from "react";
=======
import {Routes, Route} from 'react-router-dom'
>>>>>>> d54983eee60d9b25a71d116b241671b9278c40eb
import { useAuth } from '../contexts/AuthContext';
import  {
  HostProject,
  Projects,
  JoinProject,
  ProjectManagerDashboard,
  JoinProjectForm,
  CollaboratorDashboard,
  Login,
  Register,
  LandingPage
} from '../Pages/index';
import AdminDashboard from '../Pages/AdminDashboard';
import AllProjects from '../Pages/AllProjects';
import ProjectManagers from '../Pages/ProjectManagers';
import ConfirmHostProject from '../Pages/ConfirmHostProject';
import ConfirmJoinProject from '../Pages/ConfirmJoinProject';
import AdminInbox from '../Pages/AdminInbox';
import ManagerInbox from '../Pages/ManagerInbox';
import CollaboratorInbox from '../Pages/CollaboratorInbox';
import Team from '../Pages/Team';
import Loader from '../Components/Loader';
import { db } from "../config/firebase";
import { collection, addDoc, query, where, getDocs, serverTimestamp  } from "firebase/firestore";



const Router = () => {

  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("router data",currentUser);
  useEffect(() => {
    if (currentUser) {
      const clientRef = collection(db, "Client");
      const q = query(clientRef, where("email", "==", currentUser.email));
      const querySnapshot = getDocs(q);
  
      querySnapshot.then((snapshot) => {
        if (!snapshot.empty) {
          const clientDoc = snapshot.docs[0];
          const clientData = clientDoc.data();
          const clientAdmin = clientData.isAdmin;
          setIsAdmin(clientAdmin);
        }
      }).catch((error) => {
        console.error("Error getting client data:", error);
      });
    }
  }, [currentUser]);

  const AdminRoute = ({ children }) => {
    console.log("admin route",isAdmin);
    return isAdmin === true ? (
      // Render children if currentUser is available
      children
    ) : (
      // Render a loading state if currentUser is still loading
      <Loader />
      
    );
  };

  const PrivateRoute = ({ children }) => {
    return currentUser !== null ? (
     
      children
    ) : (
      
      <Loader />
      
    );
  };




  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/host-project" element={<PrivateRoute><HostProject/></PrivateRoute>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projects/:projectId" element={<JoinProject />} />
      <Route path="/collaborator-dashboard" element={<PrivateRoute><CollaboratorDashboard/></PrivateRoute>}/>
      <Route path="/manager-dashboard" element={<PrivateRoute><ProjectManagerDashboard/></PrivateRoute>}/>
      <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>}/>
      <Route path="/admin-dashboard/all-projects" element={<AdminRoute><AllProjects/></AdminRoute>}/>
      <Route path="/admin-dashboard/project-managers" element={<AdminRoute><ProjectManagers/></AdminRoute>}/>
      <Route path="/manager-dashboard/inbox" element={<PrivateRoute><ManagerInbox/></PrivateRoute>}/>
      <Route path="/admin-dashboard/inbox" element={<AdminRoute><AdminInbox/></AdminRoute>}/>


      <Route path="/collaborator-dashboard/inbox" element={<PrivateRoute><CollaboratorInbox/></PrivateRoute>}/>
      <Route path="/join-project-form/:projectId" element={<PrivateRoute><JoinProjectForm /></PrivateRoute>}/>
      <Route path="/confirm-host-project" element={<ConfirmHostProject/>}/>
      <Route path="/confirm-join-project/:projectId" element={<ConfirmJoinProject/>}/>
      <Route path="/our-team" element={<Team/>}/>


      </Routes>
    </>

  );
}

export default Router;
