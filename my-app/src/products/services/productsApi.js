import axios from "axios";

const endpoint = "http://localhost:3006/products/";

const getAll = () => {
  return axios.get(endpoint).then((response) => response.data);
};

const getById = (id) => {
  return axios.get(`${endpoint}/${id}`).then((response) => response.data);
};

const save = (productData) => {
  if (productData.id === 0) {
    return axios.post(endpoint, productData).then((response) => response.data);
  } else {
    return axios
      .put(`${endpoint}/${productData.id}`, productData)
      .then((response) => response.data);
  }
};

const remove = (productData) => {
  return axios
    .delete(`${endpoint}/${productData.id}`)
    .then((response) => response.data);
};

export default {
  getAll,
  getById,
  save,
  remove,
};
