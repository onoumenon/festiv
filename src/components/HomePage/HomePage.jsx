import React from "react";
import MusiciansTable from "./../MusiciansTable/MusiciansTable";
import { getHeaderInfo } from "./../../services/adminService";
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
