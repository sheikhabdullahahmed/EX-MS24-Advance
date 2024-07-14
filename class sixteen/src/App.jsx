import Router from "./config/router";
import React from 'react'
import Navbar from './Components/Navebar'

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Router />
      </header>
    </div>
  )
}

export default App