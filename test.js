import test from 'tape'
import { spawn, execFileSync } from 'child_process'
import { readFileSync } from 'fs'

const bin = './bin/emojify-text'

test('main', ({ equal, error, end }) => {
  const cp = spawn(bin, {
    cwd: __dirname,
    stdio: 'inherit'
  })

  cp.on('error', err => error(err, 'should not fail'))
  cp.on('close', code => {
    equal(code, 1, 'should exit without args')
    end()
  })
})

test('render', ({ equal, end }) => {
  const expected = readFileSync('fixtures/column.txt', 'utf8')
  const stdout = execFileSync(bin, [ '⭐️', '💙', 'test' ], {
    cwd: __dirname
  })

  equal(stdout.toString(), expected, 'should render')
  end()
})

test('rest params', ({ equal, end }) => {
  const expected = readFileSync('fixtures/parts.txt', 'utf8')
  const stdout = execFileSync(bin, [ '⭐️', '💙', 'I', 'love', 'emojis' ], {
    cwd: __dirname
  })

  equal(stdout.toString(), expected, 'should join parts')
  end()
})

test('row', ({ equal, end }) => {
  const expected = readFileSync('fixtures/row.txt', 'utf8')
  const rowFlag = execFileSync(bin, [ '--row', '⭐️', '💙', 'test' ], {
    cwd: __dirname
  })
  const rFlag = execFileSync(bin, [ '-r', '⭐️', '💙', 'test' ], {
    cwd: __dirname
  })

  equal(rowFlag.toString(), expected, '--row flag')
  equal(rFlag.toString(), expected, '-r flag')
  end()
})
