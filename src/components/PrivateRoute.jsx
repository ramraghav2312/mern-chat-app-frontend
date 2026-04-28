import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = null;
  try {
    const currentUser = JSON.parse(localStorage.getItem("userInfo") || "null");
    token = currentUser?.token;
  } catch (error) {
    console.error("Invalid userInfo in localStorage, clearing...", error);
    localStorage.removeItem("userInfo");
  }
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;