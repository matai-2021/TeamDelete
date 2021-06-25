const express = require('express')
const textGeneratorapi = require('../textGenerator')

const sentiment = require('../sentimentApi')

const router = express.Router()

router.post('/getstory', (req, res) => {
  const { text } = req.body
  textGeneratorapi.addStory({ text })
    .then(moreStory => {
      res.json(moreStory)
      return null
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

router.post('/identifystatement', (req, res) => {
  const { text } = req.body

  sentiment.identifySentiment({ text })
    .then(sentiments => {
      res.json(sentiments)
      return null
    })
    .catch(() => {
      // console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
