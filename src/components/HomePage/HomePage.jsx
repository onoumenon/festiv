import React from "react";
import { getHeaderInfo } from "./../../services/adminService";
import MusiciansTable from "./../MusiciansTable/MusiciansTable";
import HPJumbotron from "./HPJumbotron";

function HomePage() {
  const headerInfo = getHeaderInfo("home");

  return (
    <div className="text-center">
      <HPJumbotron headerInfo={headerInfo} />
      <MusiciansTable />
    </div>
  );
}

export default HomePage;
