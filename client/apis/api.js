import request from 'superagent'

const rootUrl = '/api/v1/story'

export function getStory (input) {
  return request.post(rootUrl + '/getstory')
    .send({ text: input })
    .then(res => {
      console.log(res.body)
      return (res.body)
    })
  // return Promise.resolve(
  //   ({
  //     text: 'Once upon a time in a galaxy far far away...'
  //   })
  // )
}
