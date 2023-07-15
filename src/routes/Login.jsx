import { Footer } from "../components/Footer";
import LoginForm from "../components/auth/LoginForm";
import { NavBar } from "../components/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const isLoggedIn = useSelector((store) => store.isLoggedIn);
  const navigate = useNavigate();
  if (isLoggedIn) navigate("/");
  return (
    <>
      <NavBar />
      <LoginForm />
      <Footer />
    </>
  );
};
