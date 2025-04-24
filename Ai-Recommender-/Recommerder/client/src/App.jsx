import React from "react";
 
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "./context/AuthContext";


import Landing from "./components/Landing.jsx";
import Explore from "./components/Explore.jsx";
import Search from "./components/Search.jsx";
import Contact from "./components/Contact.jsx";
import  LogIn  from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Logout from "./components/Logout.jsx";




const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path ="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<ProtectedAdmin component={Dashboard} />} />

      </Routes>
    </Router>
     </AuthProvider>
  );
};

const ProtectedAdmin = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  // Redirect to /admin if not authenticated
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default App;
