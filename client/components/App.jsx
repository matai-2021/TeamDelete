import React, { useState } from 'react'
import { getStory } from '../apis/api'

function App () {
  const [story, setStory] = useState('')

  function handleClick () {
    getStory()
      .then(({ text }) => {
        setStory(text)
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  return (
    <>
      <div className='app'>
        <h1>Team Delete App is ready</h1>
        <p>{story}</p>
        <textarea />
        <button onClick={handleClick}>Lick me</button>
      </div>
    </>
  )
}

export default App
