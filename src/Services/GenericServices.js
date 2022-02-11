import axios from "axios";
// axios.defaults.baseURL = "https://randomuser.me/api/";

export async function Get(url) {
  let res = await axios.get(`${process.env.REACT_APP_URL}${url}`);
  console.log("Dasta in Generic > ", res.data);
  return res.data;
}

export async function Post(url, data) {
  let res = axios.post(url, data);
  return res.data;
}

export function Delete(url) {
  let res = axios.delete(url);
  return res.data;
}
export function put(url, data) {
  let res = axios.put(url, data);
  return res.data;
}
