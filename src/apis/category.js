import qs from "query-string";
import axiosService from "../commons/axiosService";
import { API_URL } from "../constants/index";

const url = "category";
// http://localhost/pishop/api/category    GET
export const getListCategory = (params = {}) => {
  let urlParams = "";
  if (Object.keys(params).length > 0) {
    urlParams = `?${qs.stringify(params)}`;
  }
  if (urlParams) {
    return axiosService.get(`${API_URL}/${url}/filter/${urlParams}`);
  }
  return axiosService.get(`${API_URL}/${url}`);
};
// http://localhost/pishop/api/category      POST
export const addCategory = (data) => {
  return axiosService.post(`${API_URL}/${url}`, data);
};

// http://localhost/pishop/api/category/id     PUT
export const updateCategory = (data, categoryId) => {
  return axiosService.put(`${API_URL}/${url}/${categoryId}`, data);
};

// http://localhost/pishop/api/category/id     Delete
export const deleteCategory = (categoryId) => {
  return axiosService.delete(`${API_URL}/${url}/${categoryId}`);
};
