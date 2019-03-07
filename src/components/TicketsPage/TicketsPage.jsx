import React from "react";
import Header from "../Header/Header";
import { getHeaderInfo } from "./../../services/adminService";

export function TicketsPage() {
  const headerInfo = getHeaderInfo("tickets");

  return (
    <div>
      <Header headerInfo={headerInfo} />
    </div>
  );
}

export default TicketsPage;
