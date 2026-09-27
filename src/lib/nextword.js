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

// The same machine in Python, for the "Code the Next-Word Machine" activity.
export const PYTHON_LISTING = `import random
from collections import defaultdict

story = """${TRAINING_STORY.join('\n')}"""

# 1. Training: for every word, collect the words that came right after it.
words = story.replace(".", " .").split()
next_words = defaultdict(list)
for word, following in zip(words, words[1:]):
    if word != ".":
        next_words[word].append(following)

# 2. Writing: start at "the" and keep drawing a random next word
#    until we draw a full stop.
def write_sentence(start="the"):
    sentence = [start]
    while sentence[-1] != ".":
        sentence.append(random.choice(next_words[sentence[-1]]))
    return " ".join(sentence[:-1]) + "."

print(dict(next_words))
for _ in range(5):
    print(write_sentence())
`
