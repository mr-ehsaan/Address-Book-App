import axios from "axios";
axios.defaults.baseURL = "https://randomuser.me/api/";

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
  let res = await axios.get(`${url}`);
  //   console.log("Dasta in Generic > ", res.data);
  return res;
}

export async function Post(url, data) {
  let res = axios.post(`${url}`, data);
  return res;
}

export function Delete(url) {
  let res = axios.delete(`${url}`);
  return res;
}
export function put(url, data) {
  let res = axios.put(`${url}`, data);
  return res;
}
