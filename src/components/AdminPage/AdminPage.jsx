import React from "react";
import MusiciansTable from "../MusiciansTable/MusiciansTable";
import EventCalendar from "../EventCalendar/EventCalendar";

function AdminPage({ musicians }) {
  return (
    <React.Fragment>
      <div className="text-center mx-auto w-75" data-testid="admin-page">
        <MusiciansTable musicians={musicians} admin="admin" />
        <EventCalendar musicians={musicians} />
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
