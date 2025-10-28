import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function HowToTeach() {
  return (
    <>
      <div className="header">
        <h1>🎓 How to Teach AI Unplugged 🎒</h1>
        <p>A guide for educators and parents.</p>
      </div>
      <Breadcrumbs trail="How to Teach AI Unplugged" />
      <div className="container">
        <div className="lesson-content">
          <h1>Why Teach AI Without a Computer?</h1>
          <p>AI Unplugged activities are designed to teach the core concepts of Artificial Intelligence without using computers. This approach has several benefits:</p>
          <ul>
            <li><strong>Accessible to Everyone:</strong> No need for expensive hardware or high-speed internet.</li>
            <li><strong>Focus on Concepts:</strong> By removing the technical jargon and code, learners can focus on the fundamental ideas behind AI.</li>
            <li><strong>Engaging and Fun:</strong> Activities are hands-on, collaborative, and often feel like playing a game.</li>
            <li><strong>Develops Computational Thinking:</strong> These activities build skills like problem-solving, decomposition, and algorithmic thinking.</li>
          </ul>

          <div className="interactive-activity">
            <h3>Getting Started: Core Principles</h3>
            <p>The best way to start is by exploring the fundamental questions. What does it mean for a machine to be "intelligent"? How can we give instructions to a computer? Our "What is AI?" lesson is a great starting point.</p>
            <Link to="/what-is-ai" className="back-link">Explore "What is AI?"</Link>
          </div>

          <h2>Unplugged Activity Examples</h2>
          <p>Many AI topics can be explored through simple and fun activities that you can do right in a classroom or at home. Here are a few ideas based on the lessons on this site:</p>

          <h3>Machine Learning: The "Intelligent Piece of Paper"</h3>
          <p>This classic activity demonstrates how a machine can "learn" to play a game. Students play a simple game like Hexapawn against a "machine" made of matchboxes or paper. The machine learns from its mistakes and eventually becomes an unbeatable player. This teaches the core concept of reinforcement learning.</p>
          <img src={asset('images/intelligent-paper-rules.svg')} alt="Intelligent Paper Game Rules" className="activity-image" />
          <Link to="/machine-learning" className="back-link">See Machine Learning in Action</Link>

          <h3>Computer Vision: "I Spy" with a Twist</h3>
          <p>How does a computer "see"? Play a game of "I Spy" where one person (the "computer") can only ask yes/no questions about simple features like shapes, colors, and textures. This simulates how a computer vision model breaks down an image into simple, recognizable patterns.</p>
          <img src={asset('images/happy-face.svg')} alt="Happy Face" className="activity-image" />
          <Link to="/computer-vision" className="back-link">Learn About Computer Vision</Link>

          <h3>Generative AI: Story Dice</h3>
          <p>Generative AI creates new things. A simple way to understand this is with story dice. Each die has a different picture on it. Roll the dice and create a story based on the pictures that come up. This mimics how a generative model uses a set of rules and data to generate new, creative outputs.</p>
          <img src={asset('images/story-dice.svg')} alt="Story Dice Game" className="activity-image" />
          <Link to="/generative-ai" className="back-link">Discover Generative AI</Link>

          <h3>NLP: Brain-in-a-Bag</h3>
          <p>Brain-in-a-Bag is a simple, tactile way to explore how models form guesses from data. Students place tokens (beads, counters or cards) into a bag and other students try to guess properties by sampling. Over repeated rounds you can observe how the distribution of guesses changes — a small model of learning and bias.</p>
          <div className="activity-visual">
            <div className="step">
              <img src={asset('images/brain-in-a-bag-start.svg')} alt="Brain-in-a-bag — start" />
              <div className="step-body">Start: set up the bag with a mix of tokens representing the data the model will see.</div>
            </div>
            <div className="step">
              <img src={asset('images/brain-in-a-bag-end.svg')} alt="Brain-in-a-bag — end" />
              <div className="step-body">End: after several rounds of guessing and feedback, compare how the guesses (and model behaviour) shifted.</div>
            </div>
          </div>
          <Link to="/nlp" className="back-link">Try Brain-in-a-Bag (NLP)</Link>

          <p>By using imagination and simple materials, you can unlock the complex world of AI for learners of all ages!</p>
        </div>
        <Link to="/" className="back-link">Back to All Lessons</Link>
      </div>
    </>
  )
}
