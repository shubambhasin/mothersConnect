import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFollowing } from "../../../features/posts/postSlice";
import CustomSkeleton from "../../../services/Skeleton";
import FollowerCard from "../../FollowerCard/FollowerCard";
import "./follow.css";
const Following = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollowing());
  }, []);

  const user = useSelector((state) => state.posts);

  return (
    <div className="follow container global-shadow">
      <div className="follow-container flex flex-col">
       <div className="flex jcsb aic p1-rem">
       <h1 className="h3">
         Following
        </h1>
        <NavLink to="/profile" className="">Go Back</NavLink>
       </div>
        <hr className="hr-grey" />
        <div className="">
          {user.status === "loading" && (
            <>
              <CustomSkeleton
                padding="p1-rem"
                type="bar"
                count="2"
                color="#eeeeee"
                highlightColor="#000000"
              />
              <br />
              <CustomSkeleton
                padding="p1-rem"
                type="bar"
                count="2"
                color="#eeeeee"
                highlightColor="#000000"
              />
            </>
          )}
          {user.status === "success" &&
            user.userInfo.users[0].following.map((user) => {
              return (
                <>
                  <FollowerCard user={user} />
                  <hr className="hr-grey" />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Following;
