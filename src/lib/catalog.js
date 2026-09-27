// The single source of truth for what the site teaches: lessons, activities,
// grade bands and the AI4K12 Five Big Ideas each activity covers. Home, the
// Lessons, Activities and Big Ideas pages, and every activity header read
// from here — add a new activity here first.

// AI4K12 "Five Big Ideas in AI" (AI4K12 Initiative, AAAI & CSTA).
export const BIG_IDEAS = [
  {
    id: 'perception',
    number: 1,
    icon: '👀',
    name: 'Perception',
    summary: 'Computers perceive the world using sensors — but they only ever get numbers, not meaning.',
  },
  {
    id: 'representation',
    number: 2,
    icon: '🧩',
    name: 'Representation & Reasoning',
    summary: 'Agents keep a model of the world and use it to reason and make decisions.',
  },
  {
    id: 'learning',
    number: 3,
    icon: '💡',
    name: 'Learning',
    summary: 'Computers can learn from data and feedback instead of being told every rule.',
  },
  {
    id: 'interaction',
    number: 4,
    icon: '🗣️',
    name: 'Natural Interaction',
    summary: 'Making agents that talk and interact naturally with people is hard, and they don’t really understand.',
  },
  {
    id: 'impact',
    number: 5,
    icon: '🤝',
    name: 'Societal Impact',
    summary: 'AI can help or harm people, and we all get a say in how it is used.',
  },
]

export const GRADE_BANDS = [
  { id: 'k4', label: 'K 1–4', path: '/k-1-4' },
  { id: '58', label: 'K 5–8', path: '/k-5-8' },
  { id: '912', label: 'K 9–12', path: '/k-9-12' },
]

export const LESSONS = [
  { path: '/what-is-ai', icon: '🧠', title: 'What is AI?', blurb: 'Discover the secrets of what makes a computer "smart" — start here!' },
  { path: '/machine-learning', icon: '💡', title: 'Machine Learning', blurb: 'Learn how computers can learn from mistakes, just like you!' },
  { path: '/computer-vision', icon: '👀', title: 'Computer Vision', blurb: 'How do computers see and understand the world around them?' },
  { path: '/nlp', icon: '🗣️', title: 'Natural Language Processing', blurb: 'How does a computer understand words — and write its own?' },
  { path: '/generative-ai', icon: '🎨', title: 'Generative AI', blurb: 'Can a computer be creative? Explore how AI makes stories and art.' },
  { path: '/ai-ethics', icon: '🤝', title: 'AI Ethics', blurb: 'With great power comes great responsibility. Is the AI being fair?' },
  { path: '/robotics', icon: '🤖', title: 'Robotics', blurb: 'Discover how AI gives robots their "brains" and brings them to life.' },
]

