import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "react-testing-library";
import App from "./../../App";
import * as TicketService from "../../services/daysService";
import { TicketCart } from "./TicketCart";
import TicketsPage from "./TicketsPage";

beforeEach(() => {
  let sampleData = [
    {
      _id: "0",
      date: new Date("June 14, 2019").toDateString(),
      price: 40
    },
    {
      _id: "1",
      date: new Date("June 15, 2019").toDateString(),
      price: 60
    }
  ];

  jest.spyOn(TicketService, "getDays").mockImplementation(() => sampleData);
});

afterEach(() => {
  TicketService.getDays.mockRestore();
});

test("displays tickets based on days on load", () => {
  const history = createMemoryHistory({ initialEntries: ["/tickets"] });
  const { getAllByText } = render(
    <Router history={history}>
      <TicketsPage />
    </Router>
  );

  expect(TicketService.getDays).toHaveBeenCalledTimes(1);
  expect(getAllByText(/Jun 14/i).length).toEqual(1);
  expect(getAllByText(/Jun 15/i).length).toEqual(1);
});

test("displays cart amount based on number of clicks", () => {
  const history = createMemoryHistory({ initialEntries: ["/tickets"] });
  const { getByText } = render(
    <Router history={history}>
      <TicketsPage />
    </Router>
  );

  const FriCartBtn = getByText("✚ 1 to Cart");
  fireEvent.click(FriCartBtn);
  fireEvent.click(FriCartBtn);
  fireEvent.click(FriCartBtn);
  expect(getByText("3")).toBeInTheDocument();
});

test("calculates correct price for tickets", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  fireEvent.click(getByText(/tickets/i));
  const FriCartBtn = getByText("✚ 1 to Cart");
  fireEvent.click(FriCartBtn);
  fireEvent.click(FriCartBtn);
  const BuyBtn = getByText(/Buy Tickets/i);
  fireEvent.click(BuyBtn);
  expect(getByText(/80 SGD/i)).toBeInTheDocument();
});
