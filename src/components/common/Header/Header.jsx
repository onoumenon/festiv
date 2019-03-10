import React from "react";
import { Jumbotron, Button } from "reactstrap";

function Header({ headerInfo }) {
  return (
    <div>
      <Jumbotron
        className="jumbotron w-85 p-4-5 m-5 mx-auto"
        style={{
          backgroundImage: `url(${headerInfo.imageURL})`
        }}
      >
        <div className="text-center text-white">
          <h1 className="display-3 butler">{headerInfo.title}</h1>
          <h4 className="lead text-uppercase">{headerInfo.description}</h4>

          <p className="lead">
            <Button color="info">Learn More</Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Header;
