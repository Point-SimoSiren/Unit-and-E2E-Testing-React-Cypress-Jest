import React from 'react'
import '../App.css'

const Kurssi = props => (
  <h4 className="kurssi">{props.kurssi.nimi} {' ⌚ '} {props.kurssi.laajuus}</h4>
)
export default Kurssi
