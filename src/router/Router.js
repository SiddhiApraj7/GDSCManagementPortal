
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


const Router = () => {

  const { currentUser } = useAuth();
  const PrivateRoute = ({children} ) => {
      return currentUser ? children : <Navigate to="/login" />;
  };



  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/host-project" element={<PrivateRoute><HostProject/></PrivateRoute>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/join-project" element={<JoinProject/>}/>
      <Route path="/collaborator-dashboard" element={<PrivateRoute><CollaboratorDashboard/></PrivateRoute>}/>
      <Route path="/manager-dashboard" element={<PrivateRoute><ProjectManagerDashboard/></PrivateRoute>}/>
      <Route path="/manager-dashboard/inbox" element={<PrivateRoute><Inbox/></PrivateRoute>}/>

      {/* why is there again a <inbox/> ?? */}
      <Route path="/collaborator-dashboard/inbox" element={<PrivateRoute><Inbox/></PrivateRoute>}/>
      <Route path="/join-project-form" element={<PrivateRoute><JoinProjectForm /></PrivateRoute>}/>

      </Routes>
    </>

  );
}

export default Router;
