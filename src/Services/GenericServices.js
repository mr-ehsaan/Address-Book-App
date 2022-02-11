import axios from "axios";
// axios.defaults.baseURL = "https://randomuser.me/api/";

import { toast } from "react-toastify";
axios.interceptors.response.use((response) => {
  try {
    console.log("interceptor > ", response);
    return response.data;
  } catch (error) {
    console.log("interceptor error > ", error);
    return toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
});

export async function Get(url) {
  let res = await axios.get(`${process.env.REACT_APP_URL}${url}`);
  //   console.log("Dasta in Generic > ", res.data);
  return res;
}

export async function Post(url, data) {
  let res = axios.post(`${process.env.REACT_APP_URL}${url}`, data);
  return res;
}

export function Delete(url) {
  let res = axios.delete(`${process.env.REACT_APP_URL}${url}`);
  return res;
}
export function put(url, data) {
  let res = axios.put(`${process.env.REACT_APP_URL}${url}`, data);
  return res;
}
