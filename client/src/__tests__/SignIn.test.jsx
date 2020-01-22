import React from 'react';
import { shallow, mount } from 'enzyme';
import SignIn from '../components/sign-in/sign-in';

it('expect to render SignIn component', () => {
  expect(shallow(<SignIn />).length).toEqual(1)
})

it('expect html elements to render correctly', () => {
  const wrapper = mount(<SignIn />);
  expect(wrapper.html()).toMatchSnapshot();
})