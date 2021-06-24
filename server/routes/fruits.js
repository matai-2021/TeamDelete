const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ text: 'Hello from server' }) 
})

module.exports = router
