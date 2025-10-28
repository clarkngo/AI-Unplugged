import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Topics() {
  return (
    <>
      <div className="header"><h1>📚 AI Topics</h1><p>Core topics to organize lessons and curricula for AI learning.</p></div>
      <Breadcrumbs trail="Topics" />
      <div className="container">
        <div className="lesson-content">
          <p>This page maps topic areas commonly used to structure CS and AI learning. Use these topics to pick activities and build sequences for your learners.</p>

          <ul className="topics-list">
            <li>
              <h3>Algorithms &amp; Decomposition</h3>
              <p>Breaking problems into steps and designing simple procedures. (Link to <Link to="/what-is-ai">What is AI?</Link>)</p>
            </li>

            <li>
              <h3>Data &amp; Representation</h3>
              <p>How we represent examples and observations: counts, images, words and labels.</p>
            </li>

            <li>
              <h3>Patterns &amp; Models</h3>
              <p>Recognising patterns and describing them as rules or models — foundation for Machine Learning.</p>
            </li>

            <li>
              <h3>Search &amp; Strategy</h3>
              <p>Simple search problems and decision-making activities (games and puzzles).</p>
            </li>

            <li>
              <h3>Machine Learning</h3>
              <p>Training from examples, prediction and testing — see <Link to="/machine-learning">Machine Learning</Link> lessons.</p>
            </li>

            <li>
              <h3>Perception: Vision &amp; Language</h3>
              <p>How machines process images and text — Computer Vision and NLP activities.</p>
            </li>

            <li>
              <h3>Sensing &amp; Robotics</h3>
              <p>Connecting inputs to actions: sensors, actuators and embodied AI.</p>
            </li>

            <li>
              <h3>Ethics &amp; Society</h3>
              <p>Discuss bias, fairness, privacy and the social impact of AI — see <Link to="/ai-ethics">AI Ethics</Link>.</p>
            </li>

            <li>
              <h3>Creativity &amp; Generative Models</h3>
              <p>Exploring creative uses of AI for art, music and storytelling.</p>
            </li>

            <li>
              <h3>Evaluation &amp; Bias</h3>
              <p>How we test models and look for unintended consequences.</p>
            </li>
          </ul>

          <p className="muted">Use these topics to map individual activities into a coherent progression. Combine unplugged tasks with simple digital experiments for blended learning.</p>
        </div>
      </div>
    </>
  )
}
