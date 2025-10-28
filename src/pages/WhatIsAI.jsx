import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function WhatIsAI() {
  return (
    <>
      <div className="header"><h1>🧠 What is AI? 🤔</h1></div>
      <Breadcrumbs trail="What is AI?" />
      <div className="container">
        <div className="lesson-content">
          <h1>What in the World is Artificial Intelligence?</h1>
          <p>
            Imagine if your toys could think and learn, just like you! That's kind of what Artificial Intelligence, or AI, is all about. It's like giving a computer a "brain" so it can solve problems, play games, and even be creative!
          </p>
          <h2>What's it all about?</h2>
          <p>AI is a big topic, but at its heart, it's about making computers smart. We can do this in a few ways. Sometimes, we give the computer a set of rules to follow, like in the "Intelligent Paper" game. This is called <strong>symbolic AI</strong> or <strong>rule-based AI</strong>. The computer isn't really "thinking" for itself, but it can seem very smart by following the rules perfectly.</p>
          <p>Other times, we want the computer to learn on its own, like we do. This is called <strong>machine learning</strong>. We show the computer lots of examples of something, and it learns to recognize patterns. For example, if you show a computer thousands of pictures of cats, it will eventually learn to recognize a cat on its own!</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Smart Assistants:</strong> When you talk to a smart speaker like Alexa or Siri, you're using AI. They use AI to understand your voice and answer your questions.</li>
            <li><strong>Games:</strong> The characters in your video games that play against you are often controlled by AI. They are programmed to be challenging and fun to play against.</li>
            <li><strong>Self-Driving Cars:</strong> These cars use AI to "see" the world around them and make decisions about how to drive safely.</li>
            <li><strong>Movie Recommendations:</strong> When Netflix or Disney+ suggests a movie you might like, that's AI at work! It learns what you like to watch and suggests similar movies.</li>
          </ul>

          <div className="interactive-activity">
            <h3>🤖 Let's Play "Intelligent Paper"! 📝</h3>
            <p>
              This is a super fun game from AI Unplugged that shows how something as simple as a piece of paper can seem "intelligent" if it has the right instructions.
            </p>
            <div className="activity-visual">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <p>Draw a Tic-Tac-Toe board on paper.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <p>Player places X anywhere; that's their move.</p>
                  <small>Observe the choice — the paper (computer) will respond using rules.</small>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <p>Follow the paper's rule table to place O and continue play.</p>
                  <small>Repeat games to see the behaviour emerge.</small>
                </div>
              </div>
            </div>
            <h4>You will need:</h4>
            <ul>
              <li>A piece of paper</li>
              <li>A pencil or pen</li>
              <li>A friend to play with</li>
            </ul>
            <h4>How to Play:</h4>
            <p>This game is like Tic-Tac-Toe, but the paper has a secret... it can't lose! You will be the "computer" and your friend will be the "player".</p>
            <ol>
              <li>Draw a Tic-Tac-Toe board on your paper.</li>
              <li>The player goes first, putting an X in any square.</li>
              <li>Now it's your turn to be the computer! Follow these rules to decide where to put your O:</li>
            </ol>
            <img src={asset('images/intelligent-paper-rules.png')} alt="Intelligent Paper Game Rules" className="activity-image" />
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
