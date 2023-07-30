
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HostProject from './Pages/HostProject';
import Projects from './Pages/Projects';
import JoinProject from './Pages/JoinProject';
import Collaborator_dashboard from './Pages/Collaborator_dashboard';
import Inbox from './Pages/Inbox';

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
      <Route path="/collaborator-dashboard" element={<Collaborator_dashboard/>}/>
      <Route path="/collaborator-dashboard/inbox" element={<Inbox/>}/>
      </Routes>
    </Router>

  );
}

export default App;
