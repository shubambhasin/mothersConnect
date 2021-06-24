import React from "react";
import "./post.css";
import { BsHeart } from "react-icons/bs";
import { FaRegComment, FaRegShareSquare } from "react-icons/fa";
const Post = () => {
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
          <h1 className="h5 bold">Test User</h1>
        </div>
        <div className="post-content">
          Hey this is the first dummy post here Hey this is the first dummy post
          here Hey this is the first dummy post here Hey this is the first dummy
          post here Hey this is the first dummy post here
        </div>
        <div className="flex mt1-rem jcsa" id="interactions">
          <span className="flex gap-1 jcc aic">
            <BsHeart size={20} />
            Like
          </span>
          <span className="flex gap-1 jcc aic">
            <FaRegComment size={20} />
            Comment
          </span>
          <span className="flex gap-1 jcc aic">
            <FaRegShareSquare size={20} />
            Share
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
