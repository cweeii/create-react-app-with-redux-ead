import cmds from '../cmds'

function* test() {
  return yield cmds.echo('hello!')
}

export default { test }
