import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Kurssi from './Kurssi'

describe('<Kurssi/>', () => {

    let component

    const kurssi = {
        nimi: 'Django sovellusten toteuttaminen',
        laajuus: '7 osp'
    }

    const mockHandler = jest.fn()

    beforeEach(() => {
        component = render(
            <Kurssi kurssi={kurssi} poistaKurssi={mockHandler} />
        )
    })

    test('renderöi kurssin nimen ja laajuuden', () => {

        expect(component.container).toHaveTextContent(
            'Django sovellusten toteuttaminen'
        )
        expect(component.container).toHaveTextContent(
            '7 osp'
        )

        // toinen tapa: css luokan mukaan, mutta nyt tulee samalla nähtyä
        // että classNamekin on ennallaan
        const h4 = component.container.querySelector('.kurssi')
        expect(h4).toHaveTextContent(
            'Django sovellusten toteuttaminen'
        )
        expect(h4).toHaveTextContent(
            '7 osp'
        )
    })

    //----------------------------------------------------------

    test('Klikkaus kutsuu tapahtumankäsittelijää yhden kerran', async () => {

        const button = component.getByText('poista')
        fireEvent.click(button)

        expect(mockHandler.mock.calls).toHaveLength(1)
    })

})