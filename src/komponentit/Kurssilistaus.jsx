import React from 'react'
import './Tyyli.css'
import Kurssi from './Kurssi'

const Kurssilistaus = ({ kurssit, poistaKurssi }) => {

  /*
  "kurssit !== null && " tarkoittaa samaa kuin: If kurssit !== null {
      map funktio looppaa kaikki alkiot läpi ja palauttaa
      jokaisen kohdalla yksittäisen kurssi objektin jonka renderöinnin hoitaa Kurssi.jsx, joka saa kurssiobjektin propsina.
  }
  */

  return (
    <div className="App">
      <h2>Kurssit</h2>

      {kurssit !== null && kurssit.map(kurssi =>
        <Kurssi kurssi={kurssi} poistaKurssi={poistaKurssi} />
      )
      }
    </div>
  )
}

export default Kurssilistaus