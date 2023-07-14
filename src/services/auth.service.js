import axios from "axios";

const BASE_API = "http://localhost:8080";

const register = async (user) => {
  return axios.post(`${BASE_API}/signup`, user);
};

const login = (user) => {
  return axios.post(`${BASE_API}/signin`, user).then((res) => {
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  });
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
