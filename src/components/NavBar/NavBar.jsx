import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Festiv</Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/tickets">
            Tickets
          </NavLink>
          <NavLink className="nav-item nav-link" to="/events">
            Events
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
