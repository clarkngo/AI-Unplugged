import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'

// Simple reusable layout header (used as Home hero)
function Header() {
  return (
      <div className="header">
      <h1>🚀 AI Adventures for Kids! 🤖</h1>
      <p>Welcome to a world of fun and learning about Artificial Intelligence!</p>
      <div className="cta-group">
        <Link to="/what-is-ai" className="btn">Start with "What is AI?"</Link>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            const el = document.getElementById('activities');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Browse Activities
        </button>
      </div>
    </div>
  )
}

function Breadcrumbs({ trail }) {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {trail ? ` / ${trail}` : null}
    </div>
  )
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">AI Adventures</Link>
        <div className="nav-links">
          <Link to="/what-is-ai">What is AI?</Link>
          <Link to="/machine-learning">Machine Learning</Link>
          <Link to="/computer-vision">Computer Vision</Link>
          <Link to="/nlp">NLP</Link>
        </div>
      </div>
    </nav>
  )
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

// Pages converted from reference/*.html
function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="section-title">Getting Started</h2>
        <div className="lesson-grid">
          <Link to="/what-is-ai" className="lesson-card">
            <div className="icon">🧠</div>
            <h2>What is AI?</h2>
            <p>Discover the secrets of what makes a computer "smart"!</p>
          </Link>
          <Link to="/how-to-teach" className="lesson-card">
            <div className="icon">🎓</div>
            <h2>How to Teach AI Unplugged</h2>
            <p>A guide for educators and parents.</p>
          </Link>
        </div>

        <h2 id="activities" className="section-title">Activities</h2>
        <div className="lesson-grid">
          <Link to="/machine-learning" className="lesson-card">
            <div className="icon">💡</div>
            <h2>Machine Learning</h2>
            <p>Learn how computers can learn from mistakes, just like you!</p>
          </Link>
          <Link to="/computer-vision" className="lesson-card">
            <div className="icon">👀</div>
            <h2>Computer Vision</h2>
            <p>How do computers see and understand the world around them?</p>
          </Link>
          <Link to="/nlp" className="lesson-card">
            <div className="icon">🗣️</div>
            <h2>Natural Language Processing</h2>
            <p>Ever wonder how your tablet understands what you say? Let's find out!</p>
          </Link>
          <Link to="/generative-ai" className="lesson-card">
            <div className="icon">🎨</div>
            <h2>Generative AI</h2>
            <p>Can a computer be creative? Let's explore how AI can create art, music, and stories.</p>
          </Link>
          <Link to="/ai-ethics" className="lesson-card">
            <div className="icon">🤝</div>
            <h2>AI Ethics</h2>
            <p>With great power comes great responsibility. Let's learn how to use AI fairly.</p>
          </Link>
          <Link to="/robotics" className="lesson-card">
            <div className="icon">🤖</div>
            <h2>Robotics</h2>
            <p>Discover how AI gives robots their "brains" and brings them to life.</p>
          </Link>
        </div>
      </div>
    </>
  )
}

function WhatIsAI() {
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
            {/* Image removed per policy to avoid reference folder assets */}
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}

