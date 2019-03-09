import React from "react";
import { uniq } from "lodash";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import { filterEvents, sortEvents } from "./../../services/eventsService";
import { getDays } from "../../services/daysService";

function TicketCard() {
  const eventDays = getDays();

  const displayMuscians = day => {
    const foundMusicians = filterEvents(day);
    const musicianNames = [];
    foundMusicians.map(musician => musicianNames.push(musician.title));
    const uniqueMusicians = uniq(musicianNames);

    const firstEvent = sortEvents(foundMusicians)[0];

    return (
      <div className="d-flex justify-content-start">
        <div style={{ width: "5rem" }} className="mb-2">
          <img
            className="m-2"
            src="images/icons/microphone.png"
            width="18px"
            alt="musicians"
          />
          {uniqueMusicians.map((musician, i) => (
            <p key={i}>{musician}</p>
          ))}
        </div>
        <div style={{ width: "5rem" }} className="ml-2">
          <img
            className="m-2"
            src="images/icons/clock.png"
            width="18px"
            alt="time"
          />

          <p>
            Door opens an hour early at
            {` ${("0" + (firstEvent.start.getHours() - 1)).slice(-2)}:${(
              "0" + firstEvent.start.getMinutes()
            ).slice(-2)}`}
          </p>
        </div>
      </div>
    );
  };

  return eventDays.map(day => {
    return (
      <Card key={day._id} className="tixcard mb-5" style={{ width: "18rem" }}>
        <CardBody>
          <CardTitle tag="h3">{`${day.date}`}</CardTitle>
          <CardTitle tag="h3">{`${day.price}`}SGD</CardTitle>
          <hr />

          {displayMuscians(day.date)}

          <Link className="btn btn-info m-1" to={`/tickets/${day._id}`}>
            Book Now ▶
          </Link>
        </CardBody>
      </Card>
    );
  });
}

export default TicketCard;
