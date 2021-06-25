const request = require('superagent')

const sentimentApiUrl = ('https://api.deepai.org/api/sentiment-analysis ')

const identifySentiment = (paragraph) => {
  const { sentence } = paragraph
  return request(sentimentApiUrl)
    .then((sentiments) => {
      console.log(sentiments)
      return sentiments
    })
    .catch(err => {
      console.error('Error:', err)
      throw err
    })
}

module.exports = {
  identifySentiment
}
