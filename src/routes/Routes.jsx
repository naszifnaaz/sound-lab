import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp } from "./Signup";
import { Dashboard } from "../components/admin/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { Products } from "../components/admin/Products";
import { Users } from "../components/admin/Users";
import { Orders } from "../components/admin/Orders";
import { Analytics } from "../components/admin/Analytics";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/analytics" element={<Analytics />} />
    </Routes>
  );
};
