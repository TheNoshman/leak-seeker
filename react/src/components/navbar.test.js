import React from 'react';
import Navbar from './navbar';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('navbar component', () => {
  test('should render the navbar', () => {
    render(<Navbar/>);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'LeakSeeker'})).toBeInTheDocument();

  })

  // test('should render the logo', () => {
  //   expect(screen.getByRole('heading', {name: 'LeakSeeker'})).toBeInTheDocument()
  // })

})

