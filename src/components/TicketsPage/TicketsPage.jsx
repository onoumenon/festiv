import React from "react";
import Header from "../common/Header/Header";
import { getHeaderInfo } from "./../../services/adminService";
import TicketCard from "./TicketCard";
import { TicketCart } from "./TicketCart";
import "./TicketPage.css";

export function TicketsPage(props) {
  const headerInfo = getHeaderInfo("tickets");

  const displayCart = id => {
    if (!id) {
      return (
        <React.Fragment>
          <img
            src="icons/step1.png"
            width="300px"
            alt="Get Ticket"
            className="m-4"
          />
          <div className="container d-flex justify-content-center">
            <TicketCard />
          </div>
        </React.Fragment>
      );
    }
    if (id === "paid") {
      return (
        <React.Fragment>
          <img src="icons/step3.png" width="300px" alt="Paid" className="m-4" />
          <div className="container d-flex justify-content-center">PAID</div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <img
            src="icons/step3.png"
            width="300px"
            alt="Added to Cart"
            className="m-4"
          />
          <div className="container d-flex justify-content-center">
            <TicketCart id={id} />
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="container text-center mx-auto">
      <Header headerInfo={headerInfo} />
      {displayCart(props.match.params.id)}
    </div>
  );
}

export default TicketsPage;
