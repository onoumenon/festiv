import React, { Component } from "react";
import { Link } from "react-router-dom";
import MusiciansTable from "../MusiciansTable/MusiciansTable";

class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/musicians/new">Add New Act</Link>
        </div>
        <div className="row">
          <MusiciansTable />
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPage;