function MachineLearning() {
  return (
    <>
      <div className="header"><h1>💡 Machine Learning 🧠</h1></div>
      <Breadcrumbs trail="Machine Learning" />
      <div className="container">
        <div className="lesson-content">
          <h1>How Do Computers Learn?</h1>
          <p>
            Have you ever learned how to ride a bike? You probably fell a few times before you got the hang of it. Each time you fell, your brain learned what not to do. Machine Learning is when we let computers learn in a similar way!
          </p>
          <h2>What's it all about?</h2>
          <p>Machine learning is a type of AI where we don't give the computer all the answers. Instead, we give it a way to learn on its own. There are a few ways to do this:</p>
          <ul>
            <li><strong>Supervised Learning:</strong> This is like learning with a teacher. We give the computer lots of examples that are already labeled. For example, we show it pictures of cats that are labeled "cat" and pictures of dogs that are labeled "dog". The computer learns to tell the difference.</li>
            <li><strong>Unsupervised Learning:</strong> This is like learning on your own. We give the computer a bunch of information and it has to find patterns on its own. For example, it might group customers together based on what they buy.</li>
            <li><strong>Reinforcement Learning:</strong> This is what the "Sweet Learning Computer" game is all about! The computer learns by trial and error. It gets rewards for good moves and punishments for bad moves. Over time, it learns to make better and better decisions.</li>
          </ul>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Spam Filters:</strong> Your email uses machine learning to figure out which emails are spam and which are important.</li>
            <li><strong>Medical Diagnosis:</strong> Doctors can use machine learning to help them diagnose diseases by looking at medical images like X-rays.</li>
            <li><strong>Product Recommendations:</strong> When you're shopping online and the website suggests other things you might like, that's machine learning at work!</li>
            <li><strong>Self-Driving Cars:</strong> These cars use reinforcement learning to learn how to drive safely in different situations.</li>
          </ul>

          <div className="interactive-activity">
            <h3>🍬 The Sweet Learning Computer 🍭</h3>
            <p>
              This is a yummy activity from AI Unplugged that shows how a "machine" made of candy can learn to play a game.
            </p>
            <h4>You will need:</h4>
            <ul>
              <li>A friend to play with</li>
              <li>A Hexapawn game board (a 3x3 grid)</li>
              <li>3 coins of one color (for you) and 3 of another color (for the computer)</li>
              <li>About 20 small boxes (like matchboxes)</li>
              <li>Lots of candy!</li>
            </ul>
            <h4>How to Play:</h4>
            <p>This game is called Hexapawn. The goal is to get one of your coins to the other side of the board, or to stop the other player from being able to move.</p>
            {/* Image removed per policy to avoid reference folder assets */}
            <ol>
              <li>Set up the board with the coins in the first row on each side.</li>
              <li>You go first. You can move one of your coins forward one space, or capture one of the computer's coins by moving diagonally.</li>
              <li>Now it's the computer's turn. The computer is made of the matchboxes. Each box will have a picture of a board position on it, and inside will be candies that show the possible moves from that position.</li>
              <li>Find the box that matches the current board. Take out one candy (one move) and move the computer's coin.</li>
              <li>If the computer wins, put the candy back and add another one! The computer is rewarded for winning.</li>
              <li>If the computer loses, it gets "punished" by eating the candy from the last move. That move is removed from the box.</li>
              <li>Play again! After a few games, the computer will have "learned" how to play better because it has removed its bad moves.</li>
            </ol>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}

function ComputerVision() {
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
            {/* Illustration removed per policy; consider adding new assets under /public in future */}
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}

function NLP() {
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
            {/* Image removed per policy to avoid reference folder assets */}
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}

function GenerativeAI() {
  return (
    <>
      <div className="header"><h1>🎨 Generative AI ✍️</h1></div>
      <Breadcrumbs trail="Generative AI" />
      <div className="container">
        <div className="lesson-content">
          <h1>Creating with AI</h1>
          <p>
            Imagine an AI that can draw a picture of a purple elephant flying in space, or write a story about a brave knight who is friends with a dragon. That's Generative AI! It's a type of AI that can create brand new things, like images, music, and stories.
          </p>

          <h2>What's it all about?</h2>
          <p>Generative AI learns from all the amazing things that humans have already created. It looks at millions of pictures, reads tons of books, and listens to all kinds of music. Then, it uses what it has learned to create something completely new! It's like a super-powered artist or writer that can mix and match ideas in new and surprising ways.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Art Tools:</strong> There are now AI tools that can create amazing pictures from just a few words of description.</li>
            <li><strong>Music Composition:</strong> AI can be used to compose new songs in different styles, from classical to pop.</li>
            <li><strong>Writing Assistants:</strong> Some AI tools can help you write stories, poems, and even emails.</li>
            <li><strong>Game Design:</strong> Generative AI can be used to create new levels, characters, and worlds in video games.</li>
          </ul>

          <div className="interactive-activity">
            <h3>🎲 Story Dice 🎲</h3>
            <p>
              Let's try our own version of generative AI! We'll use dice to randomly generate ideas for a story.
            </p>
            <h4>You will need:</h4>
            <ul>
              <li>3 dice (or you can use an online dice roller)</li>
              <li>Paper and a pencil</li>
            </ul>
            <h4>How to Play:</h4>
            <p>We'll create a story with a character, a setting, and a problem. Roll a die for each one to see what you get!</p>
            {/* Image removed per policy to avoid reference folder assets */}
            <ol>
              <li><strong>Roll for your character:</strong> Who is the hero of your story?</li>
              <li><strong>Roll for your setting:</strong> Where does your story take place?</li>
              <li><strong>Roll for the problem:</strong> What challenge does your character need to overcome?</li>
              <li>Now, write a story that includes all three elements! You've just created a new story, just like a generative AI.</li>
            </ol>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}

function AIEthics() {
  return (
    <>
      <div className="header"><h1>🤝 AI Ethics 🤔</h1></div>
      <Breadcrumbs trail="AI Ethics" />
      <div className="container">
        <div className="lesson-content">
          <h1>Using AI Responsibly</h1>
          <p>
            AI is a very powerful tool, so it's important to think about how we use it. Just like we learn to be kind and fair to other people, we need to make sure that the AI we create is fair and helpful to everyone.
          </p>

          <h2>What's it all about?</h2>
          <p>AI ethics is all about thinking about what is right and wrong when we use AI. One important idea is <strong>fairness</strong>. We need to make sure that AI treats everyone equally. For example, if an AI is helping doctors diagnose diseases, it should work well for everyone, no matter where they are from or what they look like.</p>
          <p>Another important idea is <strong>bias</strong>. AI learns from the information we give it. If that information is biased, then the AI can become biased too. For example, if we only show an AI pictures of doctors who are men, it might think that only men can be doctors. We need to be careful to give AI good and fair information so it doesn't learn our own biases.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Hiring:</strong> Some companies use AI to help them hire people. It's important that these AIs are fair and don't discriminate against certain groups of people.</li>
            <li><strong>Self-Driving Cars:</strong> If a self-driving car is in a difficult situation, it might have to make a choice. Who decides what the car should do? These are tough questions that people who work on AI ethics think about.</li>
            <li><strong>Social Media:</strong> The videos and posts that you see on social media are often chosen by an AI. It's important that these AIs show you a variety of different things and don't just show you things that make you angry or sad.</li>
          </ul>

          <div className="interactive-activity">
            <h3>🤔 Fair or Unfair? 🤔</h3>
            <p>
              Let's think about some different situations and decide if the AI is being fair or unfair.
            </p>
            {/* Image removed per policy to avoid reference folder assets */}
            <h4>Scenarios:</h4>
            <ul>
              <li>A robot is programmed to deliver cookies, but it only delivers them to houses that are painted blue. Is that fair?</li>
              <li>A self-driving car is trying to decide what to do. There is a dog in the road and a cat on the sidewalk. Should it swerve to avoid the dog, even if it means it might hit the cat?</li>
              <li>An AI is helping a teacher grade homework. The AI gives better grades to students who use fancy words. Is that fair?</li>
            </ul>
            <p>What do you think? There are no easy answers! These are the kinds of questions that people who work in AI ethics think about every day.</p>
          </div>

          <Link to="/" className="back-link">🏡 Back to All Lessons</Link>
        </div>
      </div>
    </>
  )
}

function Robotics() {
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
            {/* Image removed per policy to avoid reference folder assets */}
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

function HowToTeach() {
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
          <Link to="/machine-learning" className="back-link">See Machine Learning in Action</Link>

          <h3>Computer Vision: "I Spy" with a Twist</h3>
          <p>How does a computer "see"? Play a game of "I Spy" where one person (the "computer") can only ask yes/no questions about simple features like shapes, colors, and textures. This simulates how a computer vision model breaks down an image into simple, recognizable patterns.</p>
          <Link to="/computer-vision" className="back-link">Learn About Computer Vision</Link>

          <h3>Generative AI: Story Dice</h3>
          <p>Generative AI creates new things. A simple way to understand this is with story dice. Each die has a different picture on it. Roll the dice and create a story based on the pictures that come up. This mimics how a generative model uses a set of rules and data to generate new, creative outputs.</p>
          <Link to="/generative-ai" className="back-link">Discover Generative AI</Link>

          <p>By using imagination and simple materials, you can unlock the complex world of AI for learners of all ages!</p>
        </div>
        <Link to="/" className="back-link">Back to All Lessons</Link>
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/what-is-ai" element={<WhatIsAI />} />
        <Route path="/how-to-teach" element={<HowToTeach />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/nlp" element={<NLP />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />
        <Route path="/ai-ethics" element={<AIEthics />} />
        <Route path="/robotics" element={<Robotics />} />
      </Route>
    </Routes>
  )
}

export default App
