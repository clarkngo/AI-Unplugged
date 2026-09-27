// Pixel Pictures: a picture stored the way a computer stores it — rows of
// numbers, 1 for a coloured square and 0 for a blank one.

export const PIXEL_PUZZLE = {
  answer: 'a robot face',
  rows: [
    '0000110000',
    '0000110000',
    '0111111110',
    '0100000010',
    '0101001010',
    '0100000010',
    '0101111010',
    '0100000010',
    '0111111110',
    '0000000000',
  ],
}

// Run-length encoding: each row as counts of alternating 0s and 1s, always
// starting with 0s (so a row that starts with a 1 begins with a count of 0).
export function runLengths(row) {
  const counts = []
  let current = '0'
  let n = 0
  for (const bit of row) {
    if (bit === current) n++
    else {
      counts.push(n)
      current = bit
      n = 1
    }
  }
  counts.push(n)
  return counts
}
