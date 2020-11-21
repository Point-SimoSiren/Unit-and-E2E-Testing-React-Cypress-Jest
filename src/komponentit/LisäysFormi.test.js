import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LisäysFormi from './LisäysFormi'

test('Klikkaus kutsuu tapahtumankäsittelijää kerran', async () => {

    const mockHandler = jest.fn()

    const component = render(
        <LisäysFormi setShowAddForm={mockHandler} />
    )

    const button = component.getByText('Piilota lomake')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})