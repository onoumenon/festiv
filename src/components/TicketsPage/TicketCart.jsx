import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Badge,
  UncontrolledTooltip,
  Table
} from "reactstrap";
import { getHeaderInfo } from "./../../services/adminService";
import { getDaybyDaySubStr } from "./../../services/daysService";
import Header from "./../common/Header/Header";

export function TicketCart() {
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
            <Form>
              <FormGroup>
                <Label for="email">Email Address (for e-ticket)</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="name">Name on Card</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cardNumber">Credit Card Number</Label>
                    <Input type="text" name="cardNumber" id="cardNumber" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="mm">MM</Label>
                    <Input type="number" min="1" max="99" name="mm" id="mm" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="yy">YY</Label>
                    <Input type="number" min="1" max="99" name="yy" id="yy" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="cvc">
                      CVC
                      <Badge id="cvcTip" color="light">
                        ?
                      </Badge>
                    </Label>
                    <Input type="text" name="cvc" id="cvc" />
                    <UncontrolledTooltip placement="right" target="cvcTip">
                      CVC (card verification code) is a three or four-digit
                      number on the back of your card.
                    </UncontrolledTooltip>
                  </FormGroup>
                </Col>
              </Row>

              <Link className="btn btn-info m-1" to="/tickets/paid">
                Complete Payment
              </Link>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TicketCart;
