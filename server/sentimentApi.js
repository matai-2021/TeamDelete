const request = require('superagent')

const sentimentApiUrl = ('https://api.deepai.org/api/sentiment-analysis')

const { apiKey } = require('./textGenerator')

const identifySentiment = (text) => {
  return Promise.resolve(['Negative'])
  return request.post(sentimentApiUrl)
    .set('api-key', apiKey)
    .type('form')
    .send(text)
    .then((data) => {
      const parsedOutput = JSON.parse(data.text)
      return parsedOutput.output
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

module.exports = {
  identifySentiment
}
