import React from "react";
import { render, cleanup } from "@testing-library/react";

<<<<<<< HEAD:client/src/__tests__/AddUser.test.jsx
import AddUser from '../components/users/AddUser';

afterEach(cleanup);

it('renders with default props', () => {
    const { getByLabelText, getByText } = render(<AddUser
        username=''
        email=''
        addUser={() => { return true }}
        handleChange={() => { return true }}
    />);
=======
import AddUser from "../users/AddUser";

afterEach(cleanup);

it("renders with default props", () => {
  const { getByLabelText, getByText } = render(
    <AddUser
      username=""
      email=""
      handleChange={() => {
        return true;
      }}
    />
  );
>>>>>>> master:client/src/components/__tests__/AddUser.test.jsx

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
<<<<<<< HEAD:client/src/__tests__/AddUser.test.jsx
    const { asFragment } = render(<AddUser
        username=''
        email=''
        addUser={() => { return true }}
        handleChange={() => { return true }}
    />);
    expect(asFragment()).toMatchSnapshot();
=======
  const { asFragment } = render(
    <AddUser
      username=""
      email=""
      handleChange={() => {
        return true;
      }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
>>>>>>> master:client/src/components/__tests__/AddUser.test.jsx
});
