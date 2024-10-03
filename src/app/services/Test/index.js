import axios from "axios";
import { API } from "@api";
import { handleRequest } from "../base";

function getAll(params) {
  return handleRequest(axios.get(`${API.TEST}`, { params }));
}

function add(data) {
  return handleRequest(axios.post(`${API.TEST}`, data));
}

function delById(id) {
  return handleRequest(axios.delete(`${API.TEST_ID.format(id)}`));
}

function updateById(id, data) {
  return handleRequest(axios.put(`${API.TEST_ID.format(id)}`, data));
}

export { add, getAll, delById, updateById };