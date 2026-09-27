// Draws a Hexapawn position as an SVG. Optional `moves` are drawn as numbered,
// coloured arrows — one colour per candy in that position's matchbox.
import { MOVE_COLORS } from '../lib/hexapawn'

const CELL = 56
const PAD = 6
const SIZE = CELL * 3 + PAD * 2

const center = (i) => ({
  x: PAD + (i % 3) * CELL + CELL / 2,
  y: PAD + Math.floor(i / 3) * CELL + CELL / 2,
})

export default function HexapawnBoard({ board, moves = [], size = 160, label }) {
  return (
    <svg
      className="hexapawn-board"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width={size}
      height={size}
      role="img"
      aria-label={label}
    >
      <defs>
        {MOVE_COLORS.map((c) => (
          <marker
            key={c.name}
            id={`arrow-${c.name}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="4"
            markerHeight="4"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill={c.hex} />
          </marker>
        ))}
      </defs>
      <rect x={PAD} y={PAD} width={CELL * 3} height={CELL * 3} fill="#fffdf7" stroke="#334155" strokeWidth="2" rx="3" />
      {[1, 2].map((n) => (
        <g key={n} stroke="#334155" strokeWidth="1.5">
          <line x1={PAD + n * CELL} y1={PAD} x2={PAD + n * CELL} y2={PAD + CELL * 3} />
          <line x1={PAD} y1={PAD + n * CELL} x2={PAD + CELL * 3} y2={PAD + n * CELL} />
        </g>
      ))}
      {board.map((cell, i) => {
        if (!cell) return null
        const { x, y } = center(i)
        return cell === 'B' ? (
          <circle key={i} cx={x} cy={y} r="14" fill="#1e293b" />
        ) : (
          <circle key={i} cx={x} cy={y} r="13" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
        )
      })}
      {moves.map((m, n) => {
        const a = center(m.from)
        const b = center(m.to)
        const color = MOVE_COLORS[n]
        // Shorten the arrow so it starts and ends at the pawn edges.
        const dx = b.x - a.x
        const dy = b.y - a.y
        const len = Math.hypot(dx, dy)
        const ux = dx / len
        const uy = dy / len
        // Put the number badge a little past halfway, clear of the starting pawn.
        const mx = a.x + dx * 0.55
        const my = a.y + dy * 0.55
        return (
          <g key={n}>
            <line
              x1={a.x + ux * 15}
              y1={a.y + uy * 15}
              x2={b.x - ux * 12}
              y2={b.y - uy * 12}
              stroke={color.hex}
              strokeWidth="4"
              markerEnd={`url(#arrow-${color.name})`}
            />
            <circle cx={mx} cy={my} r="8" fill="#ffffff" stroke={color.hex} strokeWidth="2" />
            <text x={mx} y={my + 3.8} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              {n + 1}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
