import React, { useState } from 'react'
import '../App.css'
//Viitataan vaihteeksi propsiin suoraan nimellä kun se on tiedossa!
const LisäysFormi = ({ setShowAddForm, luoKurssi }) => {

  const [name, setName] = useState('')
  const [osp, setOsp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    luoKurssi(
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

        <input className="input1"
          placeholder="Kurssin nimi"
          value={name}
          onChange={handleChangeName}
        />
        <input className="input2"
          placeholder="Laajuus (osp)"
          value={osp}
          onChange={handleChangeOsp}
        />

        <button className="nappi" type="submit">Tallenna</button>
      </form>

      <button className="nappi"
        onClick={() => setShowAddForm(false)}>Piilota lomake</button>
    </div>
  )
}

export default LisäysFormi
