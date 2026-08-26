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
            <h3>📋 Intelligent Paper 📋</h3>
            <p>
              This activity turns a person into a rule-following "computer" — no screens needed! It's a hands-on way to see what <strong>symbolic AI</strong> looks like from the inside, and it's a nice contrast with the "Sweet Learning Computer" in the <Link to="/machine-learning">Machine Learning</Link> activity: this "computer" never learns, it just follows the rules it was given.
            </p>
            <img src={asset('images/intelligent-paper-rules.png')} alt="Two players at a table: one follows a written rule sheet to play Tic-Tac-Toe as 'the computer'" className="activity-image" />
            <div className="activity-visual">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <p>Draw up a Tic-Tac-Toe rule sheet: for each board shape you might see, write down the one best move.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <p>One player becomes "the computer" and may only move by matching the board to a rule on the sheet.</p>
                  <small>No thinking allowed — just look up the rule and follow it exactly.</small>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <p>The other player plays normally and tries to beat "the computer."</p>
                  <small>Discuss: did it play well? Did it ever feel "smart," even though it never learned anything?</small>
                </div>
              </div>
            </div>
            <h4>You will need:</h4>
            <ul>
              <li>A Tic-Tac-Toe rule sheet (a numbered list of board positions and the move for each one)</li>
              <li>A pencil and paper (or a printed Tic-Tac-Toe grid) to play on</li>
              <li>A friend to play against "the computer"</li>
            </ul>
            <h4>How to Play:</h4>
            <ol>
              <li>You are "the computer." Your friend is the player and goes first.</li>
              <li>After each of your friend's moves, find the rule on your sheet that matches the current board and make that move — nothing else.</li>
              <li>Keep playing until someone wins or the board is full.</li>
              <li>Talk about it afterward: "the computer" only ever followed instructions someone else wrote in advance. That's the heart of rule-based, symbolic AI!</li>
            </ol>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
