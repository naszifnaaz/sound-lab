import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import SignUpForm from "../components/auth/SignUpForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const navigate = useNavigate();
  if (isLoggedIn) navigate("/");
  return (
    <>
      <NavBar />
      <SignUpForm />
      <Footer />
    </>
  );
};
