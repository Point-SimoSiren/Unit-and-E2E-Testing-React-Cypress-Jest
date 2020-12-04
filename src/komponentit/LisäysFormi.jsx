import React, { useState } from 'react'
import './Tyyli.css'

// Vastaanotetaan vaihteeksi propsit suoraan nimellä kun ne on tiedossa!
// Tällöin ei tarvitse käyttää props sanaa missään.
const LisäysFormi = ({ setShowAddForm, luoKurssi }) => {

  const [name, setName] = useState('')
  const [osp, setOsp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    luoKurssi( //<--------- luoKurssi() on saatu propsina App.jsx komponentilta
      name,
      osp
    )
    setName('')
    setOsp('')
  }

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeOsp = (event) => {
    setOsp(event.target.value)
  }

  return (
    <div className="formDiv">

      <h2>Lisää uusi kurssi</h2>

      <form onSubmit={handleSubmit}>

        <input id="nimiInput"
          placeholder="Kurssin nimi"
          value={name}
          onChange={handleChangeName}
        />
        <input id="laajuusInput"
          placeholder="Laajuus (osp)"
          value={osp}
          onChange={handleChangeOsp}
        />

        <button id="tallennusNappi" type="submit">Tallenna</button>
      </form>

      <button id="piilotusNappi"
        onClick={() => setShowAddForm(false)}>Piilota lomake</button>
    </div>
  )
}

export default LisäysFormi
