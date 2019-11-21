import axios from "axios";
import getCookie from "./getCookie";

export default function() {
  return axios.create({
    headers: { Authorization: getCookie("Authorization") }
  });
}
