import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Signup from "../src/components/pages/signup/Signup";
import Signin from "../src/components/pages/signin/Signin";
import Home from "./components/pages/Home/Home";
import Profile from './components/pages/profile/Profile'
function App() {
  return (
    <div className="App">
      {/* <Signup/> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
