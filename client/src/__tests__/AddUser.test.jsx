import React from "react";
import { render, cleanup } from "@testing-library/react";

import AddUser from "../components/users/AddUser";

afterEach(cleanup);

it("renders with default props", () => {
  const { getByLabelText, getByText } = render(
    <AddUser
      username=""
      email=""
      addUser={() => {
        return true;
      }}
      handleChange={() => {
        return true;
      }}
    />
  );

  const usernameInput = getByLabelText("Username");
  expect(usernameInput).toHaveAttribute("type", "text");
  expect(usernameInput).toHaveAttribute("required");
  expect(usernameInput).not.toHaveValue();

  const emailInput = getByLabelText("Email");
  expect(emailInput).toHaveAttribute("type", "email");
  expect(emailInput).toHaveAttribute("required");
  expect(emailInput).not.toHaveValue();

  const buttonInput = getByText("Submit");
  expect(buttonInput).toHaveValue("Submit");
});

it("renders", () => {
  const { asFragment } = render(
    <AddUser
      username=""
      email=""
      addUser={() => {
        return true;
      }}
      handleChange={() => {
        return true;
      }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});