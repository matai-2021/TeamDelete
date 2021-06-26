import request from 'superagent'

const rootUrl = '/api/v1/story'

export function getStory (input) {
  return request.post(rootUrl + '/getstory')
    .send({ text: input })
    .then(res => {
      return (res.body)
    })
}

export function getSentiment (sentence) {
  return request.post(rootUrl + '/identifystatement')
    .send({ text: sentence })
    .then(res => res.body)
}
