import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import AdminDashboard from "../components/admin/AdminDashboard";
import { useNavigate  } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AlertsBanner from "../components/shared/AlertsBanner";

const AdminDashboardPage = () => {
  const authUser = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return authUser ? (
      <AdminDashboard authUser={authUser} logOut={logOut} />
  ) : (
    <AlertsBanner
      msg="You are not authorized to see this page, please Log In"
      type="danger"
      url="login"
    />
  );
};

export default AdminDashboardPage;
