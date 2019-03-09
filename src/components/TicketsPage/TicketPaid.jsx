import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function TicketPaid() {
  return (
    <div className="container mx-auto text-center">
      <img
        src="images/icons/step3.png"
        width="300px"
        alt="Paid"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <Card className="mb-5" style={{ width: "38rem" }}>
          <CardBody>
            <img
              src="images/icons/tick.png"
              width="500px"
              alt="Tick"
              className="m-4"
            />
            <CardTitle tag="h3">Thanks for your Purchase</CardTitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TicketPaid;
