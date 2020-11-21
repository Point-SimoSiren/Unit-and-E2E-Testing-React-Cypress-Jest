import React, { useState } from 'react'
import './App.css'
import Kurssilistaus from './komponentit/Kurssilistaus'
import LisäysFormi from './komponentit/LisäysFormi'
import Footer from './komponentit/Footer'

// Readmessa on selitetty asiaa ja kerrottu mm. asennettavat kirjastot

const App = () => {

  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kurssit</h1>
      </header>

      {showAddForm === false && <button className="nappi" onClick={() => setShowAddForm(true)}>Lisää kurssi</button>}

      {showAddForm === true && <LisäysFormi setShowAddForm={setShowAddForm} />
      }

      <Kurssilistaus />

      <Footer />
    </div>
  )
}
export default App
