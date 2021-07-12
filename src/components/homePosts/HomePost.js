import React from "react";
import "./homePost.css";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateLikes } from "../../features/posts/postSlice";
import { FcLike } from "react-icons/fc";

const HomePost = ({ data }) => {


  const user = useSelector((state) => state.user)
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
        <span >  <h1 className="h4 bold">
            {/* <NavLink
              onClick={useDispatch(getParticularUser(data._id))}
              to={`/users/${data.username}`}
            >
              {data.username}
            </NavLink> */}
            {/* {data.userId.name} */}
            {data.userId.name.charAt(0).toUpperCase() + data.userId.name.slice(1)}

          </h1>
          <h5 className="h5 f-grey">@{data.userId.username}</h5></span>
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
              {data.likes.includes(user._id) ? (
                <FcLike size={28} />
              ) : (
                <BsHeart size={20} />
              )}
              Like
            </button>
          </div>
          {/* <button className="btn flex gap-1 jcc aic">
            <FaRegComment size={20} />
            Comment
          </button> */}
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
