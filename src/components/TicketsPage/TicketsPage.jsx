import React from "react";
import Header from "../common/Header/Header";
import { getHeaderInfo } from "./../../services/adminService";
import TicketCard from "./TicketCard";

export function TicketsPage() {
  const headerInfo = getHeaderInfo("tickets");

  return (
    <div>
      <Header headerInfo={headerInfo} />
      <TicketCard />
    </div>
  );
}

export default TicketsPage;
