import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "./NavBar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <form className="form-inline my-2 my-sm-0">
                <button
                  className="btn btn-outline-white shadow-none my-2 my-sm-0"
                  type="submit"
                  style={{ position: "relative", top: "4px" }}
                >
                  <h4>⌕</h4>
                </button>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </NavItem>
          </Nav>
          <Nav>
            <NavbarBrand className="butler navlogo" href="/">
              <h1> FESTIV</h1>
            </NavbarBrand>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="btn btn-primary" to="/admin">
                  Admin
                </NavLink>

                <NavLink className="btn btn-danger ml-2" to="/tickets">
                  Tickets
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}
