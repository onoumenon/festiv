import React from "react";
import "./TicketPage.css";
import { getDay } from "./../../services/daysService";
import { Card, CardBody, CardTitle } from "reactstrap";

export function TicketCart({ id }) {
  const day = getDay(id);

  return (
    <Card className="tixcard mb-5" style={{ width: "18rem" }}>
      <CardBody>
        <CardTitle tag="h3">{`${day.date}`}</CardTitle>
        <CardTitle tag="h3">{`${day.price}`}SGD</CardTitle>
      </CardBody>
    </Card>
  );
}

export default TicketCart;
