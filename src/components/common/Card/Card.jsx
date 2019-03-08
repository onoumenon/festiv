import React from "react";

function Card({ top, bottom }) {
  return (
    <div>
      <h3>{top}</h3>
      {bottom}
    </div>
  );
}

export default Card;
