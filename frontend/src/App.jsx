import React from 'react'
import MoodDetector from './components/MoodDetector'
import MoodSongs from './components/MoodSongs'
import { useState } from 'react'

const App = () => {
    const [Songs, setSongs] = useState([
       
    ])
  return (
    <div>
     <MoodDetector setSongs={setSongs} />
     <MoodSongs  Songs={Songs} />
    </div>
  )
}

export default App