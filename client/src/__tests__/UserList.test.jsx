import React from "react";
import { render, cleanup } from "@testing-library/react";

<<<<<<< HEAD:client/src/__tests__/UserList.test.jsx
import UsersList from '../components/users/UsersList';
=======
import UsersList from "../UsersList";
>>>>>>> master:client/src/components/__tests__/UserList.test.jsx

afterEach(cleanup);

const users = [
  {
    email: "hermanmu@gmail.com",
    id: 1,
    username: "michael"
  },
  {
    email: "michael@mherman.org",
    id: 2,
    username: "michaelherman"
  }
];

<<<<<<< HEAD:client/src/__tests__/UserList.test.jsx
it('renders a username', () => {
    const { getByText } = render(<UsersList users={users}/>);
    expect(getByText('michael')).toHaveClass('username');
    expect(getByText('michaelherman')).toHaveClass('username');
=======
it("renders a username", () => {
  const { getByText } = render(<UsersList users={users} />);
  expect(getByText("michael")).toHaveClass("username");
  expect(getByText("michaelherman")).toHaveClass("username");
>>>>>>> master:client/src/components/__tests__/UserList.test.jsx
});

it("renders", () => {
  const { asFragment } = render(<UsersList users={users} />);
  expect(asFragment()).toMatchSnapshot();
});
