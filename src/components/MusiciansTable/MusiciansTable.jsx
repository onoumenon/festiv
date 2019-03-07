import React from "react";
import Musician from "./../Musician/Musician";
import { getEvents } from "./../../services/eventsService";
import { getDays } from "./../../services/daysService";
import { getMusician, getMusicians } from "../../services/musicianService";
import { isAdmin } from "./../../services/adminService";

function MusiciansTable({ admin, handleClick }) {
  const events = getEvents();
  const allMuscians = getMusicians();
  const filterDay = Day => {
    return events.filter(event => event.start.getDay() === Day.getDay());
  };
  const Days = getDays();

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
      return Days.map(day => {
        return filterDay(day.date).map(event => (
          <div key={event._id}>
            <Musician
              details={getMusician(event.title)}
              admin={isAdmin(admin)}
              handleClick={handleClick}
            />
          </div>
        ));
      });
    }
  }

  return <div>{returnTable(admin)}</div>;
}

export default MusiciansTable;
