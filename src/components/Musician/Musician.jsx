import React from "react";
import { Link } from "react-router-dom";

function Musician({ details, admin, handleClick }) {
  return (
    <div>
      <Link to={`/${admin}/musician/${details.name}`} onClick={handleClick}>
        <img src={details.avatar} alt={details.name} width="100px" />
      </Link>
      <div>
        <h5>{details.name}</h5>
        <p>{details.description}</p>
      </div>
    </div>
  );
}

export default Musician;
