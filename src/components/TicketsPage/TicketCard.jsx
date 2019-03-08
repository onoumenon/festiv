import React from "react";
import Card from "./../common/Card/Card";

import { getDays } from "../../services/daysService";

function TicketCard() {
  const eventDays = getDays();
  return eventDays.map(day => {
    return <Card key={day._id} top={`${day.price}`} bottom={`${day.date}`} />;
  });
}

export default TicketCard;
