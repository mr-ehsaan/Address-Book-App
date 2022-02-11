import { Get } from "./GenericServices";
import { toast } from "react-toastify";
export default async function getUsers(url) {
  console.log("URL is > ", process.env);
  let data = await Get(`${url}`);
  console.log("Data in Specific ", data);
  try {
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
