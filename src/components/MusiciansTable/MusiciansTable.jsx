import React from "react";
import { getMusicians } from "./../../services/musicianService";
import Musician from "./../Musician/Musician";

function MusiciansTable({ admin }) {
  const isAdmin = admin => {
    if (admin) {
      return admin;
    } else {
      return "home";
    }
  };
  const musicians = getMusicians();
  const filterDay = Day => {
    return musicians.filter(musician => musician.day === Day);
  };

  return (
    <div>
      {filterDay("Friday").map(musician => (
        <div key={musician._id}>
          <Musician details={musician} admin={isAdmin(admin)} />
        </div>
      ))}
      {filterDay("Saturday").map(musician => (
        <div key={musician._id}>
          <Musician details={musician} admin={isAdmin(admin)} />
        </div>
      ))}
      {filterDay("Sunday").map(musician => (
        <div key={musician._id}>
          <Musician details={musician} admin={isAdmin(admin)} />
        </div>
      ))}
    </div>
  );
}

export default MusiciansTable;
