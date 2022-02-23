import { Get } from "./GenericServices";

export default async function getUsers(url) {
  let data = await Get(`${url}`);
  console.log("Data in Specific ", data);

  return data;
}
