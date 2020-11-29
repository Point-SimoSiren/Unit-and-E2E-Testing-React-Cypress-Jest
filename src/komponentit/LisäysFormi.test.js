import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LisäysFormi from './LisäysFormi'

describe('<LisäysFormi/>', () => {

    let component
    const mockFunktio = jest.fn()

    beforeEach(() => {
        component = render(
            <LisäysFormi luoKurssi={mockFunktio} setShowAddForm={mockFunktio} />
        )
    })

    // Formin piilotusnapin testi

    test('Tapahtumankäsittelijää kutsutaan yhden kerran', async () => {

        const button = component.getByText('Piilota lomake')
        fireEvent.click(button)

        expect(mockFunktio.mock.calls).toHaveLength(1)
    })

    // Formiin kirjoitus ja lähetystesti

    test('LisäysFormi päivittää tilat ja lähettää formin', () => {

        const nimiInput = component.container.querySelector('#nimiInput')
        const laajuusInput = component.container.querySelector('#laajuusInput')
        const form = component.container.querySelector('form')

        fireEvent.change(nimiInput, {
            target: { value: 'testikurssi' }
        });
        fireEvent.change(laajuusInput, {
            target: { value: '6' }
        });

        fireEvent.submit(form)

        expect(mockFunktio.mock.calls).toHaveLength(1)
        expect(mockFunktio.mock.calls[0][0]).toBe('3d tulostus')
        expect(mockFunktio.mock.calls[0][1]).toBe('6')
    })
})