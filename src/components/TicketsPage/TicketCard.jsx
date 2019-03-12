import React, { Component } from "react";
import { uniq } from "lodash";
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
import "./TicketCard.css";

export class TicketCard extends Component {
  state = {
    cartItem: { Fri: 0, Sat: 0, Sun: 0 },
    collapsed: true,
    isCartEmpty: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  isCartEmpty = () => {
    const cart = JSON.parse(sessionStorage.getItem("cartData"));
    try {
      const itemsInCart = Object.values(cart);
      const totalItems = itemsInCart.reduce((a, b) => a + b, 0);
      if (!totalItems || totalItems < 1) {
        this.setState({ isCartEmpty: true });
      } else {
        this.setState({ isCartEmpty: false });
      }
    } catch {
      return;
    }
  };

  handleAdd = e => {
    const copy = { ...this.state.cartItem };
    copy[e.target.value] += 1;
    this.setState({ cartItem: copy });
    this.setState({ isCartEmpty: false });
  };

  handleBuy = () => {
    const cart = JSON.stringify(this.state.cartItem);
    sessionStorage.setItem("cartData", cart);
    this.props.props.history.replace(this.props.props.returnPath);
  };

  componentDidMount() {
    this.isCartEmpty();
  }

  eventDays = getDays();

  displayMuscians = day => {
    const foundEvents = filterEvents(day.date);
    const musicianNames = [];
    foundEvents.map(musician => musicianNames.push(musician.title));
    const uniqueMusicians = uniq(musicianNames);
    if (sortEvents(foundEvents)[0]) {
      const firstEvent = sortEvents(foundEvents)[0];
      const time = ` ${("0" + (firstEvent.start.getHours() - 1)).slice(-2)}:${(
        "0" + firstEvent.start.getMinutes()
      ).slice(-2)}`;

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
              {time}
            </p>
          </div>

          <Button
            color="info"
            value={day.date.slice(0, 3)}
            onClick={this.handleAdd}
            disabled={false}
          >
            ✚ 1 to Cart
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          No Events Found.
          <Button
            color="info"
            value={day.date.slice(0, 3)}
            onClick={this.handleAdd}
            disabled={true}
          >
            ✚ 1 to Cart
          </Button>
        </div>
      );
    }
  };

  render() {
    const cart = this.state.cartItem;
    return (
      <React.Fragment>
        <Navbar color="yellow" light className="cartNav">
          <NavbarBrand className="p-0" />
          <Button onClick={this.toggleNavbar}>
            <img src="images/icons/cart.png" width="30px" alt="cart" />
          </Button>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Table borderless className="text-center shadow ">
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

                {this.displayMuscians(day)}
              </CardBody>
            </Card>
          );
        })}

        <Button
          onClick={this.handleBuy}
          style={{ position: "absolute", bottom: "120px" }}
          className="btn btn-primary m-1"
          disabled={this.state.isCartEmpty}
        >
          Buy Tickets
        </Button>
      </React.Fragment>
    );
  }
}
export default TicketCard;
