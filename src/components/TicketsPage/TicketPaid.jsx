import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function TicketPaid() {
  const day = sessionStorage.getItem("myData");

  return (
    <div className="container mx-auto text-center">
      <img
        src="https://i.imgur.com/QGQgwbx.png"
        width="300px"
        alt="Paid"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <Card className="mb-5" style={{ width: "38rem" }}>
          <CardBody>
            <CardTitle tag="h3">Thank you for your Purchase</CardTitle>
            <img
              src="https://i.imgur.com/rKVUz72.png"
              width="200px"
              alt="Tick"
              className="m-4"
            />
            <CardTitle className="mb-3" tag="h5">
              Here are your order details:
            </CardTitle>
            <p>ID: {Date.now().toString()}</p>
            <p>Ticket for: Festive, {day}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TicketPaid;
