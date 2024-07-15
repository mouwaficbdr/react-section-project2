import React from "react"
import Navbar from "./components/Navbar"
import Location from "./components/Location"
import data from "./data"

function App() {
  const locations = data.map(item => {
    return <Location
      key={item.id}
      item = {item}
    />
  })
  return (
    <div>
      <Navbar />
      {locations}
    </div>
    
  )
}

export default App
