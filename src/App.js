import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import MyRoutes from "./services/MyRoutes";
import { instance } from "./api/Axios";
import Interceptor from "./services/Interceptor";
import { Toaster } from "react-hot-toast";
function App() {
  
  const { token } = useSelector((state) => {
    return state.user;
  });
  // console.log("line 17, token from state.user",token)
  instance.defaults.headers.common['Authorization'] = token || "";
  // setupDefaultsHeader(token)

  // useEffect(() => {
  //   (async() => {

  //     await instance.get('/')

  //   })()
  // }, [])

  // console.log("Auth token ", token);

  return (
    <div className="App">
      <Interceptor/>
      <Toaster />
      {/* <Signup/> */}
      <MyRoutes />
    </div>
  );
}

export default App;
