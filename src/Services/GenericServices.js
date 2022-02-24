import axios from "axios";
const basUrl = process.env.BASE_URL;

import { toast } from "react-toastify";
axios.interceptors.response.use((response) => {
  try {
    return response.data;
  } catch (error) {
    return toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
});

export async function Get(url) {
  let res = await axios.get(`${basUrl}${url}`);
  return res;
}

export async function Post(url, data) {
  let res = axios.post(`${basUrl}${url}`, data);
  return res;
}

export function Delete(url) {
  let res = axios.delete(`${basUrl}${url}`);
  return res;
}
export function put(url, data) {
  let res = axios.put(`${basUrl}${url}`, data);
  return res;
}
