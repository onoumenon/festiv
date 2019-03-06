import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div
        className="ui large top borderless fluid three item  menu"
        id="navbarNavAltMarkup"
      >
        <div className="ui container">
          <div className="item">
            <Link className="ui button" to="/admin">
              Admin Log in
            </Link>
          </div>

          <NavLink className="item butler" to="/home">
            <h2>FESTIV</h2>
          </NavLink>
        </div>
        <div className="ui container item">
          <div className="item">
            <NavLink className="ui button" to="/events">
              LINE UP
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="ui button" to="/tickets">
              TICKETS
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
