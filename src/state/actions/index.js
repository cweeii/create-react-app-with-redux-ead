import { map, zipObj, pipe } from 'ramda'

function buildActionCreator(type) {
  return payload => ({
    type,
    payload
  })
}

const actionTypes = []

const genFxns = map(buildActionCreator)
const objectify = zipObj(actionTypes)

export default pipe(genFxns, objectify)(actionTypes)
