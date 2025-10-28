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
            <h3>Try an Activity</h3>
            <p>If you'd like to see these ideas in action, try one of the hands-on activities in the Activities section — for example the <Link to="/machine-learning">Machine Learning</Link> activity explores how simple rules and learning can create surprising behaviour.</p>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
