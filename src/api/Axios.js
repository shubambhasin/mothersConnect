import axios from "axios";
export const instance = axios.create({
  baseURL: "https://socialmedia-backend.shubambhasin.repl.co",
});