// `lesson` is the page the activity lives on; `id` is its anchor there.
// `printable` is a slug under /printables. `minutes` is a typical range.
export const ACTIVITIES = [
  {
    id: 'intelligent-paper',
    icon: '📋',
    title: 'Intelligent Paper',
    lesson: '/what-is-ai',
    summary: 'Play Tic-Tac-Toe against a sheet of rules that never loses.',
    bigIdeas: ['representation'],
    grades: ['k4', '58'],
    minutes: '20–30',
    printable: 'intelligent-paper',
  },
  {
    id: 'learning-bag',
    icon: '🎒',
    title: 'The Learning Bag',
    lesson: '/machine-learning',
    summary: 'A bag of beads learns your secret colour from “yes” and “no”.',
    bigIdeas: ['learning'],
    grades: ['k4', '58'],
    minutes: '15–20',
  },
  {
    id: 'sweet-learning-computer',
    icon: '🍬',
    title: 'The Sweet Learning Computer',
    lesson: '/machine-learning',
    summary: 'Cups of candy learn to play Hexapawn until they can’t be beaten.',
    bigIdeas: ['learning', 'representation'],
    grades: ['58', '912'],
    minutes: '40–60',
    printable: 'hexapawn',
  },
  {
    id: 'mystery-box',
    icon: '📦',
    title: 'Mystery Box',
    lesson: '/k-5-8',
    summary: 'Work out the hidden rule inside a “black box” from its inputs and outputs.',
    bigIdeas: ['learning', 'representation'],
    grades: ['58'],
    minutes: '30–45',
  },
  {
    id: 'feature-questions',
    icon: '🔎',
    title: 'I Spy with Feature Questions',
    lesson: '/k-5-8',
    summary: 'Build a decision tree out of yes/no questions about features.',
    bigIdeas: ['representation', 'learning'],
    grades: ['58'],
    minutes: '25–35',
  },
  {
    id: 'create-a-face',
    icon: '🎨',
    title: 'Create-a-Face',
    lesson: '/computer-vision',
    summary: 'Write rules that tell happy, sad and surprised faces apart.',
    bigIdeas: ['perception', 'representation'],
    grades: ['k4'],
    minutes: '30–40',
  },
  {
    id: 'pixel-pictures',
    icon: '🟦',
    title: 'Pixel Pictures',
    lesson: '/computer-vision',
    summary: 'Decode a grid of 1s and 0s into a picture — the way a camera “sees”.',
    bigIdeas: ['perception', 'representation'],
    grades: ['k4', '58'],
    minutes: '20–30',
    printable: 'pixel-pictures',
  },
  {
    id: 'next-word-machine',
    icon: '🔤',
    title: 'The Next-Word Machine',
    lesson: '/nlp',
    summary: 'Build a paper-cup language model that writes brand-new sentences.',
    bigIdeas: ['interaction', 'learning'],
    grades: ['58', '912'],
    minutes: '30–45',
    printable: 'next-word',
  },
  {
    id: 'next-word-python',
    icon: '🐍',
    title: 'Code the Next-Word Machine',
    lesson: '/nlp',
    summary: 'Turn the paper-cup model into about 20 lines of Python, then feed it your own text.',
    bigIdeas: ['interaction', 'learning'],
    grades: ['912'],
    minutes: '45–60',
  },
  {
    id: 'story-dice',
    icon: '🎲',
    title: 'Story Dice',
    lesson: '/generative-ai',
    summary: 'Roll for a character, setting and problem, then write the story.',
    bigIdeas: ['interaction'],
    grades: ['k4', '58'],
    minutes: '20–30',
    printable: 'story-dice',
  },
  {
    id: 'fair-or-unfair',
    icon: '⚖️',
    title: 'Fair or Unfair?',
    lesson: '/ai-ethics',
    summary: 'Decide whether an AI is being fair, and how to fix it if not.',
    bigIdeas: ['impact'],
    grades: ['k4', '58', '912'],
    minutes: '20–45',
  },
  {
    id: 'biased-sorter',
    icon: '🍎',
    title: 'The Biased Fruit Sorter',
    lesson: '/ai-ethics',
    summary: 'Train a “model” on lopsided examples and watch it get things wrong.',
    bigIdeas: ['impact', 'learning'],
    grades: ['58', '912'],
    minutes: '25–35',
    printable: 'fruit-sorter',
  },
  {
    id: 'design-a-robot',
    icon: '✏️',
    title: 'Design a Robot',
    lesson: '/robotics',
    summary: 'Design a helper robot: what it senses, how it decides, what it does.',
    bigIdeas: ['perception', 'representation'],
    grades: ['k4', '58', '912'],
    minutes: '30–60',
  },
]

export const activityById = (id) => ACTIVITIES.find((a) => a.id === id)
export const bigIdeaById = (id) => BIG_IDEAS.find((b) => b.id === id)
export const gradeById = (id) => GRADE_BANDS.find((g) => g.id === id)
export const activityLink = (a) => `${a.lesson}?a=${a.id}`
