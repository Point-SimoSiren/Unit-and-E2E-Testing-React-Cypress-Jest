import React from 'react'
import '../App.css'
import Kurssi from './Kurssi'

const Kurssilistaus = () => {

  const kurssit = [{ nimi: 'Python perusteet', laajuus: '4 osp' },
  { nimi: 'SQL peruskurssi', laajuus: '3osp' },
  { nimi: 'React.js sovellusten kehittäminen', laajuus: '8osp' }]

  return (
    <div className="App">
      <h2>Kurssit</h2>

      {kurssit.map(kurssi =>
        <Kurssi kurssi={kurssi} />
      )
      }

    </div>
  );
}

export default Kurssilistaus;
