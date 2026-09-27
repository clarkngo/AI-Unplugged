import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import {
  HexapawnMatchboxCards,
  IntelligentPaperRules,
  StoryDiceTables,
  NextWordTrainingStory,
  NextWordTable,
} from '../components/ActivityPrintables'

// eslint-disable-next-line react-refresh/only-export-components
export const PRINTABLES = [
  {
    slug: 'hexapawn',
    icon: '🍬',
    title: 'Sweet Learning Computer cards',
    summary: 'One card per matchbox, with a coloured arrow for every move the computer can make.',
    lesson: { to: '/machine-learning', label: 'Machine Learning' },
    body: <HexapawnMatchboxCards />,
  },
  {
    slug: 'intelligent-paper',
    icon: '📋',
    title: 'Intelligent Paper rule sheet',
    summary: 'Eight Tic-Tac-Toe rules that never lose — checked by computer against every possible game.',
    lesson: { to: '/what-is-ai', label: 'What is AI?' },
    body: <IntelligentPaperRules />,
  },
  {
    slug: 'story-dice',
    icon: '🎲',
    title: 'Story Dice tables',
    summary: 'What each roll means for your character, setting and problem.',
    lesson: { to: '/generative-ai', label: 'Generative AI' },
    body: <StoryDiceTables />,
  },
  {
    slug: 'next-word',
    icon: '🔤',
    title: 'Next-Word Machine cups',
    summary: 'The training story, plus every cup label and the word slips that go inside it.',
    lesson: { to: '/nlp', label: 'Natural Language Processing' },
    body: (
      <>
        <h3>Training story</h3>
        <NextWordTrainingStory />
        <h3>Cups and slips</h3>
        <NextWordTable />
      </>
    ),
  },
]

export default function PrintableSheet({ slug }) {
  const sheet = PRINTABLES.find((p) => p.slug === slug)
  return (
    <>
      <div className="header no-print">
        <h1>{sheet.icon} {sheet.title}</h1>
        <p>{sheet.summary}</p>
      </div>
      <Breadcrumbs trail={[{ label: 'Printables', to: '/printables' }, sheet.title]} />
      <div className="container">
        <div className="lesson-content printable">
          <h2 className="lesson-title">{sheet.title}</h2>
          {sheet.body}
          <p className="muted print-footer">AI Unplugged · clarkngo.github.io/AI-Unplugged · CC BY 4.0</p>
          <div className="no-print">
            <button type="button" className="print-btn" onClick={() => window.print()}>🖨️ Print this sheet</button>
            <p><Link to={sheet.lesson.to}>How to play: see the {sheet.lesson.label} lesson →</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}
