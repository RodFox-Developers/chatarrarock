import { Navigate } from "react-router-dom";
import Auth from "../components/Auth";
import useAuth from "../hooks/useAuth";

const AuthPage = () => {
  const authUser = useAuth();
  return authUser ? <Navigate to="/admin" /> : <Auth />;
};

export default AuthPage;
