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
        <p>The year is 3000. Alien, Exo has landed on a derelict planet Earth.
          They explore the surroundings and come across the remains of a childrens book. The front cover has several authors
          - Koko, Kris, Ahmed and Suji. Intrigued, they open the book and come across the first page of the book.
        <quote>Once upon a time, there was a school of budding web developers who loved to play with Nintendo Switch, eat lunch and
              go to Doolan Brothers. </quote>Exo was hooked on the first page but as they turned the page, they noticed the rest
             of the pages were ripped out. Exo pulled out an app to finish the rest of the story...</p>
        <p>{story}</p>
        <textarea onChange={handleChange} value={input} />
        <button onClick={handleClick}>Give me more!</button>
      </div>
    </>
  )
}

export default App
