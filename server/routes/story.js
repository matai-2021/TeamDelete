const express = require('express')
const textGeneratorapi = require('../textGenerator')

const sentiment = require('../sentimentApi')

const router = express.Router()

router.post('/getstory', (req, res) => {
  const { text } = req.body
  textGeneratorapi.addStory({ text })
    .then(moreStory => {
      res.json({ moreStory: moreStory })
      return null
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

router.post('/identifystatement', (req, res) => {
  const { sentence } = req.body
  sentiment.identifySentiment({ sentence })
    .then(sentiments => {
      res.json(sentiments)
      return null
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
