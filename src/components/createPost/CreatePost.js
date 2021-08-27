import React, { useState } from "react";
import "./createPost.css";
import { CgClose } from "react-icons/cg";
import { CloseBtn } from "../../components/styledComponent/styledbutton";
import { useDispatch, useSelector } from "react-redux";
import { sendPost } from "../../features/posts/postSlice";
import { hideModal, toggleModal } from "../../features/modal/modalSlice";
import { notify } from "../../services/notification";
import avatar from '../../assets/avatar.jpg'
const CreatePost = () => {
  const [post, setPost] = useState({
    post: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
 
  const handlePost = (e) => { 
    setPost({
      post: e.target.value,
    });
  };
  const submitPost = (e) => {
    e.preventDefault();
    if(post.post !== "")
    {
      notify("Adding post ⏳")
    dispatch(sendPost(post));
    }
    else{
      notify("Please enter some text first 😅")
    }
  };
  return (
    <div className="createpost ">
      <div className="createpost-container  ">
        <div className="flex jcc mb1-rem">
          <h1 className="h3 mt05-rem">Create Post</h1>
          <CloseBtn onClick={() => dispatch(hideModal())} >
            <CgClose />
          </CloseBtn>
        </div>
        <hr />
        <div className="flex flex-col p1-rem">
          <div className="flex gap-1 w-100">
            <span>
              <img
                src={avatar}
                alt="profile-avatar"
                className="responsive global-avatar"
              />
            </span>
            <small className="createpost-username bold small f-grey">
              {user.username}
            </small>
          </div>

          {/* //TODO: loaders on submit */}
          <form onSubmit={submitPost}>
            <div className="createpost-area mt05-rem">
              <textarea
                placeholder="What is in your mind ?"
                onChange={handlePost}
                required
              ></textarea>
            </div>
            <div>
              <button
                className="btn btn-lg w-100 btn-blue"
                onClick={submitPost}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
