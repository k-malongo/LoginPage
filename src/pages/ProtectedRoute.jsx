import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PropTypes from "prop-types"; // Import PropTypes


export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/" />;
}
// Add prop validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };