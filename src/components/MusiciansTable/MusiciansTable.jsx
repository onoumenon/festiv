import React from "react";
import Musician from "./../Musician/Musician";
import { getMusician, getMusicians } from "../../services/musicianService";
import { isAdmin } from "./../../services/adminService";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { filterDay } from "./../../services/daysService";

function MusiciansTable({ admin, handleClick }) {
  const allMuscians = getMusicians();

  function returnTable(admin) {
    if (admin) {
      return allMuscians.map(musician => (
        <div key={musician._id}>
          <Musician
            details={getMusician(musician.name)}
            admin={isAdmin(admin)}
            handleClick={handleClick}
          />
        </div>
      ));
    } else {
      return (
        <div className="d-flex justify-content-center m-5 ">
          <Card className="m-1" body style={{ maxWidth: "18rem" }}>
            <CardTitle className="butler h2 mt-3">Friday</CardTitle>
            <CardSubtitle>14th June</CardSubtitle>
            <hr color="info" />
            <CardBody>
              {filterDay(new Date("June 14, 2019")).map(event => (
                <div key={event._id}>
                  <Musician
                    details={getMusician(event.title)}
                    admin={isAdmin(admin)}
                    handleClick={handleClick}
                  />
                </div>
              ))}
            </CardBody>
          </Card>
          <Card className="m-1" body style={{ maxWidth: "18rem" }}>
            <CardTitle className="butler h2 mt-3">Saturday</CardTitle>
            <CardSubtitle>15th June</CardSubtitle>
            <hr color="pink" />
            <CardBody>
              {filterDay(new Date("June 15, 2019")).map(event => (
                <div key={event._id}>
                  <Musician
                    details={getMusician(event.title)}
                    admin={isAdmin(admin)}
                    handleClick={handleClick}
                  />
                </div>
              ))}
            </CardBody>
          </Card>
          <Card className="m-1" body style={{ maxWidth: "18rem" }}>
            <CardTitle className="butler h2 mt-3">Sunday</CardTitle>
            <CardSubtitle>16th June</CardSubtitle>
            <hr color="cyan" />
            <CardBody>
              {filterDay(new Date("June 16, 2019")).map(event => (
                <div key={event._id}>
                  <Musician
                    details={getMusician(event.title)}
                    admin={isAdmin(admin)}
                    handleClick={handleClick}
                  />
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      );
    }
  }

  return <div>{returnTable(admin)}</div>;
}

export default MusiciansTable;
