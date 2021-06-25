const request = require('superagent')

const textGeneratorApiUrl = ('https://api.deepai.org/api/text-generator ')
const apiKey = '6137f994-a7fc-45fb-be37-1cdbe4ea10a0'

function addStory (paragrapgh) {
  const { text } = paragrapgh
  return request.post(textGeneratorApiUrl)
    .set('api-key', apiKey)
    .type('form')
    .send({ text })
    .then((res) => {
      return res.body.output
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

module.exports = {
  addStory,
  apiKey
}
