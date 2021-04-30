import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchBar from './searchbar.jsx';
import '@testing-library/jest-dom/extend-expect';

const setSearch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks();
})

test('Should render SearchBar', () => {
  render(<SearchBar />);

  expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter a registration number..."))
  expect(screen.getByTestId("Submit-button"));
});

test('Should change input value and call the function on submit', () => {

  render(<SearchBar setSearchedReg={setSearch} />);

  const input = screen.getByPlaceholderText("Enter a registration number...");
  userEvent.type(input, '');

  userEvent.type(input, 'Hello, test');
  expect(input).toHaveValue('Hello, test')

  const button = screen.getByTestId("Submit-button")
  userEvent.click(button);

  expect(setSearch).toHaveBeenCalledTimes(1);
  expect(setSearch).toHaveBeenCalledWith('Hello, test');
})