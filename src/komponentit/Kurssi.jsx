import React from 'react'
import './Tyyli.css'
import kurssiservice from '../services/Kurssit'

// propsi otettu vastaan suoraan nimellä
const Kurssi = ({ kurssi, poistaKurssi }) => {

  const handlePoistoClick = (id) => {
    poistaKurssi(id)
  }

  return (
    <h4 className="kurssi">{kurssi.nimi} {' '}
      {kurssi.laajuus} {'OSP'}
      <button className="nappiDelete" onClick={() => handlePoistoClick(kurssi.kurssiId)}>poista</button></h4>
  )
}

export default Kurssi