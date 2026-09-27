// The Next-Word Machine: a tiny bigram language model built by hand.
// For every word in the training story, list the words that came right after
// it. Picking the next word at random from that list is exactly what a
// bigram model does; big language models do the same job with far more
// context and far more text.

export const TRAINING_STORY = [
  'the cat sat on the mat.',
  'the dog sat on the log.',
  'the cat saw the dog.',
  'the dog saw the cat.',
  'the cat ran to the log.',
]

export const END = '.'

// Returns [{ word, next: [{ word, count }] }] in order of first appearance.
export function buildNextWordTable(sentences = TRAINING_STORY) {
  const table = new Map()
  for (const sentence of sentences) {
    const words = sentence.replace(/\./g, ` ${END}`).split(/\s+/).filter(Boolean)
    for (let i = 0; i < words.length - 1; i++) {
      const w = words[i]
      if (!table.has(w)) table.set(w, new Map())
      const counts = table.get(w)
      counts.set(words[i + 1], (counts.get(words[i + 1]) || 0) + 1)
    }
  }
  return [...table].map(([word, counts]) => ({
    word,
    next: [...counts].map(([next, count]) => ({ word: next, count })),
  }))
}
