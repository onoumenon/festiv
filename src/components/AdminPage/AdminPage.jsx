import React, { Component } from "react";
import MusiciansTable from "../MusiciansTable/MusiciansTable";
import EventCalendar from "../EventCalendar/EventCalendar";

export class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center mx-auto w-75">
          <MusiciansTable admin="admin" />
          <EventCalendar />
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPage;
