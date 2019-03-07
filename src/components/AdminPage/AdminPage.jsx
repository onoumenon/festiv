import React, { Component } from "react";
import { Link } from "react-router-dom";
import MusiciansTable from "../MusiciansTable/MusiciansTable";
import EventCalendar from "../EventCalendar/EventCalendar";

export class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/admin/musicians/new">Add New Act</Link>
        </div>
        <div className="row">
          <MusiciansTable admin="admin" />
          <EventCalendar />
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPage;
