import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ActivityHeader from '../components/ActivityHeader'
import LessonPager from '../components/LessonPager'
import { NextWordTrainingStory, NextWordTable } from '../components/ActivityPrintables'
import { buildNextWordTable, PYTHON_LISTING } from '../lib/nextword'

const cupCount = buildNextWordTable().length

export default function NLP() {
  return (
    <>
      <div className="header"><h1>🗣️ Natural Language Processing 💬</h1></div>
      <Breadcrumbs trail={[{ label: 'Lessons', to: '/lessons' }, 'Natural Language Processing']} />
      <div className="container">
        <div className="lesson-content">
          <h2 className="lesson-title">How Computers "Talk"</h2>
          <p>
            Isn't it cool when you can talk to a computer and it understands you? That's called Natural Language Processing, or NLP for short. It's all about teaching computers to understand and use human languages.
          </p>

          <h2>What's it all about?</h2>
          <p>Natural Language Processing is a type of AI that helps computers understand, interpret, and generate human language. It's a tricky thing to do, because human language is full of slang, and context matters a lot! For example, if you say "I'm feeling blue," a computer needs to understand that you mean you're sad, not that you are the color blue.</p>
          <p>NLP uses machine learning to learn the patterns of language. By analyzing huge amounts of text and speech, computers can learn to translate languages, answer questions, and even write their own stories. One of the simplest patterns is <em>which word usually comes next</em> — and you can build a machine that learns it in the activity below.</p>

          <h2>Real-World Applications</h2>
          <ul>
            <li><strong>Smart Assistants:</strong> Siri, Alexa, and Google Assistant all use NLP to understand what you're saying.</li>
            <li><strong>Translation Apps:</strong> Google Translate and other apps use NLP to translate between different languages.</li>
            <li><strong>Autocorrect and Spell Check:</strong> When your phone or computer suggests a correction for a misspelled word, that's NLP in action.</li>
            <li><strong>Chatbots:</strong> Many websites have chatbots that can answer your questions. These chatbots use NLP to understand what you're asking and provide a helpful response.</li>
          </ul>

          <div className="interactive-activity" id="next-word-machine">
            <ActivityHeader id="next-word-machine" />
            <p>
              Build a tiny language model out of paper cups! It learns which word tends to come next by reading a short
              story, then writes brand-new sentences — the same basic trick chatbots use, just much, much smaller.
            </p>
            <div className="activity-visual">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <p>Read the training story and make one cup for each different word.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <p>Every time a word is followed by another, drop a slip with the next word into that word&apos;s cup.</p>
                  <small>This is the &quot;training&quot;.</small>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <p>Start at &quot;the&quot;, draw a slip, go to that word&apos;s cup, and repeat until you draw a full stop.</p>
                  <small>This is the machine &quot;writing&quot;.</small>
                </div>
              </div>
            </div>
            <h4>You will need:</h4>
            <ul>
              <li>{cupCount} paper cups (or envelopes) and a marker</li>
              <li>Small slips of paper — or the ready-made <Link to="/printables/next-word">printable cups and slips</Link></li>
            </ul>
            <h4>The training story:</h4>
            <NextWordTrainingStory />
            <h4>How to Play:</h4>
            <ol>
              <li>Label a cup for each different word in the story.</li>
              <li>Go through the story word by word. For each word, write the word that comes <em>right after it</em> on a slip and drop it in that word&apos;s cup. A full stop counts as a &quot;stop&quot; slip.</li>
              <li>Check your cups against the table below. Notice that &quot;the&quot; has lots of slips, and &quot;cat&quot; shows up in it four times — so after &quot;the&quot;, &quot;cat&quot; is the most likely next word.</li>
              <li>Now make the machine write: say &quot;the&quot;, draw a slip from the &quot;the&quot; cup without looking, say that word, and put the slip back.</li>
              <li>Go to the cup for the word you just said and draw again. Keep going until you draw a stop slip.</li>
              <li>Write down the sentence. Make ten more!</li>
            </ol>
            <NextWordTable />
            <h4>Talk about it:</h4>
            <ul>
              <li>Did the machine write a sentence that was never in the story, like &quot;the cat sat on the log.&quot;? It mixed pieces it learned into something new.</li>
              <li>Did it write something that sounds fine but is silly or untrue, like &quot;the cat saw the cat.&quot;? The machine only knows which words go together — not what is true. Real AI chatbots can make the same kind of mistake, which is why we check what they say.</li>
              <li>Our machine only looks at <em>one</em> word to guess the next. Real language models look at thousands of words and learned from billions of sentences, so they sound much more natural.</li>
            </ul>
          </div>

          <div className="interactive-activity" id="next-word-python">
            <ActivityHeader id="next-word-python" />
            <p>
              Here is the exact same machine as a Python program. Instead of cups it uses a <em>dictionary</em>, and instead of
              drawing slips it uses <code>random.choice</code>. Run it in any Python 3 — no internet or special libraries needed.
            </p>
            <pre className="code-block"><code>{PYTHON_LISTING}</code></pre>
            <h4>Try it:</h4>
            <ol>
              <li>Run the program. Check that the dictionary it prints matches the cups and slips above.</li>
              <li>Run it a few more times. Why are the sentences different every time?</li>
              <li>Replace the story with your own text — song lyrics, a book chapter, your class&apos;s writing. What changes about the sentences it writes?</li>
              <li>
                <strong>Challenge:</strong> make the machine look at the last <em>two</em> words instead of one (use a pair of words as the
                dictionary key). Do the sentences sound more natural? What happens with a short story?
              </li>
            </ol>
            <p>
              <strong>The big idea:</strong> this is a <em>bigram</em> model. Large language models are trained on the same task —
              predict the next word — but they look at thousands of words of context and learn from billions of sentences.
            </p>
          </div>
          <LessonPager current="/nlp" />
        </div>
      </div>
    </>
  )
}
