import { map, zipObj, pipe, merge } from 'ramda'
import { cmds } from 'effects-as-data-universal/es5'

function buildCommand(type) {
  return payload => ({
    type,
    payload
  })
}

const commandTypes = ['echo', 'reduxDispatch', 'reduxGetState']

const generateCommandCreators = map(buildCommand)
const objectify = zipObj(commandTypes)
const mergeUniversal = merge(cmds)

export default pipe(generateCommandCreators, objectify, mergeUniversal)(
  commandTypes
)
