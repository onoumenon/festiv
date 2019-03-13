import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { getMusician, filterMusicians } from "../../services/musicianService";
import { isAdmin } from "./../../services/adminService";
import {
  getDays,
  returnDateOnly,
  returnDayOfWeek
} from "./../../services/daysService";
import Musician from "./../Musician/Musician";

export default function MusiciansTable({ admin, musicians, events }) {
  const allDays = getDays();

  const returnTable = admin => {
    if (admin) {
      return (
        <div>
          <Card className="mt-3 btn border-white container">
            <Link to="/admin/musicians/new">
              <img src="images/musicians/add.png" alt="Add Musician" />
            </Link>
            <CardTitle className="butler h2 mt-3">MUSICIANS</CardTitle>

            <hr color="secondary" />
            <CardBody className="d-flex align-content-center flex-wrap">
              {musicians.map(musician => (
                <div key={musician._id}>
                  <Musician
                    details={getMusician(musician._id)}
                    admin={isAdmin(admin)}
                  />
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="butler">MUSICIANS</h1>
          <hr width="50px" color="secondary" />
          <div className="d-flex justify-content-center  ">
            {allDays.map(day => (
              <Card
                key={day._id}
                className="m-1 border-white shadow"
                body
                style={{ maxWidth: "18rem" }}
              >
                <CardTitle className="butler h2 mt-3">{`${returnDayOfWeek(
                  day.date
                )}`}</CardTitle>
                <CardSubtitle>{`${returnDateOnly(day.date)}`}</CardSubtitle>
                <hr color="info" />
                <CardBody>
                  {filterMusicians(day, events).map((musician, index) => (
                    <div key={index}>
                      <Musician details={musician} />
                    </div>
                  ))}
                </CardBody>
              </Card>
            ))}
          </div>
          <Link className="btn btn-danger ml-2 mb-5 mt-3" to="/tickets">
            Buy Tickets
          </Link>
        </div>
      );
    }
  };

  return <div>{returnTable(admin)}</div>;
}
