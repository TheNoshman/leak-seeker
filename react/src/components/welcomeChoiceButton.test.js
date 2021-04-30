import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WelcomeChoiceButton from './welcomechoicebutton';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event'

describe('should render', () => {
  test('should render the components contianer element', () => {
    render(<WelcomeChoiceButton/>)
    expect(screen.getByTestId('welcomeChoiceBtnMain')).toBeInTheDocument()
  });

  test('searchfaults button should render', () => {
    render(<WelcomeChoiceButton searchType={"Search Faults"}/>)
    expect(screen.getByRole("link",{name: 'Search Faults'})).toBeInTheDocument()
  });

  test('register faults button should render', () => {
    render(<WelcomeChoiceButton searchType={"Register Fault"}/>)
    expect(screen.getByRole("link",{name: 'Register Fault'})).toBeInTheDocument()
  });
})

// describe('button', () => {
//   test('search button is clicked', () => {
//     const requestSearch = jest.fn()
//     const {queryByTestId} = render(<WelcomeChoiceButton requestSearch={requestSearch}  searchType={"Search Faults"}/>)
//     fireEvent.click(queryByTestId('searchbtn'))
//     expect(requestSearch).toHaveBeenCalled()
//   })
// })
