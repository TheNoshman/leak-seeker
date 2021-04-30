import React from "react";
import { render, screen } from "@testing-library/react";
import FaultItem from "./faultitem";
import "@testing-library/jest-dom/extend-expect";

//This is a test
const props = {
  summary: "test"
};

test("should render", () => {


  render(<FaultItem {...props} />);

  expect(screen.getByRole("heading", { name: /summary:/i})).toHaveTextContent(`Summary: ${props.summary}`);
});
