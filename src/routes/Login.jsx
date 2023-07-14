import { Footer } from "../components/User/Footer";
import LoginForm from "../components/User/Auth/LoginForm";
import { NavBar } from "../components/User/NavBar";

export const Login = () => {
  return (
    <>
      <NavBar />
      <LoginForm />
      <Footer />
    </>
  );
};
