import request from 'superagent'

const rootUrl = '/api/v1/story'

export function getStory () {
//   return request.get(rootUrl)
//     .then(res => {
//       return res.body
  // })
  return Promise.resolve(
    ({
      text: 'Hello Delete!'
    })
  )
}
