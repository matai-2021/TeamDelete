import request from 'superagent'

const rootUrl = '/api/v1/story'

export function getStory () {
  return request.get(rootUrl + '/getstory')
    .then(res => {
      return res.body
    })
  // return Promise.resolve(
  //   ({
  //     text: 'Once upon a time in a galaxy far far away...'
  //   })
  // )
}
