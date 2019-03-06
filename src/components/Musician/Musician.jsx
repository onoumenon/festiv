import React from "react";
import { Link } from "react-router-dom";

function Musician({ details, admin }) {
  return (
    <div>
      <Link to={`/${admin}/musician/${details._id}`}>
        <img src={details.avatar} alt={details.name} width="100px" />
      </Link>
      <div>
        <h5>{details.name}</h5>
        <p>{details.description}</p>
        <h6>{details.time}</h6>
      </div>
    </div>
  );
}

export default Musician;
