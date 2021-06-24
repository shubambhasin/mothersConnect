import React from "react";
import "./createPost.css";
import { CgClose } from "react-icons/cg";
import { CloseBtn } from "../../components/styledComponent/styledbutton";
const CreatePost = () => {
  return (
    <div className="createpost ">
      <div className="createpost-container  ">
        <div className="flex jcc mb1-rem">
          <h1 className="h3 mt05-rem">Create Post</h1>          
          <CloseBtn>
            <CgClose />
          </CloseBtn>
        </div>
        <hr />
        <div className="flex flex-col p1-rem">
          <div className="flex gap-1 w-100">
            <span>
              <img
                src="https://react.semantic-ui.com/images/avatar/large/helen.jpg"
                alt="profile-avatar"
                className="responsive global-avatar"
              />
            </span>
            <small className="createpost-username bold small f-grey">
              Shubam Bhasin
            </small>
          </div>

          {/* //TODO: loaders on submit */}
          <form>
            <div className="createpost-area mt05-rem">
              <textarea placeholder="What is in your mind ?"></textarea>
            </div>
            <div>
              <button className="btn btn-lg w-100 btn-blue">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
