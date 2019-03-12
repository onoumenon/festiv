import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import { getMusician, getMusicians } from "../../services/musicianService";
import { isAdmin } from "./../../services/adminService";
import { getDays } from "./../../services/daysService";
import Musician from "./../Musician/Musician";
import MusicianColumn from "./MusicianColumn";

export default function MusiciansTable({ admin, musicians }) {
  const allDays = getDays();
  let allMusicians = getMusicians();
  console.log(musicians);

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
              {allMusicians.map(musician => (
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
              <React.Fragment key={day._id}>
                <MusicianColumn day={day} />
              </React.Fragment>
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
