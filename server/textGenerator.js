const request = require('superagent')

const textGeneratorApiUrl = ('https://api.deepai.org/api/text-generator ')

const addStory = (paragrapgh) => {
  const { text } = paragrapgh
  return request(textGeneratorApiUrl)
    .then(([id]) => {
      return null
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

module.exports = {
  addStory
}
