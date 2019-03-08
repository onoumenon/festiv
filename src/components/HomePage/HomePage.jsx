import React from "react";
import Header from "../common/Header/Header";
import MusiciansTable from "./../MusiciansTable/MusiciansTable";
import { getHeaderInfo } from "./../../services/adminService";

function HomePage() {
  const headerInfo = getHeaderInfo("home");

  return (
    <div>
      <Header headerInfo={headerInfo} />
      <MusiciansTable />
    </div>
  );
}

export default HomePage;
