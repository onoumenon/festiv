import React from "react";
import Header from "../Header/Header";
import { getHeaderInfo } from "./../../services/headerService";
import MusiciansTable from "./../MusiciansTable/MusiciansTable";

export function EventsPage() {
  const headerInfo = getHeaderInfo("events");
  return (
    <div>
      <Header headerInfo={headerInfo} />
      <MusiciansTable />
    </div>
  );
}

export default EventsPage;
