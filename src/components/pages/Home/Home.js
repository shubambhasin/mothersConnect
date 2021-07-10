import React, { useEffect } from "react";
import "./Home.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HomePost from "../../homePosts/HomePost";
import { FcGallery, FcShare } from "react-icons/fc";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/user/userSlice";
import { getPostsForHome } from "../../../features/home/homeSlice";
import PeopleCard from "../../peopleCard/PeopleCard";

export const Navbar = styled.div`
  height: 3rem;
  background-color: white;
  margin-bottom: 1rem;
`;
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(getPostsForHome());
  }, []);

  const { token } = useSelector((state) => {
    return state.user;
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  const postsForHome = useSelector((state) => state.home);

  return (
    <div className="home">
      <Navbar className="flex aic jcsa global-shadow">
        <span>Mother connect</span>
        <div className="flex gap-2">
          <NavLink to="/profile" className="btn">
            Profile
          </NavLink>
          <span className="flex jcc aic">
            {!token && (
              <>
                {" "}
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/signin">Signin</NavLink>
              </>
            )}
            {token && (
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </span>
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
            <h1 className="h3">Hello, {user.username}</h1>
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
            <span className="flex flex-col bg-white br10px p1-rem global-shadow friends-to-follow bold t-grey-7 ">
              <span className="mtb1-rem">People you can follow</span>
              <PeopleCard name="Shubam bhasin" />
            </span>
          </div>
        </div>
        <div className="post-display">
          <div className="post-display-container">
            {/* <Post username={user.username} postText="Test post " />
            <Post username={user.username} postText="Test post " />
            <Post username={user.username} postText="Test post " /> */}
            {postsForHome.posts.map((post) => {
              return (
                <HomePost
                  key={post._id}
                  username={post.userId.username}
                  data={post}
                  author={post.userId.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
