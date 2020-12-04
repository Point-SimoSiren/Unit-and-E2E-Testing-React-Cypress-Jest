import React, { useState, useEffect } from 'react'
import './Tyyli.css'
import Kurssilistaus from './Kurssilistaus'
import LisäysFormi from './LisäysFormi'
import Footer from './Footer'
import kurssiservice from '../services/Kurssit'
import Message from './Message'

// Lisäysformin piilotusnappi on LisäysFormi -komponentissa itsessään
// Lisäysformin näyttönappi ja näkyvyys state on tässä komponentissa

const App = () => {

  const [showAddForm, setShowAddForm] = useState(false)
  const [kurssit, setKurssit] = useState([])
  const [haeUudetDatat, setHaeUudetDatat] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    kurssiservice
      .getAll()
      .then(res => {
        setKurssit(res)
        console.log(kurssit)
      })
  }, [haeUudetDatat])

  const luoKurssi = (name, osp) => {
    const newObj = { nimi: name, laajuus: parseInt(osp) }
    kurssiservice
      .create(newObj)
      .then(x => {
        setShowMessage(true)
        setMessage("Lisätty uusi kurssi: " + newObj.nimi + " !")
        setShowAddForm(false)
        setTimeout(() =>
          setShowMessage(false)
          , 4000)
        setHaeUudetDatat(!haeUudetDatat)
      })
  }

  const poistaKurssi = (id) => {
    kurssiservice.remove(id)
      .then(x => {
        setShowAddForm(false)
        setShowMessage(true)
        setMessage("Poisto tehty id:llä: " + id)
        setTimeout(() =>
          setShowMessage(false)
          , 4000)
        setShowAddForm(false)
        setHaeUudetDatat(!haeUudetDatat)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kurssit</h1>
      </header>

      { showMessage === true && <Message message={message} />}

      {showAddForm === false && <button id="näytäFormi" onClick={() => setShowAddForm(true)}>Lisää kurssi</button>}

      {showAddForm === true && <LisäysFormi luoKurssi={luoKurssi} setShowAddForm={setShowAddForm} />
      }
      {showMessage === false &&
        <Kurssilistaus kurssit={kurssit} poistaKurssi={poistaKurssi} />
      }

      <Footer />
    </div>
  )
}
export default App