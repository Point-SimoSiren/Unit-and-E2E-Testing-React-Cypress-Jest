import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Message from './Message'

test('Renderöi viestin oikein', () => {
    const message = 'Lisättiin kurssi: SQL perusteet!'

    const component = render(
        <Message message={message} />
    )

    // jos halutaan debugata testiä:
    // component.debug()

    expect(component.container).toHaveTextContent(
        'Lisättiin kurssi: SQL perusteet!'
    )
})