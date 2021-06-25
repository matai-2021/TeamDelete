import React, { useState } from 'react'
import { getStory } from '../apis/api'

function App () {
  const [story, setStory] = useState('')
  const [input, setInput] = useState('I\' very happy today and')

  function handleClick () {
    getStory(input)
      .then(text => {
        setStory(text)
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  function handleChange (event) {
    setInput(event.target.value)
  }

  return (
    <>
      <div className='app'>
        <div className='container'>
          <textarea cols={50} rows={5} onChange={handleChange} value={input} />
          <p className='story'>{story}</p>

        </div>
        <button onClick={handleClick}>Give me more!</button>
      </div>
    </>
  )
}

export default App
