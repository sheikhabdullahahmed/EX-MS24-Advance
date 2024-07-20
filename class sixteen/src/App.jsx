import Router from "./config/router";
import React from 'react'
import Navebar from './Components/Navebar'

function App() {
  return (
    <div>
      <header>
        <Navebar />
        <Router />
      </header>
    </div>
  )
}

export default App