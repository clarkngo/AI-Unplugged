import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function Robotics() {
  return (
    <>
      <div className="header"><h1>🤖 Robotics 🦾</h1></div>
      <Breadcrumbs trail="Robotics" />
      <div className="container">
        <div className="lesson-content">
          <h1>AI and Robots</h1>
          <p>
            What do you think of when you hear the word "robot"? You might think of a walking, talking machine from a movie. But robots are all around us, and many of them are powered by AI!
          </p>

          <h2>What's it all about?</h2>
          <p>Robotics is the science of designing, building, and programming robots. A robot is a machine that can be programmed to do a series of actions. But a robot with AI is much more than just a machine. It can learn, make decisions, and interact with the world in amazing ways.</p>
          <p>AI gives robots their "brains". It allows them to see with cameras (computer vision), understand our commands (natural language processing), and learn from their experiences (machine learning). Without AI, a robot is just a puppet. With AI, a robot can become a partner.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Manufacturing:</strong> Robots are used in factories to build cars, computers, and other products. They can do repetitive tasks quickly and accurately.</li>
            <li><strong>Healthcare:</strong> Robots can be used to help doctors perform surgery with more precision. They can also help people who have lost a limb to move again.</li>
            <li><strong>Exploration:</strong> We send robots to explore places that are too dangerous for humans, like other planets, deep oceans, and even active volcanoes!</li>
            <li><strong>At Home:</strong> You might have a robot vacuum cleaner at home that uses AI to navigate around your furniture and clean your floors.</li>
          </ul>

          <div className="interactive-activity">
            <h3>✏️ Design a Robot ✏️</h3>
            <p>
              Let's design a robot to solve a problem! What kind of robot would you build?
            </p>
            <div className="activity-visual">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <p>Choose a chore your robot will solve (e.g., tidy room).</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <p>Sketch the robot and label sensors (cameras, microphones) and actuators (wheels, grippers).</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <p>Write a short list of instructions the robot follows; test with a role-play.</p>
                  <small>Role-play as the robot to find gaps in the instructions.</small>
                </div>
              </div>
            </div>
            <img src={asset('images/robot-design.png')} alt="Robot Design Activity" className="activity-image" />
            <h4>Your Mission:</h4>
            <p>Design a robot that can help you with a chore you don't like to do. For example, a robot that cleans your room, does your homework, or walks the dog.</p>
            <h4>Think about:</h4>
            <ul>
              <li><strong>What is your robot's name?</strong></li>
              <li><strong>What does it look like?</strong> Draw a picture of your robot.</li>
              <li><strong>What is its job?</strong> What chore does it do?</li>
              <li><strong>What sensors does it need?</strong> Does it need eyes (cameras)? Ears (microphones)? Hands (grippers)?</li>
              <li><strong>What instructions would you give it?</strong> How would you program it to do its job?</li>
            </ul>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
