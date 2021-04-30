import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import WelcomeContainer from './welcomecontainer';

test('Should render elements', () => {
  render(<WelcomeContainer />);

  expect(screen.getByTestId('WelcomeContainer')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Welcome to Leak Seeker'})).toHaveTextContent('Welcome to Leak Seeker');
  expect(screen.getByRole('heading', { name: 'Please choose an option:'})).toHaveTextContent('Please choose an option:');
  expect(screen.getByRole("img", {name: "brand logo"})).toBeInTheDocument();
});