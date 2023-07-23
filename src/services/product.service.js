import axios from "axios";
const BASE_API = "http://localhost:8080";

export const getProducts = async () => {
  return await axios.get(`${BASE_API}/products`);
};

export const addProduct = async (product) => {
  return await axios.post(`${BASE_API}/products`, product);
};

export const updateProduct = async (id, updatedProduct) => {
  return await axios.patch(`${BASE_API}/products/${id}`, { updatedProduct });
};

export const deleteProduct = async (id) => {
  return axios.delete(`${BASE_API}/products/${id}`);
};

export default {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
