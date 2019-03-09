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
  UncontrolledTooltip
} from "reactstrap";
import { getDay } from "./../../services/daysService";

export function TicketCart(props) {
  const day = getDay(props.match.params.id);

  return (
    <div className="container mx-auto text-center mt-3">
      <img
        src="images/icons/step2.png"
        width="300px"
        alt="Added to Cart"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <Card className="mb-5" style={{ width: "38rem" }}>
          <CardBody>
            <CardTitle tag="h3">{`${day.date}`}</CardTitle>
            <CardTitle tag="h3">{`${day.price}`}SGD</CardTitle>

            <Form>
              <FormGroup>
                <Label for="email">Email Address (for e-ticket)</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address here"
                />
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
