import axios from "axios";
const BASE_API = "http://localhost:8080";

const register = async (user) => {
  return await axios.post(`${BASE_API}/register`, user);
};

const login = async (user) => {
  return await axios.post(`${BASE_API}/login`, user);
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
