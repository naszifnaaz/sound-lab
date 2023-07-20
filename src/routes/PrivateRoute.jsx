import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PrivateRoute = ({ children }) => {
  const isAdmin = useSelector((store) => store.isAdmin);

  if (isAdmin) return children;

  toast("Not Authorized!");
  return <ToastContainer />;
};
