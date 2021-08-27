import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFollow } from "../../features/home/homeSlice";
import "./peopleCard.css";
const PeopleCard = ({ data }) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleFollow = () => {
    console.log(data);
    dispatch(updateFollow(data));
  };
  return (
    <div>
      <div className="flex jcsb aic m1-rem">
        <h1 className="h4 bold">
          {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
        </h1>
        <button className="btn btn-outline" onClick={handleFollow}>
          {/* {data.followers.length !== 0
            ? data.followers[0]._id === user._id
              ? "Unfollow"
              : "follow"
            : "follow"} */}
          {data.followers.includes(user._id) ? "Unfollow" : "follow"}
        </button>
      </div>
    </div>
  );
};

export default PeopleCard;
