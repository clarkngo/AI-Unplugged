import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ActivityHeader from '../components/ActivityHeader'
import LessonPager from '../components/LessonPager'
import { TRAINING, TEST, EXTRA_TRAINING } from '../lib/fruit'

export default function AIEthics() {
  return (
    <>
      <div className="header"><h1>🤝 AI Ethics 🤔</h1></div>
      <Breadcrumbs trail={[{ label: 'Lessons', to: '/lessons' }, 'AI Ethics']} />
      <div className="container">
        <div className="lesson-content">
          <h2 className="lesson-title">Using AI Responsibly</h2>
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

          <div className="interactive-activity" id="fair-or-unfair">
            <ActivityHeader id="fair-or-unfair" />
            <p>
              Let's think about some different situations and decide if the AI is being fair or unfair.
            </p>
            <div className="activity-visual">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <p>Read each scenario and mark if it seems fair or unfair.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <p>Discuss why — identify possible sources of bias or harm.</p>
                  <small>Check data, rules, and who benefits.</small>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <p>Propose a change to make the system fairer and test it.</p>
                </div>
              </div>
            </div>
            <h4>Scenarios:</h4>
            <ul>
              <li>A robot is programmed to deliver cookies, but it only delivers them to houses that are painted blue. Is that fair?</li>
              <li>A self-driving car is trying to decide what to do. There is a dog in the road and a cat on the sidewalk. Should it swerve to avoid the dog, even if it means it might hit the cat?</li>
              <li>An AI is helping a teacher grade homework. The AI gives better grades to students who use fancy words. Is that fair?</li>
            </ul>
            <p>What do you think? There are no easy answers! These are the kinds of questions that people who work in AI ethics think about every day.</p>
          </div>

          <div className="interactive-activity" id="biased-sorter">
            <ActivityHeader id="biased-sorter" />
            <p>
              An AI learns from the examples we give it. What happens when the examples are lopsided? In this game, <em>you</em> are
              the AI.
            </p>
            <h4>You will need:</h4>
            <ul>
              <li>The <Link to="/printables/fruit-sorter">printable fruit cards</Link>, cut out, with the &quot;skin&quot; strip folded under</li>
              <li>Groups of 3–4</li>
            </ul>
            <h4>How to Play:</h4>
            <ol>
              <li><strong>Train:</strong> give each group the {TRAINING.length} training cards. Their job is to find <em>one</em> rule, using one thing on the front of the card, that sorts every card into apples and lemons.</li>
              <li>Every group will find the same answer: colour is the only thing that works (&quot;red means apple, yellow means lemon&quot;). Shape doesn&apos;t, because there&apos;s a round lemon.</li>
              <li><strong>Test:</strong> now hand out the {TEST.length} test cards, with the fruit names hidden. Groups use their rule to label each one.</li>
              <li>Reveal the answers. The rule has no answer for the green apple and calls the yellow apple a lemon! The &quot;AI&quot; learned a shortcut from its examples, not what an apple really is.</li>
              <li><strong>Fix the data:</strong> add the {EXTRA_TRAINING.length} extra training cards (a green apple and two yellow ones) and try to find a rule again. Now colour doesn&apos;t work, and neither does shape.</li>
              <li><strong>Fix the features:</strong> unfold the skin strip. Smooth means apple, bumpy means lemon — and it works for every card. Better examples showed the rule was wrong; a better feature fixed it.</li>
            </ol>
            <h4>Talk about it:</h4>
            <ul>
              <li>Whose fault was the mistake — the AI&apos;s, or the people who chose its examples?</li>
              <li>
                This happens with real AI. In the 2018 <em>Gender Shades</em> study, Joy Buolamwini and Timnit Gebru found that
                commercial face-analysis systems made far more mistakes on darker-skinned women than on lighter-skinned men. The
                examples the systems learned from and were tested on didn&apos;t represent everyone.
              </li>
              <li>If you were building an AI to sort fruit at a supermarket, what examples would you collect first?</li>
            </ul>
          </div>
          <LessonPager current="/ai-ethics" />
        </div>
      </div>
    </>
  )
}
