import React from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

import { getHeaderInfo } from "./../../services/adminService";
import { getDaybyDaySubStr } from "./../../services/daysService";
import Header from "./../common/Header/Header";
import { TicketForm } from "./TicketForm";

export function TicketCart({ handlePayload, ...props }) {
  const cart = JSON.parse(sessionStorage.getItem("cartData"));

  const days = Object.keys(cart);
  const itemsInCart = Object.values(cart);
  const price = days.map(day => getDaybyDaySubStr(day, 3).price);
  const pricePerDay = itemsInCart.map((day, i) => day * price[i]);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = pricePerDay.reduce(reducer);

  const headerInfo = getHeaderInfo("tickets");

  return (
    <div className="container mx-auto text-center mt-5 mb-5">
      <Header headerInfo={headerInfo} />
      <img
        src="https://i.imgur.com/iK6AUOt.png"
        width="300px"
        alt="Buy"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <Card className="mb-5  border-white shadow" style={{ width: "38rem" }}>
          <CardBody style={{ width: "25rem" }} className="mx-auto">
            <CardTitle tag="h2">Ticket Details</CardTitle>
            <div className="mx-auto" style={{ width: "20rem" }}>
              <Table borderless className="text-left">
                <thead>
                  <tr>
                    <th />
                    <th>{days[0]}</th>
                    <th>{days[1]}</th>
                    <th>{days[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#</th>
                    <td>{itemsInCart[0]}</td>
                    <td>{itemsInCart[1]}</td>
                    <td>{itemsInCart[2]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Price</th>
                    <td>{pricePerDay[0]} SGD</td>
                    <td>{pricePerDay[1]} SGD</td>
                    <td>{pricePerDay[2]} SGD</td>
                  </tr>
                </tbody>
              </Table>
              <CardTitle tag="h3" className="mb-3">
                <hr width="300px" color="#8be5c3" />
                Total Price: {`${totalPrice}`}SGD
                <hr width="300px" color="#8be5c3" />
              </CardTitle>
            </div>
            <TicketForm
              handlePayload={handlePayload}
              initial={{
                email: "",
                name: "",
                creditCardNumber: "",
                expiryDate: "",
                CVC: ""
              }}
              {...props}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TicketCart;
