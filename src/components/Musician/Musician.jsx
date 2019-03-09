import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";
import "./Musician.css";

export default class Musician extends React.Component {
  render() {
    const { details, admin } = this.props;
    const createLinkIfAdmin = admin => {
      if (admin) {
        return (
          <Link to={`/${admin}/musicians/${details.name}`}>
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
        <Button
          color="link"
          className="shadow-none "
          size="lg"
          id={`id${details._id}`}
        >
          <img
            src={details.avatar}
            alt={details.name}
            className="rounded-circle img-fluid "
          />
        </Button>
      );
    };
    return (
      <div className="text-center">
        <div className="avatar mx-auto">{createLinkIfAdmin(admin)}</div>
        <div className="card-text">
          <p className="text-uppercase mb-4">{details.name}</p>
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
