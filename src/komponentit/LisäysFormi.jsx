import React, { useState } from 'react'

//Viitataan vaihteeksi propsiin suoraan nimellä kun se on tiedossa!
const LisäysFormi = ({ setShowAddForm }) => {

  const [name, setName] = useState('')
  const [osp, setOsp] = useState('')

  const addKurssi = (event) => {
    event.preventDefault()
    alert("YES!!", "uusi kurssi mukamas lisätty", "Uskotaan!")
    setName('')
    setOsp('')
  }

  return (
    <div className="formDiv">

      <h2>Create a new note</h2>

      <form onSubmit={addKurssi}>
        <input
          value={name}
          onChange={() => setName(this.value)}
        />
        <input
          value={osp}
          onChange={() => setOsp(this.value)}
        />
        <button type="submit">Tallenna</button>
      </form>

      <button className="nappi"
        onClick={() => setShowAddForm(false)}>Piilota lomake</button>
    </div>
  )
}

export default LisäysFormi
