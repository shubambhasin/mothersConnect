import React from "react";

const FollowerCard = ({ user }) => {
  return (
    <div>
      <div className="p1-rem">
        <span className="">
          <h1 className="h4 bold">{user.name}</h1>
          <small className="f-grey">@{user.name}</small>
        </span>
      </div>
    </div>
  );
};

export default FollowerCard;
