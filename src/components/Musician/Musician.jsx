import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import "./Musician.css";

export default class Musician extends React.Component {
  render() {
    const { details, admin } = this.props;
    const handleSession = () => {
      const selectedMusician = JSON.stringify(details);
      sessionStorage.setItem("musicianData", selectedMusician);
    };
    const createLinkIfAdmin = admin => {
      if (admin) {
        return (
          <Link
            to={`/${admin}/musicians/${details._id}`}
            onClick={handleSession}
          >
            <img
              id={`id${details._id}`}
              src={details.avatar}
              alt={details.name}
              className="rounded-circle img-fluid"
            />
          </Link>
        );
      }

      return (
        <div color="link" className="shadow-none mb-1" id={`id${details._id}`}>
          <img
            src={details.avatar}
            alt={details.name}
            className="rounded-circle img-fluid "
          />
        </div>
      );
    };
    return (
      <div className="text-center">
        <div className="avatar mx-auto mb-1">{createLinkIfAdmin(admin)}</div>
        <div className="card-text">
          <p className="text-uppercase mb-3">{details.name}</p>
        </div>
        <UncontrolledPopover
          trigger="hover"
          placement="bottom"
          target={`id${details._id}`}
        >
          <PopoverHeader>{`${details.name}`}</PopoverHeader>
          <PopoverBody>{`${details.description}`}</PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}
