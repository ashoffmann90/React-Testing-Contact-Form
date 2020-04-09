import React from 'react'
import {render, fireEvent, getByTestId} from '@testing-library/react'
import ContactForm from './ContactForm'

// Tests:
// initialTest
// canTypeInputs
// canSubmitOnClick

test('First Name label renders', () => {
    const {getByText} = render(<ContactForm/>)
    
    const labelText = getByText(/first name*/i)
    expect(labelText).toBeVisible()
})

// test("renders First Name", () => {
//     const { getByText } = render(<ContactForm/>);  
//     const firstName = getByText(/first name/i);       
//     expect(firstName).toBeInTheDocument();
// })

test('Submit inputs', () => {
    const {getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByTestId("firstName")
    const lastNameInput = getByTestId("lastName")
    const emailInput = getByTestId("email")

    fireEvent.change(firstNameInput, {target: {value: 'Drew'}})
    fireEvent.change(lastNameInput, {target: {value: 'Hoffmann'}})
    fireEvent.change(emailInput, {target: {value: 'drew@drew.com'}})

    expect(firstNameInput.value).toBe('Drew')
    expect(lastNameInput.value).toBe('Hoffmann')
    expect(emailInput.value).toBe('drew@drew.com')

    fireEvent.click(getByTestId("button"))

    // const submittedFN = getByTestId('Dre')
    // const submittedLN = getByText('Hoffmann')
    // const submittedEmail = getByText('drew@drew.com')

    // expect(submittedFN).toBeVisible()
    // expect(submittedLN).toBeVisible()
    // expect(submittedEmail).toBeVisible()
})
