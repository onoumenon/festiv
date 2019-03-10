import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "react-testing-library";
import App from "./App";

beforeEach(cleanup);

test("Nav links to Admin and Tickets navigate to the correct pages", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  fireEvent.click(getByText(/admin/i));
  expect(getByTestId("admin-page")).toBeInTheDocument();

  fireEvent.click(getByText(/tickets/i));
  expect(getByTestId("tickets-page")).toBeInTheDocument();
});
