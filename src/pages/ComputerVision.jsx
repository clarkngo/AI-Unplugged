import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ActivityHeader from '../components/ActivityHeader'
import LessonPager from '../components/LessonPager'
import { asset } from '../utils/paths'
import { PixelGrid, PixelPuzzle } from '../components/ActivityPrintables'
import { PIXEL_PUZZLE, runLengths } from '../lib/pixels'

export default function ComputerVision() {
  return (
    <>
      <div className="header"><h1>👀 Computer Vision 🖼️</h1></div>
      <Breadcrumbs trail={[{ label: 'Lessons', to: '/lessons' }, 'Computer Vision']} />
      <div className="container">
        <div className="lesson-content">
          <h2 className="lesson-title">How Computers "See"</h2>
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

            <div className="interactive-activity" id="create-a-face">
            <ActivityHeader id="create-a-face" />
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
            <div className="face-examples">
              <figure>
                <img src={asset('images/happy-face.svg')} alt="A simple drawing of a happy face" className="face-icon" />
                <figcaption>Happy</figcaption>
              </figure>
              <figure>
                <img src={asset('images/sad-face.svg')} alt="A simple drawing of a sad face" className="face-icon" />
                <figcaption>Sad</figcaption>
              </figure>
              <figure>
                <img src={asset('images/surprised-face.svg')} alt="A simple drawing of a surprised face" className="face-icon" />
                <figcaption>Surprised</figcaption>
              </figure>
            </div>
          </div>

          <div className="interactive-activity" id="pixel-pictures">
            <ActivityHeader id="pixel-pictures" />
            <p>
              A camera doesn&apos;t see a face or a dog — it sees a grid of tiny squares called <strong>pixels</strong>, and each pixel
              is just a number. Can you turn the numbers back into a picture?
            </p>
            <h4>You will need:</h4>
            <ul>
              <li>The number rows and empty grid below, or the <Link to="/printables/pixel-pictures">printable version</Link></li>
              <li>A pencil or crayon</li>
            </ul>
            <h4>How to Play:</h4>
            <ol>
              <li>Each line of numbers is one row of the picture, from top to bottom.</li>
              <li>Go along the row from left to right. For a <code>1</code>, colour the square in. For a <code>0</code>, leave it blank.</li>
              <li>When every row is done, what picture did you find?</li>
              <li>Now make your own picture on an empty grid and write down its numbers. Swap numbers with a friend and decode each other&apos;s pictures.</li>
            </ol>
            <PixelPuzzle />
            <details className="reveal">
              <summary>Reveal the picture</summary>
              <PixelGrid rows={PIXEL_PUZZLE.rows} label={`The decoded picture: ${PIXEL_PUZZLE.answer}`} />
              <p>It&apos;s {PIXEL_PUZZLE.answer}!</p>
            </details>
            <h4>Talk about it:</h4>
            <ul>
              <li>The computer only ever gets the numbers. How could it work out that this is a face? Try writing a rule, like &quot;two 1s with blanks around them in row 5 are eyes&quot;. Would your rule still work if the face moved one square to the left?</li>
              <li>Rules like that break easily, which is why modern computer vision <em>learns</em> what faces look like from thousands of examples instead.</li>
              <li>Colour photos use three numbers per pixel — how much red, green and blue — and a phone photo has millions of pixels.</li>
            </ul>
            <p>
              <strong>Level up (grades 5–8):</strong> long runs of the same number waste space. Write each row as counts instead —
              how many 0s, then how many 1s, and so on, always starting with 0s. The first row, <code>0000110000</code>, becomes{' '}
              <code>{runLengths(PIXEL_PUZZLE.rows[0]).join(', ')}</code>. That&apos;s <em>compression</em>, the same idea that keeps
              photo files small.
            </p>
            <p className="activity-credit">
              Where it comes from: inspired by CS Unplugged&apos;s{' '}
              <a href="https://www.csunplugged.org/en/topics/image-representation/" target="_blank" rel="noopener noreferrer">Colour by Numbers</a>{' '}
              image representation activity.
            </p>
          </div>
          <LessonPager current="/computer-vision" />
        </div>
      </div>
    </>
  )
}
