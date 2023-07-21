import axios from "axios";
const BASE_API = "http://localhost:8080";

const getUsers = async () => {
  return await axios.get(`${BASE_API}/users`);
};

export default {
  getUsers,
};
