import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { getMusicianByName } from "../../services/musicianService";
import {
  filterDay,
  returnDateOnly,
  returnDayOfWeek
} from "./../../services/daysService";
import Musician from "./../Musician/Musician";

function MusicianColumn({ day }) {
  return (
    <Card
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
        {filterDay(day.date).map(event => (
          <div key={event.title}>
            <Musician details={getMusicianByName(event.title)} />
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

export default MusicianColumn;
