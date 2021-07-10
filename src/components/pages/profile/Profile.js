import React, { useEffect, useState } from "react";
import "./profile.css";
import CreatePost from "../../createPost/CreatePost";
import { FcGallery, FcShare } from "react-icons/fc";
import Post from "../../posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../features/posts/postSlice";
import { useParams } from "react-router";
import { notify } from "../../../services/notification";
// import { getParticularUser } from "../../../features/whoToFollow/allUserSlice";

const Profile = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    notify("Hello")

  }, []);
  const { id } = useParams();
  console.log(id);
  // useDispatch(getParticularUser(id))

  const particularUser = useSelector((state) => state.allUser);
  console.log(particularUser);

  const user = useSelector((state) => state.user);
  const currentUserPosts = useSelector((state) => state.posts);
  currentUserPosts.status === "loading" &&
    console.log("Posts are getting loaded");
  currentUserPosts.status === "success" && console.log(currentUserPosts.posts);

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
          <h1 className="h1 user-name">{user.username}</h1>
          <span className="bio flex flex-col aic jcc">
            The world is not a fair place to live
            <div className="t-center">Edit</div>
          </span>
        </div>
        <div className="main-container">
          <div className="friends-info">Friends and all other information</div>
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
              {currentUserPosts.status === "loading" && (
                <p className="t-center m1b1-rem">"Loading..."</p>
              )}
              {currentUserPosts.status === "success" &&
              currentUserPosts.posts.length !== 0
                ? currentUserPosts.posts.map((post) => {
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
