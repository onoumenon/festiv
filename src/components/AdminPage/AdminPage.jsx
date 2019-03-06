import React from "react";
import { Link } from "react-router-dom";
import MusiciansTable from "../MusiciansTable/MusiciansTable";

function AdminPage() {
  return (
    <React.Fragment>
      <div>
        <Link to="/musicians/new">Add New Act</Link>
      </div>
      <div className="row">
        <MusiciansTable admin="admin" />
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
