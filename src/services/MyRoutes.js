import React from "react";
import { Routes, Route } from "react-router";
import Signup from "../components/pages/signup/Signup";
import Signin from "../../src/components/pages/signin/Signin";
import Home from "../components/pages/Home/Home";
import Profile from "../components/pages/profile/Profile";
import {ProtectedRoutes} from "./ProtectedRoutes";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <ProtectedRoutes path="/" exact element={<Home />} />
        <ProtectedRoutes path="/profile/:id" exact element={<Profile />} />
        <ProtectedRoutes path="/profile/" exact element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
