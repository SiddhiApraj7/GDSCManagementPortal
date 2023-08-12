
import AuthProvider from "./contexts/AuthContext";
import Router from "./router/Router";



function App() {
  return (
    <div> 
    <AuthProvider>
      <Router/>
    </AuthProvider>
    </div>

  );
}

export default App;
