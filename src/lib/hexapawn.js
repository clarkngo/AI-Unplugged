// Hexapawn (Martin Gardner, 1962) on a 3×3 board.
// Board: array of 9 cells, index = row * 3 + col, row 0 at the top.
// 'B' = computer pawns (start on the top row, move down),
// 'W' = player pawns (start on the bottom row, move up), '' = empty.
// The player always moves first, so the computer moves on turns 2, 4 and 6.

// Candy colour for the 1st, 2nd, 3rd and 4th possible move in a box.
export const MOVE_COLORS = [
  { name: 'Red', hex: '#dc2626' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Yellow', hex: '#ca8a04' },
]

export const START = ['B', 'B', 'B', '', '', '', 'W', 'W', 'W']

const dir = (side) => (side === 'B' ? 1 : -1)
const other = (side) => (side === 'B' ? 'W' : 'B')

export function legalMoves(board, side) {
  const moves = []
  const d = dir(side)
  board.forEach((cell, i) => {
    if (cell !== side) return
    const r = Math.floor(i / 3)
    const c = i % 3
    const nr = r + d
    if (nr < 0 || nr > 2) return
    if (board[nr * 3 + c] === '') moves.push({ from: i, to: nr * 3 + c })
    for (const nc of [c - 1, c + 1]) {
      if (nc >= 0 && nc <= 2 && board[nr * 3 + nc] === other(side)) {
        moves.push({ from: i, to: nr * 3 + nc })
      }
    }
  })
  return moves
}

export function applyMove(board, { from, to }) {
  const next = board.slice()
  next[to] = next[from]
  next[from] = ''
  return next
}

// True if `side` has just won by making the move that produced `board`.
export function hasWon(board, side) {
  const farRow = side === 'B' ? [6, 7, 8] : [0, 1, 2]
  if (farRow.some((i) => board[i] === side)) return true
  if (!board.includes(other(side))) return true
  return legalMoves(board, other(side)).length === 0
}

const mirror = (board) => board.map((_, i) => board[Math.floor(i / 3) * 3 + (2 - (i % 3))])
const key = (board) => board.map((c) => c || '.').join('')

// Every distinct position the computer can face (mirror images count once),
// grouped by the turn it happens on, each with the computer's legal moves.
// These are the matchboxes.
export function computerPositions() {
  const seen = new Map()
  const walk = (board, turn) => {
    // Player to move on odd turns.
    for (const pm of legalMoves(board, 'W')) {
      const afterPlayer = applyMove(board, pm)
      if (hasWon(afterPlayer, 'W')) continue
      const k = key(afterPlayer)
      const km = key(mirror(afterPlayer))
      if (!seen.has(k) && !seen.has(km)) {
        seen.set(k, { board: afterPlayer, turn: turn + 1, moves: legalMoves(afterPlayer, 'B') })
      }
      for (const cm of legalMoves(afterPlayer, 'B')) {
        const afterComputer = applyMove(afterPlayer, cm)
        if (!hasWon(afterComputer, 'B')) walk(afterComputer, turn + 2)
      }
    }
  }
  walk(START, 1)
  return [...seen.values()].sort((a, b) => a.turn - b.turn)
}
