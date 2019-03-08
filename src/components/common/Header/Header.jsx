import React from "react";

function Header({ headerInfo }) {
  return (
    <div>
      <img src={headerInfo.imageURL} alt={headerInfo.title} width="50%" />
      <h1>{headerInfo.title}</h1>
      <h5>{headerInfo.description}</h5>
      <h2>{headerInfo.dates}</h2>
    </div>
  );
}

export default Header;
