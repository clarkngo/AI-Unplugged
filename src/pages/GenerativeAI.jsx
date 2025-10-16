import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function GenerativeAI() {
  return (
    <>
      <div className="header"><h1>🎨 Generative AI ✍️</h1></div>
      <Breadcrumbs trail="Generative AI" />
      <div className="container">
        <div className="lesson-content">
          <h1>Creating with AI</h1>
          <p>
            Imagine an AI that can draw a picture of a purple elephant flying in space, or write a story about a brave knight who is friends with a dragon. That's Generative AI! It's a type of AI that can create brand new things, like images, music, and stories.
          </p>

          <h2>What's it all about?</h2>
          <p>Generative AI learns from all the amazing things that humans have already created. It looks at millions of pictures, reads tons of books, and listens to all kinds of music. Then, it uses what it has learned to create something completely new! It's like a super-powered artist or writer that can mix and match ideas in new and surprising ways.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Art Tools:</strong> There are now AI tools that can create amazing pictures from just a few words of description.</li>
            <li><strong>Music Composition:</strong> AI can be used to compose new songs in different styles, from classical to pop.</li>
            <li><strong>Writing Assistants:</strong> Some AI tools can help you write stories, poems, and even emails.</li>
            <li><strong>Game Design:</strong> Generative AI can be used to create new levels, characters, and worlds in video games.</li>
          </ul>

          <div className="interactive-activity">
            <h3>🎲 Story Dice 🎲</h3>
            <p>
              Let's try our own version of generative AI! We'll use dice to randomly generate ideas for a story.
            </p>
            <h4>You will need:</h4>
            <ul>
              <li>3 dice (or you can use an online dice roller)</li>
              <li>Paper and a pencil</li>
            </ul>
            <h4>How to Play:</h4>
            <p>We'll create a story with a character, a setting, and a problem. Roll a die for each one to see what you get!</p>
            <img src={asset('images/story-dice.svg')} alt="Story Dice Game" className="activity-image" />
            <ol>
              <li><strong>Roll for your character:</strong> Who is the hero of your story?</li>
              <li><strong>Roll for your setting:</strong> Where does your story take place?</li>
              <li><strong>Roll for the problem:</strong> What challenge does your character need to overcome?</li>
              <li>Now, write a story that includes all three elements! You've just created a new story, just like a generative AI.</li>
            </ol>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
