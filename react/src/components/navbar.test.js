import React from 'react';
import Navbar from './navbar';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('navbar component', () => {
  test('should render the navbar', () => {
    render(<Navbar/>);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'LeakSeeker'})).toBeInTheDocument();
    expect(screen.getByRole('img', {name: 'brand logo'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Contact'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Login'})).toBeInTheDocument();
  })
})

