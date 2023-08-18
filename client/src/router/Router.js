
import {Routes, Route ,useNavigation} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import  {
  HostProject,
  Projects,
  JoinProject,
  ProjectManagerDashboard,
  Inbox,
  JoinProjectForm,
  CollaboratorDashboard,
  Login,
  Register,
  LandingPage
} from '../Pages/index';
import { Navigate } from "react-router-dom";
import AdminDashboard from '../Pages/AdminDashboard';
import AllProjects from '../Pages/AllProjects';
import ProjectManagers from '../Pages/ProjectManagers';
import ConfirmHostProject from '../Pages/ConfirmHostProject';
import ConfirmJoinProject from '../Pages/ConfirmJoinProject';
import AdminInbox from '../Pages/AdminInbox';
import ManagerInbox from '../Pages/ManagerInbox';
import CollaboratorInbox from '../Pages/CollaboratorInbox';
import Team from '../Pages/Team';


const Router = () => {

  const { currentUser } = useAuth();
  console.log("router data",currentUser);
  const PrivateRoute = ({ children }) => {
    return currentUser !== null ? (
      // Render children if currentUser is available
      children
    ) : (
      // Render a loading state if currentUser is still loading
      <div>Loading...</div>
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
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      <Route path="/admin-dashboard/all-projects" element={<PrivateRoute><AllProjects/></PrivateRoute>}/>
      <Route path="/admin-dashboard/project-managers" element={<PrivateRoute><ProjectManagers/></PrivateRoute>}/>
      <Route path="/manager-dashboard/inbox" element={<PrivateRoute><ManagerInbox/></PrivateRoute>}/>
      <Route path="/admin-dashboard/inbox" element={<AdminInbox/>}/>

      {/* why is there again a <inbox/> ?? */}
      <Route path="/collaborator-dashboard/inbox" element={<PrivateRoute><CollaboratorInbox/></PrivateRoute>}/>
      <Route path="/join-project-form/:projectId" element={<PrivateRoute><JoinProjectForm /></PrivateRoute>}/>
      <Route path="/confirm-host-project" element={<ConfirmHostProject/>}/>
      <Route path="/confirm-join-project/:projectId" element={<ConfirmJoinProject/>}/>
      <Route path="/meet-the-team" element={<Team/>}/>


      </Routes>
    </>

  );
}

export default Router;
