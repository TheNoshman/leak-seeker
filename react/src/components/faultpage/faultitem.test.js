import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import FaultItem from "./faultitem";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

const props = {
  summary: 'test',
  description: 'test',
  year: 'test',
  area: 'test',
  priceToFix: 'test',
  faultLogged: 'test',
  rating: 10,
  imageIndex: 0
}

beforeEach(() => {
  render(<FaultItem {...props}/>)
})

describe('render', () => {

  test('should render main container', () => {
  expect(screen.getByTestId('FaultItemContainer'))
  });

  test('should show Summary of issue', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Summary: test');
  })

  test('should show Price to fix', () => {
    expect(screen.getByText(new RegExp('Price to fix: £'))).toHaveTextContent('test')
  })


  test('should show upVoteButton', () => {
    expect(screen.getByTestId('upVote')).toBeInTheDocument();
  })

  test('should show rating', () => {
    expect(screen.getByTestId('rating')).toBeInTheDocument();
  })

  test('should show downVoteButton', () => {
    expect(screen.getByTestId('downVote')).toBeInTheDocument();
  })

  test('should show dropDownButton', () => {
    expect(screen.getByTestId('dropDownBtn')).toBeInTheDocument();
  })

})

describe('buttons', () => {

  test('should trigger upvote button', async  () => {
    const upVote = (screen.getByTestId('upVote'));
    let userRating = (screen.getByTestId('rating'));
    userEvent.click(upVote);
    await waitFor(() => expect(userRating).toHaveTextContent(props.rating+1))
  });

  test('should trigger downvote button', async () => {
    const downVote = (screen.getByTestId('downVote'));
    let userRating = (screen.getByTestId('rating'));
    userEvent.click(downVote);
    await waitFor(() => expect(userRating).toHaveTextContent(props.rating-1))
  })

  test('should show leak details', () => {
    const drowDownBtn =  (screen.getByTestId('dropDownBtn'));
    userEvent.click(drowDownBtn);
    expect(screen.getByText(new RegExp('Summary:'))).toHaveTextContent('test');
    expect(screen.getByText(new RegExp('Price to fix: £'))).toHaveTextContent('test');
    expect(screen.getByText(new RegExp('Area of fault:'))).toHaveTextContent('test');
    expect(screen.getByText(new RegExp('Build year:'))).toHaveTextContent('test');
    expect(screen.getByText(new RegExp('Description:'))).toHaveTextContent('test');
    expect(screen.getByText(new RegExp('Reported on:')));
    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})