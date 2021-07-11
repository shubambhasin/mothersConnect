import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import MyRoutes from "./services/MyRoutes";
import { instance } from "./api/Axios";
import Interceptor from "./services/Interceptor";
import { Toaster } from "react-hot-toast";
import MyNavbar from "./components/Navbar/Navbar";

function App() {
  
  const { token } = useSelector((state) => {
    return state.user;
  });
  instance.defaults.headers.common['Authorization'] = token || "";
  return (
    <div className="App">
      <Interceptor/>
      <MyNavbar/>
      <Toaster />
      {/* <Signup/> */}
      <MyRoutes />
    </div>
  );
}

export default App;
