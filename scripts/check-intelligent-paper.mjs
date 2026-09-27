// Brute-force check: the Intelligent Paper rules never lose — against every
// opponent, whoever goes first, and whichever allowed square the paper picks —
// and every rule on the sheet actually gets used. Run with `npm run check:paper`.
import { paperOptions, winner, RULES } from '../src/lib/tictactoe.js'

const used = new Set()
let games = 0
let losses = 0
let wins = 0

function play(board, paperTurn) {
  const w = winner(board)
  const full = Object.keys(board).length === 9
  if (w || full) {
    games++
    if (w === 'them') losses++
    if (w === 'me') wins++
    return
  }
  if (paperTurn) {
    // Try every square the matching rule allows.
    const { squares, rule } = paperOptions(board)
    used.add(rule)
    for (const square of squares) play({ ...board, [square]: 'me' }, false)
  } else {
    for (let sq = 1; sq <= 9; sq++) {
      if (!board[sq]) play({ ...board, [sq]: 'them' }, true)
    }
  }
}

play({}, true)
play({}, false)

const unused = RULES.map((_, i) => i + 1).filter((r) => !used.has(r))
console.log(`${games} games vs every possible opponent: ${wins} paper wins, ${losses} paper losses`)
if (unused.length) console.log(`rules never used: ${unused.join(', ')}`)
if (losses || unused.length) process.exit(1)
