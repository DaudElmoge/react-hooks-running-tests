import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'please pass this test'", () => {
  render(<Header />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
