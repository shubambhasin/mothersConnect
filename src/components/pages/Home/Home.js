import React, { useEffect } from "react";
import "./Home.css";
import HomePost from "../../homePosts/HomePost";
import { FcGallery, FcShare } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import CustomSkeleton from "../../../services/Skeleton";
import CreatePost from "../../createPost/CreatePost";
import {
  getPostsForHome,
  getUsersToFollow,
} from "../../../features/home/homeSlice";
import PeopleCard from "../../peopleCard/PeopleCard";
import { toggleModal } from "../../../features/modal/modalSlice";
import avatar from '../../../assets/avatar.jpg'
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  const modal = useSelector((state) => state.modal);
  const home = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getPostsForHome());
    dispatch(getUsersToFollow());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home container">
      {modal.showModal && <CreatePost />}
      <div className="main-menu global-shadow">
        <div className="user-info flex aic gap-1">
          <img
            className=""
            src={avatar}
            alt="avatar"
          />
          <div>
            {" "}
            <h1 className="h3">Hello, {user.username}</h1>
            <small> 30 deg 🌞 at akhnoor </small>
          </div>
        </div>

        <div className="create-post" onClick={() => dispatch(toggleModal())}>
          <div
            name="for toggling the modal"
            title="Click to make a post"
            // onClick={toggleCreatePost}
            className="fakebtn create-post-home flex flex-col global-shadow"
          >
            <p className="small t-grey-6">Whats on your mind ?</p>
            <div className="jsfe flex gap-2 jcc aic ">
              <span className="flex jcc aic gap-1">
                <FcGallery size={20} />
                <span>Photo</span>
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
              <span></span>
              {home.status === "loading" && (
                <>
                  <CustomSkeleton
                    type="bar"
                    color="#eeeeee"
                    highlightColor="fff"
                    count={home.user?.length ? home.user.length : 3}
                  />
                </>
              )}
              {home.status === "success" &&
                home.users
                  .filter((data) => data._id !== user._id)
                  // .filter((data) => !data.followers.includes(user._id))
                  .map((user) => {
                    return <PeopleCard key={user._id} data={user} />;
                  })}
            </span>
          </div>
        </div>
        <div className="post-display">
          <div className="post-display-container">
            {home.status === "loading" && (
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
                <p className="m1-rem bg-white"></p>
                <CustomSkeleton
                  type="card"
                  color="#fff"
                  highlightColor="#eeeeee"
                  count="3"
                />
              </>
            )}
            {home.status === "success" &&
              home.posts
                .slice(0)
                .reverse()
                .map((post) => {
                  return (
                    <HomePost
                      key={post._id}
                      username={post.username}
                      data={post}
                      author={post.name}
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
