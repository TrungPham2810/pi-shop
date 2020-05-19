import qs from "query-string";
import axiosService from "../commons/axiosService";
import { API_URL } from "../constants/index";

const url = "products";
// http://localhost/pishop/api/products    GET
export const getList = (params = []) => {
  let urlParams = "";
  if (Object.keys(params).length > 0) {
    urlParams = `${qs.stringify(params)}`;
  }

  // console.log(`${API_URL}/${url}/filter/${urlParams}`);
  // console.log(params);

  if (urlParams != "") {
    return axiosService.get(`${API_URL}/${url}/filter/${urlParams}`);
  }
  return axiosService.get(`${API_URL}/${url}`);
};
// http://localhost/pishop/api/products      POST
export const addProduct = (data) => {
  return axiosService.post(`${API_URL}/${url}`, data);
};

// http://localhost/pishop/api/products/id     PUT
export const updateProduct = (data, productId) => {
  return axiosService.put(`${API_URL}/${url}/${productId}`, data);
};

// http://localhost/pishop/api/products/id     Delete
export const deleteProduct = (productId) => {
  return axiosService.delete(`${API_URL}/${url}/${productId}`);
};
