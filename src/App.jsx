import { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Loginpage from "./pages/Loginpage";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      console.log(user);
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />{" "}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
