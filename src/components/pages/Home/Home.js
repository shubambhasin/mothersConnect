import React from "react";
import "./Home.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Post from "../../posts/Post";
import { FcGallery, FcShare } from "react-icons/fc";

export const Navbar = styled.div`
  height: 3rem;
  background-color: white;
  margin-bottom: 1rem;
`;
const Home = () => {
  return (
    <div className="home">
      <Navbar className="flex aic jcsa global-shadow">
        <span>Mother connect</span>
        <div className="flex gap-2">
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/signin">Signin</NavLink>
        </div>
      </Navbar>
      <div className="main-menu global-shadow">
        <div className="user-info flex aic gap-1">
          <img
            className=""
            src="https://react.semantic-ui.com/images/avatar/large/helen.jpg"
            alt="avatar"
          />
          <div>
            {" "}
            <h1 className="h3">Hello,Test User</h1>
            <small> 30 deg 🌞 at akhnoor </small>
          </div>
        </div>

        <div className="create-post">
          <div
            name="for toggling the modal"
            title="Click to make a post"
            // onClick={toggleCreatePost}
            className="fakebtn create-post-home flex flex-col global-shadow"
          >
            <p className="small t-grey-6">Whats in your mind</p>
            <div className="jsfe flex gap-2 jcc aic ">
              <span className="flex jcc aic gap-1">
                <FcGallery size={20} />
                <span>Photo</span>
              </span>
              <span className="flex jcc aic gap-1">
                <FcShare size={20} /> <span>Life Event</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container global-shadow">
        <div className="follow-more">
          <div className="follow-more-container p1-rem">
            <span className="bg-white br10px p1-rem global-shadow friends-to-follow bold t-grey-7 ">
              People you can follow
            </span>
          </div>
        </div>
        <div className="post-display">
          <div className="post-display-container">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
