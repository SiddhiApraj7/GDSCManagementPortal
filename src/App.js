
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HostProject from './Pages/HostProject';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/host-project" element={<HostProject/>}/>
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>

  );
}

export default App;
