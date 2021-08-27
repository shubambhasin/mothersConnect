import React from "react";
import { Routes, Route } from "react-router";
import Signup from "../components/pages/signup/Signup";
import Signin from "../../src/components/pages/signin/Signin";
import Home from "../components/pages/Home/Home";
import Profile from "../components/pages/profile/Profile";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Followers from "../components/pages/follow/Followers";
import Following from "../components/pages/follow/Following";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <ProtectedRoutes path="/" exact element={<Home />} />
        <ProtectedRoutes path="/profile/:id" exact element={<Profile />} />
        <ProtectedRoutes path="/profile/" exact element={<Profile />} />
        <ProtectedRoutes path="/followers">
          <Followers />
        </ProtectedRoutes>
        <ProtectedRoutes path="/following">
          <Following />
        </ProtectedRoutes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
