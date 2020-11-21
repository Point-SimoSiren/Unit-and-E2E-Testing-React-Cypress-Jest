import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LisäysFormi from './LisäysFormi'

// Formin piilotusnapin testi

test('Klikkaus kutsuu tapahtumankäsittelijää yhden kerran', async () => {

    const mockHandler = jest.fn()

    const component = render(
        <LisäysFormi setShowAddForm={mockHandler} />
    )

    const button = component.getByText('Piilota lomake')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})


// Formiin kirjoitus ja lähetystesti

test('<LisäysFormi /> päivittää nimi ja laajuus tilan ja lähettää formin', () => {
    const luoKurssi = jest.fn()

    const component = render(
        <LisäysFormi luoKurssi={luoKurssi} />
    )

    const nimiInput = component.container.querySelector('.input1')
    const laajuusInput = component.container.querySelector('.input2')
    const form = component.container.querySelector('form')

    fireEvent.change(nimiInput, {
        target: { value: 'joku kurssi vaan' }
    })
    fireEvent.change(laajuusInput, {
        target: { value: '6 osp' }
    })
    fireEvent.submit(form)

    expect(luoKurssi.mock.calls).toHaveLength(1)
    expect(luoKurssi.mock.calls[0][0].content).toHaveContent('joku kurssi vaan')
    expect(luoKurssi.mock.calls[0][0].content).toBe('6 osp')
})