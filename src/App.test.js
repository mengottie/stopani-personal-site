import React from 'react';
import { create } from 'react-test-renderer';

import App from './App';

jest.mock('./components/Navbar', () => 'Navbar');

it('renders correctly', () => {
  const component = create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
