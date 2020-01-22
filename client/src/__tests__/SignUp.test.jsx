import React from "react";
import { shallow, mount } from "enzyme";
import SignUp from "../components/sign-up/sign-up";

it("expect to render SignUp component", () => {
  expect(shallow(<SignUp />).length).toEqual(1);
});

it("expect html elements to render correctly", () => {
  const wrapper = mount(<SignUp />);
  expect(wrapper.html()).toMatchSnapshot();
});
