
import React from 'react'
import { useState } from 'react'

function App() {

  const [data, setdata] =  useState([])
  return (
    <div>
      console.log(data)
      setdata(data)

    </div>
  )
}
