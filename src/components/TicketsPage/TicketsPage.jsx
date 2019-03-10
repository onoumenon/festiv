import React from "react";
import Header from "../common/Header/Header";
import { getHeaderInfo } from "./../../services/adminService";
import TicketCard from "./TicketCard";
import "./TicketPage.css";

export function TicketsPage() {
  const headerInfo = getHeaderInfo("tickets");

  return (
    <div
      className="container text-center mx-auto mt-5 mb-5"
      data-testid="tickets-page"
    >
      <Header headerInfo={headerInfo} />
      <img
        src="https://i.imgur.com/aa84uMR.png"
        width="300px"
        alt="Get Ticket"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <TicketCard />
      </div>
    </div>
  );
}

export default TicketsPage;
