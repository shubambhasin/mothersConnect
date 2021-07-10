import React from "react";
import "./peopleCard.css";
const PeopleCard = ({name, userId}) => {
  return (
    <div>
      <div className="flex jcsb">
        <h1 className="h4 bold">{name}</h1>
        <button className="btn">Follow</button>
      </div>
    </div>
  );
};

export default PeopleCard;
