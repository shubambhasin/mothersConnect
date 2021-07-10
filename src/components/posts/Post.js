import React from "react";
import "./post.css";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { updateLikes } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";
const Post = ({ username, data }) => {
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
          <div className="">
            {" "}
            <h1 className="h4 bold">{data.userId.name}</h1>
            <h1 className="h5 bold">{username}</h1>
          </div>
        </div>
        <div className="post-content">{data.post}</div>
        <div className="flex mt1-rem jcsa" id="interactions">
          <div className="flex jcc aic">
            <span>{data.likes.length}</span>
            <button
              className="btn flex gap-1 jcc aic"
              onClick={() => dispatch(updateLikes(data))}
            >
             {data.likes.includes(data.userId._id) ? <FcLike size={28}/> : <BsHeart size={20} />}
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

export default Post;
