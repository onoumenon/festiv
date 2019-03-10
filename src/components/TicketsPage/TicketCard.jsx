import React, { Component } from "react";
import { uniq } from "lodash";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Table,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { filterEvents, sortEvents } from "./../../services/eventsService";
import { getDays } from "../../services/daysService";

export class TicketCard extends Component {
  state = {
    cartItem: { Fri: 0, Sat: 0, Sun: 0 },
    collapsed: false
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleAdd = e => {
    const copy = { ...this.state.cartItem };
    copy[e.target.value] += 1;
    this.setState({ cartItem: copy });
  };

  handleBuy = () => {
    const cart = JSON.stringify(this.state.cartItem);
    sessionStorage.setItem("cartData", cart);
  };

  eventDays = getDays();

  displayMuscians = day => {
    const foundMusicians = filterEvents(day);
    const musicianNames = [];
    foundMusicians.map(musician => musicianNames.push(musician.title));
    const uniqueMusicians = uniq(musicianNames);

    const firstEvent = sortEvents(foundMusicians)[0];

    return (
      <div className="d-flex justify-content-start">
        <div style={{ width: "5rem" }} className="mb-2">
          <img
            className="m-2"
            src="images/icons/microphone.png"
            width="18px"
            alt="musicians"
          />
          {uniqueMusicians.map((musician, i) => (
            <p key={i}>{musician}</p>
          ))}
        </div>
        <div style={{ width: "5rem" }} className="ml-2">
          <img
            className="m-2"
            src="images/icons/clock.png"
            width="18px"
            alt="time"
          />

          <p>
            Door opens an hour early at
            {` ${("0" + (firstEvent.start.getHours() - 1)).slice(-2)}:${(
              "0" + firstEvent.start.getMinutes()
            ).slice(-2)}`}
          </p>
        </div>
      </div>
    );
  };

  render() {
    const cart = this.state.cartItem;
    return (
      <React.Fragment>
        <Navbar
          color="faded"
          light
          style={{ width: "13rem", position: "absolute", left: "60px" }}
        >
          <NavbarBrand className="mr-auto" />
          <Button onClick={this.toggleNavbar} className="mr-2">
            <img src="images/icons/cart.png" width="30px" alt="cart" />
          </Button>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Table borderless className="text-center  shadow ">
                  <thead>
                    <tr>
                      <th />
                      <th>Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Fri</th>
                      <td>{cart.Fri}</td>
                    </tr>
                    <tr>
                      <th scope="row">Sat</th>
                      <td>{cart.Sat}</td>
                    </tr>
                    <tr>
                      <th scope="row">Sun</th>
                      <td>{cart.Sun}</td>
                    </tr>
                  </tbody>
                </Table>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {this.eventDays.map(day => {
          return (
            <Card
              key={day._id}
              className="tixcard mb-5 m-2 border-white shadow"
              style={{ width: "17rem" }}
            >
              <CardBody>
                <CardTitle tag="h3">{`${day.date}`}</CardTitle>
                <CardTitle tag="h3">{`${day.price}`}SGD</CardTitle>
                <hr />

                {this.displayMuscians(day.date)}

                <Button
                  color="info"
                  value={day.date.slice(0, 3)}
                  onClick={this.handleAdd}
                >
                  ✚ 1 to Cart
                </Button>
              </CardBody>
            </Card>
          );
        })}

        <Link
          onClick={this.handleBuy}
          style={{ position: "absolute", bottom: "120px" }}
          className="btn btn-primary m-1"
          to="/tickets/buy"
        >
          Buy Tickets
        </Link>
      </React.Fragment>
    );
  }
}
export default TicketCard;
