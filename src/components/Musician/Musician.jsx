import React from "react";
import { Link } from "react-router-dom";

function Musician({ details, admin }) {
  return (
    <div>
      <Link to={`/${admin}/musicians/${details.name}`}>
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
