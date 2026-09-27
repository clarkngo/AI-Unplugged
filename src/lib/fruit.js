// The Biased Fruit Sorter. Cards show colour and shape on the front and skin
// on the back. In the lopsided training set colour is the only feature that
// sorts every card correctly, so that is the "shortcut" a model learns.

export const FEATURES = ['colour', 'shape', 'skin']

const card = (fruit, colour, shape, skin) => ({ fruit, colour, shape, skin })

export const TRAINING = [
  card('apple', 'red', 'round', 'smooth'),
  card('apple', 'red', 'round', 'smooth'),
  card('apple', 'red', 'round', 'smooth'),
  card('apple', 'red', 'tall', 'smooth'),
  card('lemon', 'yellow', 'oval', 'bumpy'),
  card('lemon', 'yellow', 'oval', 'bumpy'),
  card('lemon', 'yellow', 'oval', 'bumpy'),
  card('lemon', 'yellow', 'round', 'bumpy'),
]

export const TEST = [
  card('apple', 'green', 'round', 'smooth'),
  card('apple', 'yellow', 'round', 'smooth'),
  card('lemon', 'yellow', 'oval', 'bumpy'),
  card('apple', 'red', 'tall', 'smooth'),
]

export const EXTRA_TRAINING = [
  card('apple', 'green', 'round', 'smooth'),
  card('apple', 'yellow', 'round', 'smooth'),
  card('apple', 'yellow', 'tall', 'smooth'),
]

// Features whose values never appear on both fruits in `cards` — i.e. a
// one-feature rule that sorts every card correctly.
export function perfectFeatures(cards, features = FEATURES) {
  return features.filter((f) => {
    const seen = new Map()
    return cards.every((c) => {
      const prev = seen.get(c[f])
      seen.set(c[f], c.fruit)
      return prev === undefined || prev === c.fruit
    })
  })
}
