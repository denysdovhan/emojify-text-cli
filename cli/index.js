import meow from 'meow'
import updateNotifier from 'update-notifier'
import emogifyText from 'emojify-text'

/**
 * CLI app instance of Meow
 * More: https://www.npmjs.com/package/meow
 * @param  {Object|Array|String} Text that will be write on --help or -h
 * @param  {Object}              Minimist options (github.com/substack/minimist)
 * @return {Object}              A Meow CLI helper object
 */
const cli = meow(`
  Usage
    $ emojify-text <bg> <fg> <text>

  Options
    -r, --row    Print emojis in row.

  Examples
    $ emojify-text ⭐️ 💙 'lol'
    $ emojify-text ⭐️ 💙 I love emojis
`, {
  default: {
    row: false
  },
  alias: {
    r: 'row'
  },
  boolean: [ 'r', 'row' ]
})

updateNotifier({pkg: cli.pkg}).notify()

if (cli.input.length === 0 || cli.input.length < 3) {
  console.error('🤔  Provide emojis and text!')
  process.exit(1)
}

const [ bg, fg, ...text ] = cli.input
const row = cli.flags.row

console.log(emogifyText({ bg, fg, row }, text.join(' ')))
process.exit(0)
