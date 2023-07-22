import axios from "axios";
const BASE_API = "http://localhost:8080";

const getUsers = async () => {
  return await axios.get(`${BASE_API}/users`);
};

const changeUserRole = async (id, role) => {
  return await axios.patch(`${BASE_API}/users/${id}`, { role });
};

const deactivateUser = async (id) => {
  return await axios.delete(`${BASE_API}/users/${id}`);
};

export default {
  getUsers,
  deactivateUser,
  changeUserRole,
};
