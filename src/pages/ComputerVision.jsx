import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { asset } from '../utils/paths'

export default function ComputerVision() {
  return (
    <>
      <div className="header"><h1>👀 Computer Vision 🖼️</h1></div>
      <Breadcrumbs trail="Computer Vision" />
      <div className="container">
        <div className="lesson-content">
          <h1>How Computers "See"</h1>
          <p>
            How do you know a cat is a cat and a dog is a dog? You have eyes and a brain that's learned to tell the difference. Computer Vision is how we teach computers to do the same thing! We show the computer thousands of pictures of cats and dogs, and it learns to spot the differences.
          </p>
          <h2>What's it all about?</h2>
          <p>Computer vision is a field of AI that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they "see."</p>
          <p>Just like we use our eyes and our brains to understand the world, computers can use cameras and complex algorithms to do the same. They can learn to recognize faces, identify objects, and even understand the emotions of people in pictures and videos. The "Create-a-Face" activity is a great way to think about how we can break down emotions into simple rules that a computer can understand.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Facial Recognition:</strong> Your phone might use computer vision to unlock when it sees your face.</li>
            <li><strong>Self-Driving Cars:</strong> These cars use cameras and computer vision to see the road, read traffic signs, and avoid obstacles.</li>
            <li><strong>Medical Imaging:</strong> Doctors can use computer vision to analyze medical scans like X-rays and MRIs to find and diagnose diseases earlier and more accurately.</li>
            <li><strong>Augmented Reality (AR):</strong> Fun apps like Snapchat and Instagram use computer vision to put silly masks and filters on your face in real-time.</li>
          </ul>

            <div className="interactive-activity">
            <h3>🎨 Create-a-Face 🤪</h3>
            <p>
              This activity from AI Unplugged helps us think about how computers can recognize emotions.
            </p>
              <div className="activity-visual">
                <div className="step">
                  <div className="step-num">1</div>
                  <div className="step-body">
                    <p>Draw and cut out face parts (eyes, mouth, eyebrows).</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div className="step-body">
                    <p>Create simple rules that map parts to emotions (e.g., smile + wide eyes = happy).</p>
                    <small>Write the rule next to each combination so it's clear to a computer.</small>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div className="step-body">
                    <p>Mix parts to test different emotions and refine rules.</p>
                    <small>Use the surprised face example as a test case.</small>
                  </div>
                </div>
              </div>
            <h4>You will need:</h4>
            <ul>
              <li>Paper and markers or crayons</li>
              <li>Scissors</li>
              <li>Glue or tape</li>
            </ul>
            <h4>How to Play:</h4>
            <p>Let's create a robot face that can show different emotions, just like a computer would!</p>
            <ol>
              <li>Draw and cut out a big circle for the face.</li>
              <li>Draw and cut out different kinds of eyes, mouths, and eyebrows. Make happy eyes, sad eyes, surprised eyes. Make a happy mouth, a sad mouth, and a surprised mouth.</li>
              <li>Now, let's create rules to show emotions! For example:</li>
              <ul>
                <li><strong>Happy:</strong> Smiling mouth + wide eyes</li>
                <li><strong>Sad:</strong> Frowning mouth + droopy eyes</li>
                <li><strong>Surprised:</strong> Open mouth + wide eyes with raised eyebrows</li>
              </ul>
              <li>Mix and match your face parts to create your own emotions!</li>
            </ol>
            <img src={asset('images/create-a-face.png')} alt="Create a Face" className="activity-image" />
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}
