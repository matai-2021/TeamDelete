const express = require('express')
const textGeneratorapi = require('../textGenerator')

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

module.exports = router
