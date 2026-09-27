import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ActivityHeader from '../components/ActivityHeader'
import LessonPager from '../components/LessonPager'
import HexapawnBoard from '../components/HexapawnBoard'
import { LearningBagExample } from '../components/ActivityPrintables'
import { START, computerPositions } from '../lib/hexapawn'

const boxes = computerPositions()
const candies = boxes.reduce((sum, p) => sum + p.moves.length, 0)

export default function MachineLearning() {
  return (
    <>
      <div className="header"><h1>💡 Machine Learning 🧠</h1></div>
      <Breadcrumbs trail={[{ label: 'Lessons', to: '/lessons' }, 'Machine Learning']} />
      <div className="container">
        <div className="lesson-content">
          <h2 className="lesson-title">How Do Computers Learn?</h2>
          <p>
            Have you ever learned how to ride a bike? You probably fell a few times before you got the hang of it. Each time you fell, your brain learned what not to do. Machine Learning is when we let computers learn in a similar way!
          </p>
          <h2>What's it all about?</h2>
          <p>Machine learning is a type of AI where we don't give the computer all the answers. Instead, we give it a way to learn on its own. There are a few ways to do this:</p>
          <ul>
            <li><strong>Supervised Learning:</strong> This is like learning with a teacher. We give the computer lots of examples that are already labeled. For example, we show it pictures of cats that are labeled "cat" and pictures of dogs that are labeled "dog". The computer learns to tell the difference.</li>
            <li><strong>Unsupervised Learning:</strong> This is like learning on your own. We give the computer a bunch of information and it has to find patterns on its own. For example, it might group customers together based on what they buy.</li>
            <li><strong>Reinforcement Learning:</strong> This is what the Learning Bag and the Sweet Learning Computer below are all about! The computer learns by trial and error. It gets rewards for good moves and punishments for bad moves. Over time, it learns to make better and better decisions.</li>
          </ul>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Spam Filters:</strong> Your email uses machine learning to figure out which emails are spam and which are important.</li>
            <li><strong>Medical Diagnosis:</strong> Doctors can use machine learning to help them diagnose diseases by looking at medical images like X-rays.</li>
            <li><strong>Product Recommendations:</strong> When you're shopping online and the website suggests other things you might like, that's machine learning at work!</li>
            <li><strong>Self-Driving Cars:</strong> These cars use machine learning — trained on millions of miles of driving examples — to recognize the road and make safe decisions.</li>
          </ul>

          <div className="interactive-activity" id="learning-bag">
            <ActivityHeader id="learning-bag" />
            <p>
              A quick, one-bag game that shows the core idea of learning from feedback: every right guess makes the
              right answer a little more likely next time.
            </p>
            <h4>You will need:</h4>
            <ul>
              <li>A bag you can&apos;t see into</li>
              <li>Beads (or counters) in two colours — about 4 of each to start, plus spares</li>
              <li>A friend</li>
            </ul>
            <h4>How to Play:</h4>
            <ol>
              <li>Put the same number of red and black beads in the bag. This bag is the computer&apos;s &quot;brain&quot;.</li>
              <li>Your friend secretly picks a colour and keeps it the same all game.</li>
              <li>Pull out one bead without looking. Its colour is the computer&apos;s guess.</li>
              <li>If your friend says &quot;Yes!&quot;, put the bead back <em>and add another of the same colour</em>. That&apos;s a reward.</li>
              <li>If your friend says &quot;No!&quot;, leave that bead out of the bag. That&apos;s a punishment.</li>
              <li>Keep going. Watch the chance of a right guess climb, even though the bag never &quot;knows&quot; the answer.</li>
            </ol>
            <LearningBagExample />
            <p className="activity-credit">
              Where it comes from: a one-box version of the matchbox idea below. Looking for a neural-network activity?
              Try cs4fn&apos;s{' '}
              <a href="https://www.cs4fn.org/teachers/activities/braininabag/" target="_blank" rel="noopener noreferrer">Brain-in-a-bag</a>,
              where students act as neurons connected by ropes.
            </p>
          </div>

          <div className="interactive-activity" id="sweet-learning-computer">
            <ActivityHeader id="sweet-learning-computer" />
            <p>
              A &quot;computer&quot; made of cups and candy learns to play a game — and after enough games it can&apos;t be beaten.
            </p>
            <div className="activity-visual">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <p>Set up Hexapawn on a 3×3 grid with 3 pawns each.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <p>On its turn, the computer picks a random candy from the box that matches the board.</p>
                  <small>The candy&apos;s colour says which move to make.</small>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <p>When the computer loses, eat the candy for its last move and play again.</p>
                  <small>Bad moves disappear, so the computer gets better.</small>
                </div>
              </div>
            </div>
            <h4>You will need:</h4>
            <ul>
              <li>A friend to play with (or play against the computer yourself)</li>
              <li>A 3×3 board and 3 coins of one colour for you, 3 of another for the computer</li>
              <li>{boxes.length} cups or matchboxes, each with a card from the <Link to="/printables/hexapawn">printable matchbox cards</Link></li>
              <li>{candies} small candies in four colours (red, blue, green, yellow), plus spares</li>
            </ul>
            <h4>How to Play:</h4>
            <p>
              The goal is to get one of your pawns to the far side of the board, take all of the other side&apos;s pawns,
              or leave them with no move on their turn.
            </p>
            <figure className="board-figure">
              <HexapawnBoard board={START} size={180} label="Starting position: three dark computer pawns on the top row, three light player pawns on the bottom row" />
              <figcaption>Starting position. Dark pawns are the computer&apos;s; light pawns are yours.</figcaption>
            </figure>
            <ol>
              <li>Put your pawns on the bottom row and the computer&apos;s pawns on the top row.</li>
              <li>You always go first. A pawn moves one square straight forward into an empty square, or one square diagonally forward to capture.</li>
              <li>On the computer&apos;s turn, find the box whose card matches the board (or matches it flipped left-to-right). Shake it and take out one candy without looking.</li>
              <li>Make the move shown by the arrow of that candy&apos;s colour, and set the candy on top of the box.</li>
              <li>If the computer loses, eat the candy from the computer&apos;s <em>last</em> move — that move is gone for good. Put the other candies back in their boxes.</li>
              <li>If the computer wins, put all the candies back in their boxes. (Want it to learn faster? Add an extra candy of the same colour to each box it used.)</li>
              <li>If the computer&apos;s box is empty on its turn, it gives up. Count that as a loss and eat the candy from its move before.</li>
              <li>Play again and again. Hexapawn can always be won by the second player, so once enough losing moves are eaten, the computer never loses.</li>
            </ol>
            <p className="activity-credit">
              Where it comes from: adapted from cs4fn&apos;s{' '}
              <a href="https://www.cs4fn.org/machinelearning/sweetlearningcomputer.php" target="_blank" rel="noopener noreferrer">The Sweet Learning Computer</a>{' '}
              (Queen Mary University of London), a tastier version of Donald Michie&apos;s MENACE matchbox computer (1961).
              Using it for Hexapawn was Martin Gardner&apos;s idea (<em>Scientific American</em>, 1962).
            </p>
          </div>
          <LessonPager current="/machine-learning" />
        </div>
      </div>
    </>
  )
}
