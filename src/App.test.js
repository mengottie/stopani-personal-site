import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const component = create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
