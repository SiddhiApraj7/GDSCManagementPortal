
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HostProject from './Pages/HostProject';
import Projects from './Pages/Projects';
import JoinProject from './Pages/JoinProject';
import ProjectManagerDashboard from './Pages/ProjectManagerDashboard';
import Inbox from './Pages/Inbox';
import JoinProjectForm from './Pages/JoinProjectForm';
import Admin from './Pages/Admin';
import CollDashboard from './Pages/CollDashboard';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/host-project" element={<HostProject/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/join-project" element={<JoinProject/>}/>
      <Route path="/collaborator-dashboard" element={<CollDashboard/>}/>
      <Route path="/manager-dashboard" element={<ProjectManagerDashboard/>}/>
      <Route path="/manager-dashboard/inbox" element={<Inbox/>}/>
      <Route path="/collaborator-dashboard/inbox" element={<Inbox/>}/>
      <Route path="/join-project-form" element={<JoinProjectForm />}/>
      <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>

  );
}

export default App;
