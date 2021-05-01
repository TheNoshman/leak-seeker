import React from 'react'
import App from '../App'
import { screen, render, fireEvent, cleanup } from '@testing-library/react'

describe('Welcome Page', () => {
  afterEach(() => {
    cleanup
  })

  it('should take a snapshot of the welcome screen', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
  })

  it('should allow users to search by registration', () => {
    render(<App />)

    fireEvent.click(screen.getByText(/search faults/i))
    expect(screen.getByPlaceholderText(/enter a registration number.../i)).toBeTruthy()

    const inputForm = screen.getByPlaceholderText(/enter a registration number.../i)
    expect(inputForm.value).toBe('')
    fireEvent.change(inputForm, { target: { value: 'ABC123'} })
    expect(inputForm.value).toBe('ABC123')

    const submitBtn = screen.getByRole('button', { name: /submit/i })
    expect(submitBtn).toBeTruthy()
    fireEvent.click(submitBtn)
  })
})