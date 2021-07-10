import axios from "axios";
import { useSelector } from "react-redux";

export const instance = axios.create({
  baseURL: "https://socialmedia-backend.shubambhasin.repl.co",

});

// export const setupDefaultsHeaders = (token) => {


//   if (token) {
//     return (instance.defaults.headers.common["Authorization"] = token);
//   }
//   delete instance.defaults.headers.common["Authorization"];
// };
