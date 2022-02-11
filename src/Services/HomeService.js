import { Get } from "./GenericServices";
import { toast } from "react-toastify";
export default async function getUsers(url) {
  console.log("URL is > ", process.env);
  let data = await Get(`${url}`);
  console.log("Data in Specific ", data);

  return data;
}
