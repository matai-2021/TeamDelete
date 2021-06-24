const express = require('express')
const textGeneratorapi = require('../textGenerator')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ text: 'Hello from server' })
})

router.post('/', (req, res) => {
  const { text } = req.body
  textGeneratorapi.addStory({ text })
    .then(newTalk => {
      res.json(newTalk)
      return null
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
