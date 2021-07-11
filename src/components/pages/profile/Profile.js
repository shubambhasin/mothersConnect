import React, { useEffect, useState } from "react";
import "./profile.css";
import CreatePost from "../../createPost/CreatePost";
import { FcGallery, FcShare } from "react-icons/fc";
import Post from "../../posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { getFollowing } from "../../../features/posts/postSlice";

import CustomSkeleton from "../../../services/Skeleton";
const Profile = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // dispatch(getPosts());
      dispatch(getFollowing());
    })();
  }, []);

  const user = useSelector((state) => state.user);

  const currentUser = useSelector((state) => state.posts);
  currentUser.status === "loading" && console.log("Posts are getting loaded");

  const toggleCreatePost = () => {
    setShowCreatePost((showCreatePost) => !showCreatePost);
  };
  return (
    <div className="profile container">
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
          <h1 className="h1 user-name">{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h1>
          <span className="bio flex flex-col aic jcc">
            The world is not a fair place to live
            {/* <div className="t-center">Edit</div> */}
          </span>
          <div className="flex gap-2">
            {" "}
            <span className="h4 bold">
              Followers:{" "}
              {currentUser.status === "success" &&
                currentUser.userInfo.users[0].followers.length}
            </span>
            <span className="h4 bold">
              Following:{" "}
              {currentUser.status === "success" &&
                currentUser.userInfo.users[0].following.length}
            </span>
          </div>{" "}
        </div>
        <div className="main-container">
          <div className="friends-info">
            Friends and all other information
            <div className="flex flex-col gap-1">
              {/* TODO: make it a link here */}
              {currentUser.status === "loading" && (
                <p className="t-center m1b1-rem">"Loading..."</p>
              )}
              {currentUser.status === "success" &&
                currentUser.userInfo.users[0].following.map((friend) => {
                  return (
                    <div className="bold" key={friend._id}>

                      {friend.name.charAt(0).toUpperCase() + friend.name.slice(1)}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="posts-display ">
            <div
              name="for toggling the modal"
              title="Click to make a post"
              onClick={toggleCreatePost}
              className="fakebtn create-post flex flex-col global-shadow"
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
              {currentUser.status === "loading" && (
                <>
                  <CustomSkeleton
                    type="card"
                    color="#fff"
                    highlightColor="#eeeeee"
                    count="3"
                  />
                  <p className="m1-rem"></p>
                  <CustomSkeleton
                    type="card"
                    color="#fff"
                    highlightColor="#eeeeee"
                    count="3"
                  />
                </>
              )}
              {currentUser.status === "success" &&
              currentUser.userInfo.posts.length !== 0
                ? currentUser.userInfo.posts.map((post) => {
                    return (
                      <Post
                        key={post._id}
                        username={post.userId.username}
                        data={post}
                      />
                    );
                  })
                : "No posts to show"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
