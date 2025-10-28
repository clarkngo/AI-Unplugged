import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import LessonPlan from '../components/LessonPlan';

export default function K1to4() { // eslint-disable-line
  return (
    <>
      <div className="header">
        <h1>🧩 K 1–4: Playful AI Foundations</h1>
        <p>Play-based activities that introduce core ideas with minimal reading — perfect for early learners.</p>
      </div>
      <Breadcrumbs trail="STEM K-12 > K 1–4" />
      <div className="container">
        <div className="lesson-content">
          <h1>Introductory Pathway: Ages 5–9</h1>
          <p>Short, playful lessons that introduce core ideas through games, stories, and simple group activities.</p>
          <LessonPlan
            title="Lesson 1 — Story Dice (20–30 min)"
            objectives="Pattern recognition, sequencing, responding to prompts."
            materials="Printable story dice or picture cards (1 set per group), paper, pencils."
            procedure={[
              'Introduce the activity and learning goal (2 minutes).',
              'In groups, students roll the dice or pick 3 cards and use them to build a short story (10–15 minutes).',
              'Groups share one short story and identify patterns or repeated elements (5–10 minutes).',
            ]}
            assessment="Quick exit ticket: write one thing the group noticed that repeated across stories."
            differentiation="Provide image prompts for learners who need support; for advanced learners ask for a second rule that modifies the story."
          />
          <LessonPlan
            title="Lesson 2 — Face Features Collage (30–40 min)"
            objectives="Observe features, describe attributes, and relate features to categories."
            materials="Magazines or printed face parts, scissors, glue, paper, markers."
            procedure={[
              'Demo: show how to build face collages and name features (5 minutes).',
              'Students create collages from parts and label features (15–20 minutes).',
              'Class sorts collages by one chosen feature (e.g., eye shape) and explains decisions (10 minutes).',
            ]}
            assessment="Ask learners to say which feature they used to sort and why."
            differentiation="Use pre-cut parts or larger tactile pieces for learners with fine-motor challenges."
          />
          <LessonPlan
            title="Lesson 3 — What is AI? Read-Aloud (15-20 min)"
            objectives="Introduce the term 'Artificial Intelligence' and discuss examples."
            materials="A picture book about AI (e.g., 'AI for Kids') or a set of curated images showing AI in daily life."
            procedure={[
              'Read the story or show the images, pausing to ask questions (10 minutes).',
              "Ask students to share one place they have seen something \"smart\" like a computer or toy (5 minutes).",
              'Create a class mind-map of AI examples on the board (5 minutes).',
            ]}
            assessment="Observe student participation in discussion and their examples."
            differentiation="Use emoji cards or physical objects to represent AI concepts for non-verbal learners."
          />
          <button className="print-btn" onClick={() => window.print()}>Printable pack (K 1–4)</button>
          <p className="muted">The printable pack contains simple worksheets, story dice pages, and teacher notes. Use your browser's print dialog to save a PDF or print directly.</p>
          <Link to="/k12" className="back-link">Back to STEM K-12 Pathways</Link>
        </div>
      </div>
    </>
  );
}