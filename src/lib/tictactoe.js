// The "Intelligent Paper" rule sheet for Tic-Tac-Toe, as data plus a function
// that follows it. Squares are numbered 1–9, left to right, top to bottom.
// scripts/check-intelligent-paper.mjs proves by brute force that following
// these rules never loses, whoever goes first and whichever allowed square
// is picked when a rule fits more than one.

export const LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7],
]
const CORNERS = [1, 3, 7, 9]
const EDGES = [2, 4, 6, 8]
const OPPOSITE = { 1: 9, 9: 1, 3: 7, 7: 3 }

export const RULES = [
  { title: 'Win', text: 'If you have two in a row and the third square is empty, take it. You win!' },
  { title: 'Block', text: 'If your opponent has two in a row and the third square is empty, take it.' },
  { title: 'Centre', text: 'If the centre square (5) is empty, take it.' },
  { title: 'Stop the corner trap', text: 'If your opponent has two opposite corners (1 and 9, or 3 and 7), take any empty edge (2, 4, 6 or 8).' },
  { title: 'Stop the edge trap', text: 'If your opponent has two edges that touch the same corner (like 2 and 4 touch 1), and that corner is empty, take that corner.' },
  { title: 'Opposite corner', text: 'If your opponent has a corner and the opposite corner is empty, take the opposite corner.' },
  { title: 'Any corner', text: 'Take any empty corner (1, 3, 7 or 9).' },
  { title: 'Anything', text: 'Take any empty square.' },
]

const EDGE_PAIRS_TO_CORNER = [
  [[2, 4], 1], [[2, 6], 3], [[4, 8], 7], [[6, 8], 9],
]

// board: { [square]: 'me' | 'them' } — returns { squares, rule }: the first
// rule (1-based) that fits and every square it allows. A person following the
// sheet may pick any of those squares; the checker tries them all.
export function paperOptions(board) {
  const empty = (s) => !board[s]
  const theirs = (sq) => board[sq] === 'them'
  const completing = (who) => {
    const gaps = new Set()
    for (const line of LINES) {
      const mine = line.filter((s) => board[s] === who)
      const gap = line.filter(empty)
      if (mine.length === 2 && gap.length === 1) gaps.add(gap[0])
    }
    return [...gaps]
  }
  const candidates = [
    () => completing('me'),
    () => completing('them'),
    () => (empty(5) ? [5] : []),
    () => ((theirs(1) && theirs(9)) || (theirs(3) && theirs(7)) ? EDGES.filter(empty) : []),
    () => EDGE_PAIRS_TO_CORNER.filter(([[a, b], c]) => theirs(a) && theirs(b) && empty(c)).map(([, c]) => c),
    () => CORNERS.filter((c) => theirs(c) && empty(OPPOSITE[c])).map((c) => OPPOSITE[c]),
    () => CORNERS.filter(empty),
    () => [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(empty),
  ]
  for (let i = 0; i < candidates.length; i++) {
    const squares = candidates[i]()
    if (squares.length) return { squares, rule: i + 1 }
  }
  return null
}

export function winner(board) {
  for (const line of LINES) {
    const [a, b, c] = line.map((sq) => board[sq])
    if (a && a === b && b === c) return a
  }
  return null
}
