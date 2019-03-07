import React from "react";
import Musician from "./../Musician/Musician";
import { getEvents } from "./../../services/eventsService";
import { getDays } from "./../../services/daysService";
import { getMusician } from "../../services/musicianService";
import { isAdmin } from "./../../services/adminService";

function MusiciansTable({ admin }) {
  const events = getEvents();
  const filterDay = Day => {
    return events.filter(event => event.start.getDay() === Day.getDay());
  };
  const Days = getDays();

  function handleClick(event) {
    console.log(event.target.alt);
  }

  return (
    <div>
      {Days.map(day => {
        return filterDay(day.date).map(event => (
          <div key={event._id}>
            <Musician
              details={getMusician(event.title)}
              admin={isAdmin(admin)}
              handleClick={handleClick}
            />
          </div>
        ));
      })}
    </div>
  );
}

export default MusiciansTable;
