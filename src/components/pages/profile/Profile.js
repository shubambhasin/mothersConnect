import React, { useState } from "react";
import "./profile.css";
import styled from "styled-components";
import CreatePost from "../../createPost/CreatePost";
import { FcStackOfPhotos, FcGallery, FcShare } from "react-icons/fc";
import Post from "../../posts/Post";

const StyledButton = styled.button`
  background: green;
  color: white;
  font-size: larger;
  border: 1px solid black;
`;
const Profile = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const toggleCreatePost = () => {
    setShowCreatePost((showCreatePost) => !showCreatePost);
  };
  return (
    <div className="profile">
      {showCreatePost && <CreatePost />}
      <div className="profile-container flex flex-col jcc aic">
        {" "}
        <div className="cover">
          {/* TODO: cover */}
          <img
            className="cover responsive"
            src="https://1.bp.blogspot.com/-EM5iEMIlwt8/YA5zwaJQMXI/AAAAAAAAEpY/kuBD1ISPB58BP1NJD2VM2vtCHe5WBlHAgCLcBGAsYHQ/s851/Attitude-facebook-cover-photo%2B%25281%2529.jpg"
            alt="cover"
          />
        </div>
        <div className="profile-photo-container">
          <img
            className="responsive avtr-circle profile-photo"
            src="https://react.semantic-ui.com/images/avatar/large/helen.jpg"
            alt="profile-avatar"
          />
        </div>
        <div className="user-info-container flex jcc aic flex-col">
          <h1 className="h1 user-name">Test User</h1>
          <span className="bio flex flex-col aic jcc">
            The world is not a fair place to live
            <div className="t-center">Edit</div>
          </span>
        </div>
        <div className="main-container">
          <div className="friends-info">Friends and all other information</div>
          <div className="posts-display">
            <div
              name="for toggling the modal"
              title="Click to make a post"
              onClick={toggleCreatePost}
              className="fakebtn create-post flex flex-col"
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
            <div>
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
