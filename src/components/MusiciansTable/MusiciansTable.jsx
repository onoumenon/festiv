import React from "react";
import { Link } from "react-router-dom";
import Musician from "./../Musician/Musician";
import { getMusician, getMusicians } from "../../services/musicianService";
import { isAdmin } from "./../../services/adminService";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { filterDay } from "./../../services/daysService";

function MusiciansTable({ admin, handleClick }) {
  const allMuscians = getMusicians();

  function returnTable(admin) {
    if (admin) {
      return (
        <div>
          <Card className="m-1 border-white">
            <CardTitle className="butler h2 mt-3">MUSICIANS</CardTitle>

            <hr color="secondary" />
            <CardBody className="d-flex flex-row justify-content-between">
              <Link to="/admin/musicians/new">
                <img src="images/musicians/add.png" alt="Add Musician" />
              </Link>
              {allMuscians.map(musician => (
                <div key={musician._id}>
                  <Musician
                    details={getMusician(musician.name)}
                    admin={isAdmin(admin)}
                    handleClick={handleClick}
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
            <Card
              className="m-1 border-white shadow"
              body
              style={{ maxWidth: "18rem" }}
            >
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
            <Card
              className="m-1 border-white shadow"
              body
              style={{ maxWidth: "18rem" }}
            >
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
            <Card
              className="m-1 border-white shadow"
              body
              style={{ maxWidth: "18rem" }}
            >
              <CardTitle className="butler h2 mt-3">Sunday</CardTitle>
              <CardSubtitle>16th June</CardSubtitle>
              <hr color="secondary" />
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
          <Button className="mb-5 mt-3" color="primary">
            Buy Tickets
          </Button>
        </div>
      );
    }
  }

  return <div>{returnTable(admin)}</div>;
}

export default MusiciansTable;
