import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./Musician.css";

export default class Musician extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { details, admin } = this.props;
    return (
      <div className="text-center" style={{ width: "15rem" }}>
        <div className="avatar mx-auto">
          <Link to={`/${admin}/musicians/${details.name}`}>
            <img
              id="Popover"
              src={details.avatar}
              alt={details.name}
              className="rounded-circle img-fluid"
            />
          </Link>
        </div>
        <div className="card-text">
          <p className="text-uppercase mb-4">{details.name}</p>
        </div>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover"
          toggle={this.toggle}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>{details.description}</PopoverBody>
        </Popover>
      </div>
    );
  }
}
