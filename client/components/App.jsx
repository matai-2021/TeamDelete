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
        <h1>Team Delete App is ready</h1>
        {/* <img src="./images/book.jpg" /> */}
        <p>{story}</p>
        <textarea onChange={handleChange} value={input} />
        <button onClick={handleClick}>Give me more!</button>
      </div>
    </>
  )
}

export default App
