import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function NLP() {
  return (
    <>
      <div className="header"><h1>🗣️ Natural Language Processing 💬</h1></div>
      <Breadcrumbs trail="Natural Language Processing" />
      <div className="container">
        <div className="lesson-content">
          <h1>How Computers "Talk"</h1>
          <p>
            Isn't it cool when you can talk to a computer and it understands you? That's called Natural Language Processing, or NLP for short. It's all about teaching computers to understand and use human languages.
          </p>

          <h2>What's it all about?</h2>
          <p>Natural Language Processing is a type of AI that helps computers understand, interpret, and generate human language. It's a tricky thing to do, because human language is full of slang, and context matters a lot! For example, if you say "I'm feeling blue," a computer needs to understand that you mean you're sad, not that you are the color blue.</p>
          <p>NLP uses machine learning to learn the patterns of language. By analyzing huge amounts of text and speech, computers can learn to translate languages, answer questions, and even write their own stories. The "Brain-in-a-Bag" activity is a simple way to think about how a computer can learn to make better guesses over time, which is a key part of how NLP works.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Smart Assistants:</strong> Siri, Alexa, and Google Assistant all use NLP to understand what you're saying.</li>
            <li><strong>Translation Apps:</strong> Google Translate and other apps use NLP to translate between different languages.</li>
            <li><strong>Autocorrect and Spell Check:</strong> When your phone or computer suggests a correction for a misspelled word, that's NLP in action.</li>
            <li><strong>Chatbots:</strong> Many websites have chatbots that can answer your questions. These chatbots use NLP to understand what you're asking and provide a helpful response.</li>
          </ul>

            <div className="interactive-activity">
            <h3>🧠 The Brain-in-a-Bag 🛍️</h3>
            <p>
              This AI Unplugged activity is a fun way to see how a neural network can be "programmed" to learn.
            </p>
              <div className="activity-visual">
                <div className="step">
                  <div className="step-num">1</div>
                  <div className="step-body">
                    <p>Start with an equal number of colored beads in a bag.</p>
                    <img src={asset('images/brain-in-a-bag-start.png')} alt="Brain-in-a-bag — start" />
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div className="step-body">
                    <p>Guess which color your friend picked by drawing a bead.</p>
                    <small>Correct guesses are rewarded by adding a bead of that color.</small>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div className="step-body">
                    <p>Over repeated plays the bag's distribution shifts toward the chosen color.</p>
                    <small>This models how a simple learning process updates its internal state.</small>
                  </div>
                </div>
              </div>
            <h4>You will need:</h4>
            <ul>
              <li>A bag</li>
              <li>Many small items of two different colors (e.g., red and black beads)</li>
              <li>A friend to play with</li>
            </ul>
            <h4>How to Play:</h4>
            <p>This game simulates a simple neural network. The bag is the "brain", and the beads are like "neurons".</p>
            <ol>
              <li>Start with an equal number of red and black beads in the bag.</li>
              <li>Your friend will secretly pick a color (red or black).</li>
              <li>You will try to guess the color your friend picked.</li>
              <li>Reach into the bag and pull out a bead. The color of the bead is your guess.</li>
              <li>If you guessed correctly, your friend says "Yes!". To reward the "brain", you put the bead back in the bag and add another bead of the same color.</li>
              <li>If you guessed incorrectly, your friend says "No!". To "punish" the brain, you take the bead out of the bag.</li>
              <li>Play again! Over time, the bag will have more of the color that your friend picked, and you will be more likely to guess correctly. The "brain" has learned!</li>
            </ol>
            <img src={asset('images/brain-in-a-bag-end.png')} alt="Brain in a Bag — result" className="activity-image" />
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
