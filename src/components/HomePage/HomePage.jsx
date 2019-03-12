import React from "react";
import { getHeaderInfo } from "./../../services/adminService";
import MusiciansTable from "./../MusiciansTable/MusiciansTable";
import HPJumbotron from "./HPJumbotron";

function HomePage({ musicians }) {
  const headerInfo = getHeaderInfo("home");

  return (
    <div className="text-center">
      <HPJumbotron headerInfo={headerInfo} />
      <MusiciansTable musicians={musicians} />
    </div>
  );
}

export default HomePage;
