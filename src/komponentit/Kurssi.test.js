import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Kurssi from './Kurssi'

test('renderöi kurssin nimen ja laajuuden', () => {
    const kurssi = {
        nimi: 'Django sovellusten toteuttaminen',
        laajuus: '7 osp'
    }

    const component = render(
        <Kurssi kurssi={kurssi} />
    )
    component.debug()
    // Alla yksi vaihtoehto jest-dom-kirjaston "matcher"-metodeista.

    expect(component.container).toHaveTextContent(
        'Django sovellusten toteuttaminen'
    )
    expect(component.container).toHaveTextContent(
        '7 osp'
    )

    // toinen tapa: css luokan mukaan
    const div = component.container.querySelector('.kurssi')
    expect(div).toHaveTextContent(
        'Django sovellusten toteuttaminen'
    )
    expect(div).toHaveTextContent(
        '7 osp'
    )

})