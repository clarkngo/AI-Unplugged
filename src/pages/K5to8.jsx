import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import LessonPlan from '../components/LessonPlan';

export default function K5to8() { // eslint-disable-line
  return (
    <>
      <div className="header">
        <h1>🔧 K 5–8: Hands-On AI Projects</h1>
        <p>Hands-on projects that mix unplugged tasks with simple digital tools to explore how AI appears in familiar tech.</p>
      </div>
      <Breadcrumbs trail="STEM K-12 > K 5–8" />
      <div className="container">
        <div className="lesson-content">
          <h1>Intermediate Pathway: Ages 9–13</h1>
          <p>Blend unplugged activities with simple tools and mini-projects that reveal how everyday tech uses AI.</p>
          <LessonPlan
            title="Lesson 1 — Brain-in-a-Bag (30–45 min)"
            objectives="Explore input/output behaviour, hypothesis testing, and simple rule development."
            materials="Opaque bag or box, object tokens, paper for recording, pens."
            procedure={[
              "Introduce the idea of a 'black box' that makes choices based on inputs (5 minutes).",
              'Groups feed examples into the bag and observe outputs, recording what happens (15–25 minutes).',
              'Ask groups to propose a simple rule that might explain the outputs, then test it with new inputs (10 minutes).',
            ]}
            assessment="Have each group present their proposed rule and one test that supports or refutes it."
            differentiation="Provide structured templates for recording observations for learners who need scaffolding; ask advanced groups to propose alternative rules."
          />
          <LessonPlan
            title="Lesson 2 — Hexapawn / Intelligent Paper (40–60 min)"
            objectives="Explore strategy, learning from simple feedback, and incremental improvement."
            materials="Paper game boards, counters, printed instructions, optional timers."
            procedure={[
              'Explain game rules and run a demo match (5–10 minutes).',
              'Students play repeated matches, observing how simple strategies succeed or fail (20–30 minutes).',
              'Reflect on what changed between rounds and how experience influenced choices (10–15 minutes).',
            ]}
            assessment="Students write a short reflection describing one strategy that improved results and why."
            differentiation="Use paired roles (player and recorder) so students can focus on one task at a time."
          />
          <LessonPlan
            title="Lesson 3 — I Spy with Feature Questions (25-35 min)"
            objectives="Practice breaking down complex objects into simple, testable features."
            materials="A collection of classroom objects, whiteboard or chart paper."
            procedure={[
              "One student secretly chooses an object in the room (2 minutes).",
              "Other students ask yes/no questions based on observable features (e.g., 'Is it blue?', 'Is it bigger than a book?') (15-20 minutes).",
              "Map the questions on the board as a decision tree. Discuss which questions were most effective (10 minutes).",
            ]}
            assessment="Evaluate the quality of the feature-based questions students ask."
            differentiation="Provide a list of example feature questions (color, size, shape, material) for students who need a starting point."
          />
          <button className="print-btn" onClick={() => window.print()}>Printable pack (K 5–8)</button>
          <p className="muted">Printable teacher notes, activity sheets, and simple assessment rubrics for middle-primary learners.</p>
          <Link to="/k12" className="back-link">Back to STEM K-12 Pathways</Link>
        </div>
      </div>
    </>
  );
}