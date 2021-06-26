import React, { useState } from 'react'
import hash from 'hash-string'
import { getSentiment, getStory } from '../apis/api'

function App () {
  const [story, setStory] = useState('')
  const [colorisedStory, setColorisedStory] = useState([])
  const [input, setInput] = useState('Once upon a time a long time ago a king and a queen has a beautiful daughter named Fiona')

  async function handleClick () {
    const text = await getStory(input)
    setStory(text)
    const delimitedStory = text
      .split('\n')
      .filter(line => line !== '')
      .map(line =>
        line
          .trim()
          .split('.')
          .filter(sentence => sentence !== '')
          .map(sentence => ({
            id: hash(sentence),
            sentence: sentence
          }))
      )

    const promiseStory = delimitedStory
      .flatMap(line => line
        .map(async sentence => {
          sentence.sentiment = await getSentiment(sentence.sentence)
          return sentence
        }))
    const resolvedStory = await Promise.all(promiseStory)
    setColorisedStory(resolvedStory)
    console.log(resolvedStory)
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
          <div>
            { colorisedStory.map(sentence => {
              <p>{sentence}</p>
            }) }
          </div>
        </div>
        <button onClick={handleClick}>Give me more!</button>
      </div>
    </>
  )
}

export default App
