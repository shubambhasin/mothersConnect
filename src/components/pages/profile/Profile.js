import React from "react";
import "./profile.css";
import styled from 'styled-components'
const StyledButton = styled.button`

background: green;
color: white;
font-size: larger;
border: 1px solid black
`
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container flex flex-col jcc aic">
        {" "}
        <div>Cover Photo</div>
        <div>Profile Photo</div>
        <div>
          <p>Name</p>
          <small>Bio</small>
        </div>
        <div className="flex">
          <div>Friends and all other information</div>
          <div>
              <StyledButton>Create</StyledButton>
            <div>Whats in your mind</div>
            <div>all posts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
