import React from "react";
import "./homePost.css";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getParticularUser } from "../../features/whoToFollow/allUserSlice";
import { useDispatch } from "react-redux";
import { updateLikes } from "../../features/posts/postSlice";
import { FcLike } from "react-icons/fc";

const HomePost = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="post ">
      <div className="post-container global-shadow  m1-rem">
        <div className="flex gap-1">
          {" "}
          <img
            src="https://react.semantic-ui.com/images/avatar/large/helen.jpg"
            alt="profile-avatar"
            className="responsive global-avatar"
          />
          <h1 className="h5 bold">
            <NavLink
              onClick={useDispatch(getParticularUser(data.userId._id))}
              to={`/profile/${data.userId.username}`}
            >
              {data.userId.username}
            </NavLink>
          </h1>
        </div>
        <div className="post-content">
          {data.post}
          {/* <img src={data.post[data.post.length - 1].imageUrl} alt="pics" /> */}
          {/* {data.post[data.post.length - 1].imageUrl === "" ? "" : (
            <img src={data.post[data.post.length - 1].imageUrl} alt="pics" />
          )} */}
        </div>
        <div className="flex mt1-rem jcsa" id="interactions">
          <div className="flex aic jcc">
            <span>{data.likes.length} </span>
            <button
              className="btn flex gap-1 jcc aic"
              onClick={() => dispatch(updateLikes(data))}
            >
              {data.likes.includes(data.userId._id) ? (
                <FcLike size={28} />
              ) : (
                <BsHeart size={20} />
              )}
              Like
            </button>
          </div>
          <button className="btn flex gap-1 jcc aic">
            <FaRegComment size={20} />
            Comment
          </button>
          {/* <button className="btn flex gap-1 jcc aic">
            <FaRegShareSquare size={20} />
            Share
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HomePost;
