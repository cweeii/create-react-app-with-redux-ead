import { map, zipObj, pipe } from 'ramda'

function buildAction(type) {
  return payload => ({
    type,
    payload
  })
}

const actionTypes = []

const genFxns = map(buildAction)
const objectify = zipObj(actionTypes)

export default pipe(genFxns, objectify)(actionTypes)
